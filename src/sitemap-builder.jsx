// import Sitemap from 'react-router-sitemap';
// const routes = require('./routes')


// const sitemap = (
//   new Sitemap(routes)
//     .build('http://my-site.ru')
//     .save("./sitemap.xml")
// );

import { sitemapBuilder as buildSitemap } from 'react-router-sitemap';

const paths = ['/', 'home', '/contacts'];
const hostname = 'http://mercadolibre-test.com.uy';
const sitemap = buildSitemap(hostname, paths);