// Site configuration
export const siteConfig = {
  // Site details from config.json:site
  title: "Unburdened You", // from config.json:site.title
  description: "Blogs and articles about personal development, mental health, and lifestyle.", // from config.json:site.description
  Url: "https://blog.unburdenedyou.org", // from config.json
  

  // from config.json:site (logo related)
  logo: "../../assets/images/6.webp",
  logoWidth: "200",
  logoHeight: "30",
  logoText: "Unburdened You",

  // SEO metadata from config.json:metadata
  author: "Jiu", // from config.json:metadata.meta_author
  description: "Blogs and articles about personal development, mental health, and lifestyle.", // from config.json:metadata.meta_description
  ogImage: "../../assets/images/6.webp", // from config.json:metadata.meta_image (replaces defaultImage)

  // Pagination settings from config.json:settings
  postsPerPage: 20, // from config.json:settings.pagination
  summaryLength: 100, // from config.json:settings.summary_length
  
  // SEO settings (existing in site.ts)
  noindex: {
    tags: true, // Set to true to add noindex meta tag to tag pages
    categories: false, // Set to true to add noindex meta tag to category pages
    authors: false, // Set to true to add noindex meta tag to author pages
  },
  
  // Params from config.json:params
  copyright: "Copyright © 2025", // from config.json:params.copyright
};
