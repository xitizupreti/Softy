export default async function Page({ params }: { params: { page: string } }) {
  const { page } = await params;

  const pageContent: { [key: string]: { title: string; description: string } } =
    {
      categories: {
        title: "Categories",
        description: "Browse through our various product categories.",
      },
      products: {
        title: "Products",
        description: "Discover our wide range of products.",
      },
      "dealer-locator": {
        title: "Dealer Locator",
        description: "Find a dealer near you.",
      },
      about: {
        title: "About Us",
        description: "Learn more about our company and mission.",
      },
      "contact-us": {
        title: "Contact Us",
        description: "Get in touch with us for any inquiries.",
      },
    };

  const content = pageContent[page];

  return (
    <div className="container pt-25 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
      <p>{content.description}</p>
    </div>
  );
}
