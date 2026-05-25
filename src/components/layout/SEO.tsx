import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  name?: string
  type?: string
}

export function SEO({
  title,
  description = 'Operational systems for service businesses. Replace spreadsheets, phone calls, and disconnected tools with workflow-fit systems.',
  name = 'SVYNE',
  type = 'website'
}: SEOProps) {
  const fullTitle = title ? `${title} — ${name}` : `${name} · ${description}`

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://svyne.studio/og-image.png" />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content="@svynestudio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://svyne.studio/og-image.png" />
      {/* End Twitter tags */}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "SVYNE",
          "image": "https://svyne.studio/og-image.png",
          "@id": "https://svyne.studio",
          "url": "https://svyne.studio",
          "telephone": "",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Mobile",
            "addressRegion": "AL",
            "postalCode": "",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 30.6954,
            "longitude": -88.0399
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
          },
          "sameAs": [
            "https://twitter.com/svynestudio",
            "https://linkedin.com/in/siddhpatel"
          ]
        })}
      </script>
    </Helmet>
  )
}
