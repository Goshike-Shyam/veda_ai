export const routes = [
  { path: '/products', status: 'live' },
  { path: '/about', status: 'live' },
  { path: '/vision', status: 'live' },
  { path: '/faq', status: 'live' },
  { path: '/blog', status: 'live' },
  { path: '/contact', status: 'live' },
  { path: '/partner', status: 'live' },
  { path: '/products/student-assistant', status: 'live' },
  { path: '/products/juriq', status: 'soon' },
  { path: '/privacy', status: 'live' },
  { path: '/terms', status: 'live' },
] as const;

export const siteConfig = {
  name: 'Veda AI Technologies',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  studentAssistantUrl: process.env.NEXT_PUBLIC_STUDENT_ASSISTANT_URL || 'https://example.com/student-assistant',
  studentAssistantApiUrl: process.env.STUDENT_ASSISTANT_API_URL || '',
  description: 'Practical AI products that make knowledge accessible.',
  nav: [
    { href: '/products', key: 'products' },
    { href: '/about', key: 'about' },
    { href: '/vision', key: 'vision' },
    { href: '/faq', key: 'faq' },
    { href: '/blog', key: 'blog' },
    { href: '/contact', key: 'contact' },
  ],
  routes,
  products: {
    studentAssistant: {
      slug: 'student-assistant',
      status: 'live',
      href: '/products/student-assistant',
    },
    juriq: {
      slug: 'juriq',
      status: 'coming-soon',
      href: '/products/juriq',
    },
  },
  contact: {
    email: process.env.CONTACT_TO_EMAIL || 'hello@vedaai.tech',
    phone: '',
    address: '',
    legalName: '',
    udyam: '',
    gst: '',
  },
  social: {
    linkedin: '',
  },
};

export type SiteConfig = typeof siteConfig;
