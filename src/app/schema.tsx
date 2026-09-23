export function PersonSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dinesh Kumar Katal",
    jobTitle: "Product & Growth Manager",
    description:
      "IIT Kharagpur grad combining technical depth with product analytics: I launch platforms, optimize conversion funnels, and build ML engines.",
    email: "mailto:dineshkatal.work@gmail.com",
    url: "https://portfolio-omega-seven-69.vercel.app",
    image: "https://portfolio-omega-seven-69.vercel.app/assets/dinesh_profile.webp",
    worksFor: {
      "@type": "Organization",
      name: "Songdew Media Private Limited",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Technology, Kharagpur",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/Dinesh-codeswell",
      "https://www.linkedin.com/in/dineshkatal/",
      "https://topmate.io/dinesh_katal",
      "https://medium.com/@dineshkatal",
    ],
    knowsAbout: [
      "Product Management",
      "Product Analytics",
      "Data Analytics",
      "Growth Marketing",
      "Machine Learning",
      "Python",
      "SQL",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
