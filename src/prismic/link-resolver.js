/**
 *
 * Link Resolving
 *
 * When working with fields, such as Link or Rich Text, that could
 * return a link to a specific route of your website, you have to provide
 * a Link Resolver function as argument to the appropriate method.
 *
 * For example in a Vue component you can do like so:
 * this.$PrismicDOM.RichText.asHtml(yourRichTextField, this.$linkResolver)
 * this.$PrismicDOM.Link.url(yourLinkField, this.$linkResolver)
 *
 * It is mandatory to pass the Link Resolver function as argument only if your field
 * is expecting to return a link to a specific route of your website, but we recommend
 * to always pass it, because you may change your field restrictions in the future.
 *
 * Learn more about Link Resolving in the Prismic's documentation:
 * https://prismic.io/docs/javascript/query-the-api/link-resolving
 *
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found';
  }

  if (doc.type === 'page') {
    return '/page/' + doc.uid;
  }

  return '/not-found';
};
