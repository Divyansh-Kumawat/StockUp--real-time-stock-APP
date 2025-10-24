/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_API_URL || 'https://production.d6r1hwp4orqoq.amplifyapp.com',
  generateRobotsTxt: true,
}