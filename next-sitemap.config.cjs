/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.rega.lviv.ua',
  output: 'export',
  trailingSlash: true,
  generateRobotsTxt: true,
  exclude: ['/en/uikit/', '/uk/uikit/', '/404/'],
}
