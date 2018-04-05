<template>
  <div id="prismic-tutorial">

    <header>
      <nav>
        <a href="#bootstrap"><strong>Configure a repository</strong></a>
        <a href="https://prismic.io/docs/javascript/getting-started/integrating-with-an-existing-javascript-project" target="_blank" class="doc">Documentation<img src="@/assets/img/tutorial/open.svg" alt="Open"></a>
      </nav>
      <div class="wrapper">
        <img src="@/assets/img/tutorial/rocket.svg" alt="Rocket">
        <h1>High five, you deserve it!</h1>
        <p>Grab a well deserved cup of coffee, you’re just a few steps away from creating a page with dynamic content.</p>
      </div>
      <div class="hero-curve"></div>
      <div class="flip-flap">
        <div class="flipper">
          <div class="guide">
            <ul>
              <li><a href="#bootstrap"><span>1</span>Bootstrap your project<img src="@/assets/img/tutorial/arrow.svg" alt="Arrow"></a></li>
              <li><a href="#custom-type"><span>2</span>Create a Custom Type "Page"<img src="@/assets/img/tutorial/arrow.svg" alt="Arrow"></a></li>
              <li><a href="#new-page"><span>3</span>Publish your first "Page" document<img src="@/assets/img/tutorial/arrow.svg" alt="Arrow"></a></li>
              <li><a href="#code"><span>4</span>Query the API inside a Vue component<img src="@/assets/img/tutorial/arrow.svg" alt="Arrow"></a></li>
              <li><a href="#done"><span>5</span>Well done!<img src="@/assets/img/tutorial/arrow.svg" alt="Arrow"></a></li>
            </ul>
          </div>
          <div class="gif"></div>
        </div>
      </div>
    </header>

    <section>

      <p>
        This is a tutorial page included in this Vue.js starter project, it has a few useful links and example snippets to help you get started.<br>
        You can access this page at <a href="http://localhost:8080/tutorial">http://localhost:8080/tutorial</a>.
      </p>
      <h2>Follow these steps:</h2>

      <h3 id="bootstrap"><span>1</span>Bootstrap your project</h3>
      <h4>Create a Prismic content repository</h4>
      <p>A repository is where your website’s content will live. Simply <a href="https://prismic.io/#create" target="_blank">create one</a> choosing a repository name and a plan. We’ve got a variety of plans including our favorite: Free!</p>
      <h4>Configure your project</h4>
      <p>Open the index.html file and define the API endpoint of your Prismic repository:</p>
<pre v-highlightjs class="source-code"><code class="html">// In index.html

&lt;script&gt;
  window.prismic = {
    endpoint: 'https://your-repo-name.prismic.io/api/v2'
  };
&lt;/script&gt;
</code></pre>
      <p>Next let’s see how to create a Vue component filled with content retrieved from Prismic!</p>

      <h3 id="custom-type"><span>2</span>Create a Custom Type "Page"</h3>
      <p>We will create a page containing a title, a paragraph and an image. Let’s create a Custom Type in Prismic with the corresponding fields. We’ll add an additional UID (unique identifier) field for querying the page.</p>
      <p>Go to the repository backend you’ve just created (at https://your-repo-name.prismic.io). Then navigate to the <em>"Custom Types"</em> section (icon on the left navbar) and create a new Repeatable Type, for this tutorial let’s name it "Page". Make sure that the system automatically assigns this an API ID of "page".</p>
      <p>Once the "Page" Custom Type is created, we have to define how we want to model it, that is to say a document containing a UID, a title, a paragraph and an image. Click on <em>"JSON editor"</em> (right sidebar) and paste the following JSON data into the Custom Type JSON editor. When you’re done, hit <em>"Save"</em>.</p>
<pre v-highlightjs class="source-code"><code class="json">{
  "Main": {
    "uid": {
      "type": "UID",
      "config": {
        "placeholder": "UID",
        "label": "UID"
      }
    },
    "title": {
      "type": "StructuredText",
      "config": {
        "single": "heading1",
        "label": "Title",
        "placeholder": "Title..."
      }
    },
    "description": {
      "type": "StructuredText",
      "config": {
        "multi": "paragraph, strong, em, hyperlink",
        "label": "Description",
        "placeholder": "Description..."
      }
    },
    "image": {
      "type": "Image"
    }
  }
}
</code></pre>

      <h3 id="new-page"><span>3</span>Publish your first "Page" document</h3>
      <p>The "Page" Custom Type you’ve just created contains a UID, a title, a paragraph, and an image. Now it is time to fill in your first "Page" document!</p>
      <p>Create a new "Page" content in your repository: go to <em>"Content"</em> and hit <em>"New"</em>.</p>
      <p>Fill the corresponding fields. Note the value you filled in the UID field, because it will be a part of the page URL, for that purpose let’s type "quickstart".</p>
      <p>When you’re done, hit <em>"Save"</em> then <em>"Publish"</em>.</p>

      <h3 id="code"><span>4</span>Query the API inside a Vue component</h3>
      <h4>Query the API for your "quickstart" page</h4>
      <p>Now that you’ve created your "quickstart" page in your Prismic repository, go back to your local code. Let’s make an API call to retrieve document content. For that, we will use the specified UID.</p>
      <p>
        Once we’ve retrieved the content, we fill the component with it.
        <br>
        Add the following route to the src/router/index.js file:
      </p>
<pre v-highlightjs class="source-code"><code class="javascript">// In src/router/index.js

import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/components/NotFound';
import Preview from '@/components/Preview';
import Tutorial from '@/components/Tutorial';
import Page from '@/components/Page';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: Tutorial
    },
    {
      path: '/',
      redirect: { name: 'tutorial' }
    },
    {
      path: '/page/:uid',
      name: 'page',
      component: Page
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
});
</code></pre>
      <h4>Create component with the retrieving content</h4>
      <p>Now all that’s left to be done is to output on a component the content we fetched from the API. Create a new Vue component file named "Page.vue" inside the components folder. Here’s an example that’ll display a "page" documebt with its title, description and image:</p>
<pre v-highlightjs class="source-code"><code class="javascript">
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
      <p>In your browser go to <a href="http://localhost:8080/page/quickstart">http://localhost:8080/page/quickstart</a> and you’re done! You’ve officially created a Vue component that pulls content from Prismic.</p>

      <h3 id="done"><span>5</span>Well done!</h3>
      <p>Sit back and enjoy the result.</p>
      <p>Basically in these few steps you’ve added content management to your Vue.js project and thanks to Prismic, you’ll have:</p>
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
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS);

export default {
  name: 'Tutorial'
};
</script>

<style>
@import "../assets/css/tutorial/highlight.min.css";
@import "../assets/css/tutorial/tutorial.min.css";
</style>
