<template>
  <div id="prismic-tutorial">

    <header>
      <nav><a href="#bootstrap"><strong>Configure a repository</strong></a><a href="https://prismic.io/docs/javascript/getting-started/integrating-with-an-existing-javascript-project" target="_blank" class="doc">Documentation<img src="@/assets/img/tutorial/open.svg" alt="Open"></a>
      </nav>
      <div class="wrapper"><img src="@/assets/img/tutorial/rocket.svg" alt="Rocket">
        <h1>High five, you deserve it!</h1>
        <p>Grab a well deserved cup of coffee, you're just a few steps away from creating a page with dynamic content.</p>
      </div>
      <div class="hero-curve"></div>
      <div class="flip-flap">
        <div class="flipper">
          <div class="guide">
            <ul>
              <li><a href="#bootstrap"><span>1</span>Bootstrap your project<img src="@/assets/img/tutorial/arrow.svg" alt="Arrow"></a></li>
              <li><a href="#custom-type"><span>2</span>Create a Custom Type "Page"<img src="@/assets/img/tutorial/arrow.svg" alt="Arrow"></a></li>
              <li><a href="#new-page"><span>3</span>Create your first page!<img src="@/assets/img/tutorial/arrow.svg" alt="Arrow"></a></li>
              <li><a href="#code"><span>4</span>Query the API and create the page template<img src="@/assets/img/tutorial/arrow.svg" alt="Arrow"></a></li>
              <li><a href="#done"><span>5</span>Well done!<img src="@/assets/img/tutorial/arrow.svg" alt="Arrow"></a></li>
            </ul>
          </div>
          <div class="gif"></div>
        </div>
      </div>
    </header>

    <section>
      <p>This is a tutorial page included in this PHP Quickstart project, it has a few useful links and example snippets to help you get started. You can access this page at <a href="http://localhost:8080/tutorial">http://localhost:8080/tutorial</a>.</p>
      <h2>Follow these steps:</h2>

      <h3 id="bootstrap"><span>1</span>Bootstrap your project</h3>
      <h4>Create a prismic.io content repository</h4>
      <p>A repository is where your website’s content will live. Simply <a href="https://prismic.io/#create" target="_blank">create one</a> choosing a repository name and a plan. We’ve got a variety of plans including our favorite, Free!</p>
      <h4>Configure your project</h4>
      <p>Open config.php and assign the API endpoint for your prismic.io repository to the PRISMIC_URL constant:</p>
      <div class="source-code">
        <pre><code>// In config.php
define("PRISMIC_URL", "https://your-repo-name.prismic.io/api/v2");
</code></pre>
      </div>
      <p>Next let's see how to create a page in your website filled with content retrieved from prismic.io!</p>

      <h3 id="custom-type"><span>2</span>Create a Custom Type "Page"</h3>
      <p>We will create a page containing a title, a paragraph and an image. Let's create a Custom Type in prismic.io with the corresponding fields. We'll add an additional UID (unique identifier) field for querying the page.</p>
      <p>Go to the repository backend you've just created (at https://your-repo-name.prismic.io). Then navigate to the <em>"Custom Types"</em> section (icon on the left navbar) and create a new Repeatable Type, for this tutorial let's name it "Page". Make sure that the system automatically assigns this an API ID of "page".</p>
      <p>Once the "Page" Custom Type is created, we have to define how we want to model it, that is to say a document containing a UID, a title, a paragraph and an image. Click on <em>"JSON editor"</em> (right sidebar) and paste the following JSON data into the Custom Type JSON editor. When you're done, hit <em>"Save"</em>.</p>
      <div class="source-code">
        <pre><code>{
  "Main" : {
    "uid" : {
      "type" : "UID",
      "config" : {
        "placeholder" : "UID"
      }
    },
    "title" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1",
        "placeholder" : "Title..."
      }
    },
    "description" : {
        "type" : "StructuredText",
        "config" : {
          "multi" : "paragraph,em,strong,hyperlink",
          "placeholder" : "Description..."
        }
    },
    "image" : {
      "type" : "Image"
    }
  }
}
</code></pre>
      </div>

      <h3 id="new-page"><span>3</span>Create your first page!</h3>
      <p>The "Page" Custom Type you've just created contains a title, a paragraph, an image and a UID (unique identifier). Now it is time to fill in your first page!</p>
      <p>Create a new "Page" content in your repository: go to <em>"Content"</em> and hit <em>"New"</em>.</p>
      <p>Fill the corresponding fields. Note the value you filled in the UID field, because it will be a part of the page URL, for that purpose let's type "<strong>quickstart</strong>".</p>
      <p>When you're done, hit <em>"Save"</em> then <em>"Publish"</em>.</p>

      <h3 id="code"><span>4</span>Query the API and create the page template</h3>
      <h4>Query the API for your "quickstart" page</h4>
      <p>Now that you've created your "quickstart" page in your prismic.io repository, go back to your local code. Let's make an API call to retrieve page content. For that, we will use the specified UID.</p>
      <p>
        Once we've retrieved the page, we render the template providing it with its content.
        <br>
        Add the following route to your app/app.php file:
      </p>
      <div class="source-code">
        <pre><code>// In app/app.php

// Get page by UID
$app->get('/page/{uid}', function ($request, $response, $args) use ($app, $prismic) {
  // Query the API
  $api = $prismic->get_api();
  $document = $api->getByUID('page', $args['uid']);

  // Render the page
  render($app, 'page', array('document' => $document));
});
</code></pre>
      </div>
      <h4>Create webpage with the retrieving content</h4>
      <p>Now all that's left to be done is to output on a webpage the content we fetched from the API. Create a new template file named "page.php" inside the views folder. Here's an example that'll display a webpage "Page" with its title, description and image:</p>
      <div class="source-code">
        <pre><code>&lt;!-- Create file app/views/page.php --&gt;

&lt;?php
use Prismic\Dom\RichText;

$document = $WPGLOBAL['document'];
?&gt;

&lt;?php include_once 'header.php'; ?&gt;

&lt;div&gt;
  &lt;h1&gt;&lt;?= RichText::asText($document-&gt;data-&gt;title) ?&gt;&lt;/h1&gt;
  &lt;div&gt;
    &lt;?= RichText::asHtml($document-&gt;data-&gt;description) ?&gt;
  &lt;/div&gt;
  &lt;img src="&lt;?= $document-&gt;data-&gt;image-&gt;url ?&gt;" alt="&lt;?= $document-&gt;data-&gt;image-&gt;alt ?&gt;"&gt;
&lt;/div&gt;

&lt;?php include_once 'footer.php'; ?&gt;
</code></pre>
      </div>
      <p>In your browser go to <a href="http://localhost:8080/page/quickstart">http://localhost:8080/page/quickstart</a> and you're done! You've officially created a page that pulls content from prismic.io.</p>
      <p>Obviously, since this approach is based on API, you're completely free to choose a different framework or template engine. It's all up to you!</p>

      <h3 id="done"><span>5</span>Well done!</h3>
      <p>Sit back and enjoy the result.</p>
      <p>Basically in these few steps you've added content management to your page and thanks to the prismic.io Writing Room, you'll have:</p>
      <ol style="list-style-type: disc; padding-left: 20px;">
        <li>Full versioning of your content</li>
        <li>A nice rich editor to create and edit your content</li>
        <li>Collaboration with other users you choose to add to your repository</li>
        <li>Performance and scalability for your content using a Content Delivery Network around the world</li>
      </ol>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Tutorial'
};
</script>

<style scoped>
@import "../assets/css/tutorial.min.css";
</style>
