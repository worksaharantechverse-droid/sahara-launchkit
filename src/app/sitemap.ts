export const sitemap = {
  entries: [
    { url: 'https://launchkit.dev', lastModified: new Date() },
    { url: 'https://launchkit.dev/login', lastModified: new Date() },
    { url: 'https://launchkit.dev/signup', lastModified: new Date() },
    { url: 'https://launchkit.dev/pricing', lastModified: new Date() },
  ],
}

export const robots = {
  rules: [
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard', '/settings', '/api/'],
    },
  ],
  sitemap: 'https://launchkit.dev/sitemap.xml',
}
