module.exports = {
  // where it all starts -- the site's root Notion page (required)
  //rootNotionPageId: '872d07bf660b4e28b403b8a9d5bd179e', // espace pobox
  //rootNotionPageId: 'ec4e155f14cf4e1ebf236af700c6bfe7', // newsletters TDV
  //rootNotionPageId: 'Collections-3956c20e5b944d1facb1a50f769ea63d', // Collections
  rootNotionPageId: 'Les-ressources-Notion-de-perceptible-fr-a30895c271a0465395c5cc4f3a0d0fb4',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Un site de test Notion Nextjs',
  domain: 'perceptible.fr',
  author: 'Alain Roan',

  // open graph metadata (optional)
  description: "Site de test de l'automatisation Notion",
  socialImageTitle: 'Perceptible.fr',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  
  twitter: 'AlainRoan',
  github: 'AlainRo',
  linkedin: 'AlainRoan',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
