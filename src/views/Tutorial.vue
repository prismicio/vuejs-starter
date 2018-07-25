<template>
  <div id="prismic-tutorial">

    <header>
      <nav>
        <a href="#bootstrap"><strong>Configure a repository</strong></a>
        <a href="https://prismic.io/docs/vuejs" target="_blank" rel="noopener" class="doc">Documentation<img src="../assets/img/tutorial/open.svg" alt="Open"></a>
      </nav>
      <div class="wrapper">
        <img src="../assets/img/tutorial/rocket.svg" alt="Rocket">
        <h1>High five, you deserve it!</h1>
        <p>Grab a well deserved cup of coffee, you’re just a few steps away from creating a Vue.js component with content managed in Prismic.</p>
      </div>
      <div class="hero-curve"></div>
      <div class="flip-flap">
        <div class="flipper">
          <div class="guide">
            <ul>
              <li><a href="#bootstrap"><span>1</span>Bootstrap your project<img src="../assets/img/tutorial/chevron.svg" alt="Chevron down"></a></li>
              <li><a href="#custom-type"><span>2</span>Create a Custom Type "Page"<img src="../assets/img/tutorial/chevron.svg" alt="Chevron down"></a></li>
              <li><a href="#new-document"><span>3</span>Publish your first "Page" document<img src="../assets/img/tutorial/chevron.svg" alt="Chevron down"></a></li>
              <li><a href="#code"><span>4</span>Query the API in your Vue component<img src="../assets/img/tutorial/chevron.svg" alt="Chevron down"></a></li>
              <li><a href="#done"><span>5</span>Well done!<img src="../assets/img/tutorial/chevron.svg" alt="Chevron down"></a></li>
            </ul>
          </div>
          <div class="gif"></div>
        </div>
      </div>
    </header>

    <section>

      <p>This is a tutorial page included in this Vue.js starter project, it has a few useful links and example code snippets to help you get started.</p>
      <p>You can access this very tutorial page at <a href="http://localhost:8080/tutorial">http://localhost:8080/tutorial</a>.</p>

      <h2>Follow these 5 simple steps</h2>

      <h3 id="bootstrap"><span>1</span>Bootstrap your project</h3>
      <h4>Create a Prismic content repository</h4>
      <p>A repository is where your website’s content will live. Simply <a href="https://prismic.io/#create" target="_blank" rel="noopener">create one</a> choosing a repository name and a plan. We’ve got a variety of plans including our favorite: Free!</p>
      <h4>Configure your project</h4>
      <p>Open the index.html file and define the API endpoint of your Prismic repository:</p>
<pre v-highlightjs class="source-code"><code class="xml">&lt;!-- In public/index.html --&gt;

&lt;script&gt;
  window.prismic = {
    endpoint: 'https://your-repo-name.prismic.io/api/v2'
  }
