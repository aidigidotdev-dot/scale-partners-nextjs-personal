import type { MetadataRoute } from 'next';

const siteUrl = 'https://scalepartners.ae';

const routes = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/business-setup-dubai', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/setup-mainland', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/setup-freezone', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/setup-offshore', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/visa-golden', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/visa-residence', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/visa-pro', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/finance-tax', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/finance-accounting', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/finance-banking', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/fz-meydan', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/fz-ifza', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/fz-dmcc', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/fz-shams', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/fz-rakez', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/fz-dwtc', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/lic-ecommerce', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/lic-trading', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/lic-commercial', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/lic-media', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/lic-industrial', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/lic-holding', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/calculator', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about-us', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-and-conditions', changeFrequency: 'yearly', priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority,
  }));
}
