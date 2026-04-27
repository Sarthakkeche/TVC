// src/components/SEO.jsx
// Drop-in SEO component using react-helmet-async
// Usage: <SEO title="Page Title" description="..." path="/about" />

import { Helmet } from 'react-helmet-async';

const SITE = {
  name: 'Tri-Valley Clinic',
  url: 'https://trivalleyclinic.com',
  phone: '(510) 598-4921',
  address: 'Fremont, CA',
  image: 'https://trivalleyclinic.com/assets/tri-valley-logo-header.png',
};

export default function SEO({ title, description, path = '/', type = 'website' }) {
  const url = `${SITE.url}${path}`;
  const fullTitle = path === '/' ? title : `${title} | ${SITE.name}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={SITE.image} />
      <meta property="og:site_name" content={SITE.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SITE.image} />

      {/* Geo */}
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="Fremont" />
    </Helmet>
  );
}
