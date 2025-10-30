import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = 'Chestiuni Photography — Capturing Life\'s Moments',
  description = 'Explore the visual stories of Chestiuni, a professional photographer capturing emotion, light, and life through the lens.',
  image = 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&q=80',
  url = 'https://chestiuni.com',
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;

      let meta = document.querySelector(`meta[${attribute}="${value}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, value!);
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    });

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Chestiuni',
      jobTitle: 'Professional Photographer',
      url: url,
      image: image,
      description: description,
      sameAs: [
        'https://instagram.com',
        'https://facebook.com',
      ],
    };

    let script = document.querySelector('script[type="application/ld+json"]');

    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(structuredData);
  }, [title, description, image, url]);

  return null;
}
