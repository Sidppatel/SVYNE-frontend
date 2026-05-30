import { Helmet } from 'react-helmet-async'

interface MetadataProps {
  title?: string
  description?: string
  name?: string
  type?: string
  schema?: Record<string, unknown> | Array<Record<string, unknown>>
}

export function Metadata({
  title,
  description = 'Operational systems for service businesses. Replace spreadsheets, phone calls, and disconnected tools with workflow-fit systems.',
  name = 'svyne.',
  type = 'website',
  schema
}: MetadataProps) {
  const fullTitle = title ? `${title} — ${name}` : `${name} · ${description}`
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : []

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://svyne.studio/og-image.png" />

      <meta name="twitter:creator" content="@svynestudio" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://svyne.studio/og-image.png" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "svyne.",
          "logo": "https://svyne.studio/favicon.svg",
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
      {schemas.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  )
}