&lt;/script&gt;
</code></pre>
      <p>Next let’s see how to create a Vue component filled with content retrieved from Prismic.</p>

      <h3 id="custom-type"><span>2</span>Create a Custom Type "Page"</h3>
      <p>We’ll create a document containing a title, a description, a call to action and an icon. Let’s create a Custom Type in Prismic with the corresponding fields. We’ll add an additional UID field (unique identifier) for querying the document.</p>
      <p>Go to the Web interface of the Prismic repository you’ve just created (at https://your-repo-name.prismic.io). Then navigate to the <em>"Custom Types"</em> section (icon on the left navbar) and create a new Repeatable Type, for this tutorial let’s name it "Page", so that its API ID will be set to <strong>"page"</strong>.</p>
      <p>Once the "Page" Custom Type is created, we have to define how we want to model it, that is to say a document containing a UID field, a rich text field for the title, a rich text field for the description, a link field + a rich text field for the call to action and an image field for the icon. Click on <em>"JSON editor"</em> (right sidebar) and paste in the following JSON data.</p>
      <p>When you’re done, hit <em>"Save"</em>.</p>
<pre v-highlightjs class="source-code"><code class="json">{
  "Main": {
    "uid": {
      "type": "UID",
      "config": {
        "placeholder": "UID...",
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
        "multi": "paragraph, heading2, strong, em, hyperlink",
        "allowTargetBlank": true,
        "label": "Description",
        "placeholder": "Description..."
      }
    },
    "cta_link": {
      "type": "Link",
      "config": {
        "allowTargetBlank": true,
        "label": "CTA link",
        "placeholder": "CTA link..."
      }
    },
    "cta_text": {
      "type": "StructuredText",
      "config": {
        "single": "paragraph",
        "label": "CTA text",
        "placeholder": "CTA text..."
      }
    },
    "icon": {
      "type": "Image"
    }
  }
}
</code></pre>

      <h3 id="new-document"><span>3</span>Publish your first "Page" document</h3>
      <p>Now it is time to fill in and publish your first "Page" document in your Prismic repository.</p>
      <p>
        Create a new "Page" document in your repository: go to <em>"Content"</em> and hit <em>"New"</em>.
        Fill the corresponding fields. Note the value you filled in the UID field, because it will be a part of the component route path, for this tutorial let’s put <strong>"quickstart"</strong>.
      </p>
      <p>When you’re done, hit <em>"Save"</em> then <em>"Publish"</em>.</p>

      <h3 id="code"><span>4</span>Query the API in your Vue component</h3>

      <h4>Create a component that retrieves your content</h4>
      <p>Let’s create a Vue component that will display content fetched from the Prismic API.</p>
      <p>Go back to your local code and create a new Vue component file named "Page.vue" inside the views folder (src/views/Page.vue).  We’ll make an API call to retrieve the document content, querying it by specifying its UID.</p>
      <p>Here’s an example that’ll render a "Page" document with its title, description, call to action and icon:</p>
<pre v-highlightjs class="source-code"><code class="xml">&lt;!-- Create file src/views/Page.vue --&gt;

&lt;template&gt;
  &lt;div class="wrapper"&gt;
    &lt;prismic-edit-button :documentId="documentId"/&gt;
    &lt;h1 class="title"&gt;
      {{ "\{\{ $prismic.richTextAsPlain(fields.title) \}\}" }}
    &lt;/h1&gt;
    &lt;prismic-rich-text :field="fields.description" class="description"/&gt;
    &lt;div class="cta-wrapper"&gt;
      &lt;prismic-link :field="fields.ctaLink" class="cta"&gt;
        {{ "\{\{ $prismic.richTextAsPlain(fields.ctaText) \}\}" }}
      &lt;/prismic-link&gt;
    &lt;/div&gt;
    &lt;div class="icon-wrapper"&gt;
      &lt;prismic-image :field="fields.icon" class="icon"/&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'Page',
  data () {
    return {
      documentId: '',
      fields: {
        title: null,
        description: null,
        ctaLink: null,
        ctaText: null,
        icon: null
      }
    }
  },
  methods: {
    getContent (uid) {
      this.$prismic.client.getByUID('page', uid)
        .then((document) =&gt; {
          if (document) {
            this.documentId = document.id
            this.fields.title = document.data.title
            this.fields.description = document.data.description
            this.fields.ctaLink = document.data.cta_link
            this.fields.ctaText = document.data.cta_text
            this.fields.icon = document.data.icon
          } else {
            this.$router.push({ name: 'not-found' })
          }
        })
    }
  },
  created () {
    this.getContent(this.$route.params.uid)
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid)
    next()
  }
}
&lt;/script&gt;

&lt;style&gt;
.wrapper {
  max-width: 820px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 10px;
  font-family: Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.title {
  font-size: 32px;
}

.description {
  margin-top: 40px;
}

.description h2 {
  font-size: 24px;
}

.description h2:not(:first-child) {
  margin-top: 20px;
}

.description p {
  line-height: 1.5;
}

.description p:not(:first-child) {
  margin-top: 10px;
}

.description a {
  color: #404e9f;
}

.description a:hover {
  text-decoration: underline;
}

.cta-wrapper {
  margin-top: 40px;
}

.cta {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  background-color: #404e9f;
  color: white;
}

.icon-wrapper {
  margin-top: 40px;
}

.icon {
  max-width: 100%;
}
&lt;/style&gt;
</code></pre>

      <h4>Specify a route for the Page component</h4>
      <p>Now that you’ve created your Page component, add the following route to the Vue Router, in src/router.js file:</p>
<pre v-highlightjs class="source-code"><code class="javascript">// In src/router.js

// ...

import Page from './views/Page.vue'

// ...

{
  path: '/page/:uid',
  name: 'page',
  component: Page
},

// ...
</code></pre>

      <p>In your browser go to <a href="http://localhost:8080/page/quickstart" target="_blank" rel="noopener">http://localhost:8080/page/quickstart</a> <em> and voilà!</em> You’ve officially created a Vue component that pulls content from Prismic.</p>

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
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'

Vue.use(VueHighlightJS)

export default {
  name: 'Tutorial'
}
</script>

<style>
@import "../assets/css/tutorial/highlight.min.css";
@import "../assets/css/tutorial/tutorial.min.css";
</style>
