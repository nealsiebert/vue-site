import fs from 'node:fs';
import moment from 'moment';
import posts, {
  Post,
} from './assets/postMetadata';

const rssDateFormat = "ddd, DD MMM YYYY HH:mm:ss [GMT]";
function rssDate(date: Date): string {
  return moment.utc(date).format(rssDateFormat)
}

function rssItem(post: Post): string {
return `
      <item>
        <title>${post.title}</title>
        <link>https://www.nealsiebert.com/blog/${encodeURIComponent(post.title)}</link>
        <description>${post.summary}.</description>
        <pubDate>${rssDate(post.date)}</pubDate>
        <guid>https://www.nealsiebert.com/blog/${encodeURIComponent(post.title)}</guid>
      </item>
`
}

function createRss(): string {
  const validPosts = posts().filter((post) => !post.hidden);
  const pubDate = rssDate(new Date(Date.now()))
  return `
  <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
    <channel>
      <title>Neal's Blog</title>
      <link>http://www.nealsiebert.com/</link>
      <description>A RSS feed for Neal Siebert's blog.</description>
      <language>en-us</language>
      <pubDate>${pubDate}</pubDate>
      <lastBuildDate>${pubDate}</lastBuildDate>
      <docs>https://www.rssboard.org/rss-specification</docs>
      ${validPosts.map(rssItem).join('')}
    </channel>
  </rss>
`;
}

fs.writeFileSync('./dist/feed.xml', createRss());