
export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://avenor-studio-2u5w.vercel.app";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}