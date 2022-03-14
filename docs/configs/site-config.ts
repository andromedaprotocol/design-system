const baseUrl = "https://github.com/andromedaprotocol/design-system";

const siteConfig = {
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/docs`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  seo: {
    title: "React Tailwind CSS Components.",
    titleTemplate: "%s - Andromeda Design System",
    description:
      "Collection of Accessible React UI Components using TailwindCSS.",
    siteUrl: "https://andromedaprotocol.github.io/design-system",
    twitter: {
      handle: "@andromeda-protocol/design-system",
      site: "@andromeda-protocol/design-system",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://andromedaprotocol.github.io/design-system",
      title: "Andromeda Design System - Tailwind CSS Components",
      description:
        "Collection of Accessible React UI Components using TailwindCSS.",
      site_name:
        "Andromeda Design System: Collection of Accessible React UI Components using TailwindCSS.",
      images: [
        {
          url: "https://andromedaprotocol.github.io/design-system/og-image.png",
          width: 1200,
          height: 627,
          alt:
            "Andromeda Design System: Collection of Accessible React UI Components using TailwindCSS.",
        },
        {
          url:
            "https://andromedaprotocol.github.io/design-system/twitter-og-image.png",
          width: 1012,
          height: 506,
          alt:
            "Andromeda Design System: Collection of Accessible React UI Components using TailwindCSS.",
        },
      ],
    },
  },
};

export default siteConfig;
