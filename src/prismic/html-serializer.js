import prismicDOM from 'prismic-dom';
import linkResolver from '@/prismic/link-resolver';

export default function (type, element, content, children) {
  if (type === prismicDOM.RichText.Elements.hyperlink) {
    const url = prismicDOM.Link.url(element.data, linkResolver);
    const target = element.data.target ? `target="'${element.data.target}'" rel="noopener"` : '';

    if (element.data.link_type === 'Document') {
      return `<router-link to="${url}">${content}</router-link>`;
    }
    return `<a href="${url}" ${target}>${content}</a>`;
  }
  return null;
};
