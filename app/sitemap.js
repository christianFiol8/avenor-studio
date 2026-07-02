const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://avenor-studio.vercel.app";

export default function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}