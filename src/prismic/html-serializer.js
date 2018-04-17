import prismicDOM from 'prismic-dom';
import linkResolver from '@/prismic/link-resolver';

export default function (type, element, content, children) {
  if (type === prismicDOM.RichText.Elements.hyperlink) {
    let result = '';
    const url = prismicDOM.Link.url(element.data, linkResolver);

    if (element.data.link_type === 'Document') {
      result = `<router-link to="${url}">${content}</router-link>`;
    } else {
      const target = element.data.target ? `target="'${element.data.target}'" rel="noopener"` : '';

      result = `<a href="${url}" ${target}>${content}</a>`;
    }
    return result;
  }
  return null;
};
