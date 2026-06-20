import { defineField, defineType } from "sanity";

export const authorSchema = defineType({
  name: "author",
  title: "Authors",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "role", title: "Role / Title", type: "string" }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 4 }),
    defineField({ name: "avatar", title: "Avatar Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "credentials", title: "Credentials", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "linkedIn", title: "LinkedIn URL", type: "url" }),
  ],
  preview: { select: { title: "name", subtitle: "role", media: "avatar" } },
});

export const brandSchema = defineType({
  name: "brand",
  title: "Brands",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Brand Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "country", title: "Country of Origin", type: "string" }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "summary", title: "Brand Summary", type: "text", rows: 3 }),
    defineField({ name: "founded", title: "Founded Year", type: "number" }),
    defineField({ name: "figureCode", title: "Figure Code (e.g. BRD-001)", type: "string" }),
    defineField({ name: "rating", title: "Brand Rating (1-10)", type: "number" }),
    defineField({ name: "reviewCount", title: "Products Reviewed", type: "number" }),
    defineField({ name: "categories", title: "Product Categories", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "verdict", title: "Editorial Verdict", type: "text", rows: 4 }),
    defineField({
      name: "stats", title: "Stats Grid", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "label", title: "Label", type: "string" }),
        defineField({ name: "value", title: "Value", type: "string" }),
      ]}],
    }),
    defineField({ name: "greenFlags", title: "Green Flags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "redFlags", title: "Red Flags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "certifications", title: "Certifications", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "faqItems", title: "FAQ Items", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "question", title: "Question", type: "string" }),
        defineField({ name: "answer", title: "Answer", type: "text", rows: 3 }),
      ]}],
    }),
    defineField({ name: "relatedReviews", title: "Reviewed Products", type: "array",
      of: [{ type: "reference", to: [{ type: "review" }] }],
    }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 2 }),
    defineField({ name: "body", title: "Full Brand Page Content", type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({ name: "publishedAt", title: "Published Date", type: "date" }),
    defineField({ name: "updatedAt", title: "Last Updated", type: "date" }),
  ],
  preview: { select: { title: "name", subtitle: "country", media: "logo" } },
});

export const bestListSchema = defineType({
  name: "bestList",
  title: "Best Lists",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title (e.g. Best Whey Protein in USA)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug (e.g. whey-protein)", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "summary", title: "Intro Summary", type: "text", rows: 3 }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 2 }),
    defineField({
      name: "products", title: "Ranked Products", type: "array",
      of: [{
        type: "object", fields: [
          { name: "rank", title: "Rank", type: "number" },
          { name: "review", title: "Review", type: "reference", to: [{ type: "review" }] },
          { name: "whyChosen", title: "Why Chosen", type: "text", rows: 2 },
        ]
      }]
    }),
    defineField({ name: "body", title: "Full Content", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "publishedAt", title: "Published Date", type: "date" }),
    defineField({ name: "updatedAt", title: "Last Updated", type: "date" }),
  ],
  preview: { select: { title: "title", subtitle: "category" } },
});

export const researchSchema = defineType({
  name: "research",
  title: "Research Articles",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "titleItalic", title: "Italic portion of title (for h1)", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 2 }),
    defineField({ name: "figureCode", title: "Figure Code (e.g. ART-007)", type: "string" }),
    defineField({ name: "evidenceLevel", title: "Evidence Level", type: "string",
      options: { list: ["strong", "moderate", "limited", "emerging", "insufficient"] },
    }),
    defineField({ name: "readTime", title: "Read Time (e.g. 13 min)", type: "string" }),
    defineField({ name: "quickAnswer", title: "Quick Answer (callout box)", type: "text", rows: 4 }),
    defineField({
      name: "statsPanel", title: "Stats Panel (4 items)", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "label", title: "Label", type: "string" }),
        defineField({ name: "value", title: "Value", type: "string" }),
        defineField({ name: "sub", title: "Sub-label", type: "string" }),
      ]}],
    }),
    defineField({
      name: "mechanismPanels", title: "Mechanism Panels (numbered)", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "num", title: "Number (01, 02...)", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
      ]}],
    }),
    defineField({
      name: "faqItems", title: "FAQ Items", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "question", title: "Question", type: "string" }),
        defineField({ name: "answer", title: "Answer", type: "text", rows: 3 }),
      ]}],
    }),
    defineField({
      name: "references", title: "References", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "text", title: "Citation Text", type: "string" }),
        defineField({ name: "url", title: "URL (PubMed/DOI)", type: "url" }),
      ]}],
    }),
    defineField({
      name: "relatedArticles", title: "Related Articles", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "href", title: "URL Path", type: "string" }),
        defineField({ name: "label", title: "Label", type: "string" }),
      ]}],
    }),
    defineField({ name: "body", title: "Full Content (Portable Text)", type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({ name: "author", title: "Author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "relatedIngredients", title: "Related Ingredients", type: "array",
      of: [{ type: "reference", to: [{ type: "ingredient" }] }],
    }),
    defineField({ name: "publishedAt", title: "Published Date", type: "date" }),
    defineField({ name: "updatedAt", title: "Last Updated", type: "date" }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
  ],
  preview: { select: { title: "title" } },
});

export const comparisonSchema = defineType({
  name: "comparison",
  title: "Comparisons",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title (e.g. ON Whey vs MuscleBlaze)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug (e.g. on-whey-vs-muscleblaze)", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 2 }),
    defineField({ name: "productA", title: "Product A", type: "reference", to: [{ type: "review" }] }),
    defineField({ name: "productB", title: "Product B", type: "reference", to: [{ type: "review" }] }),
    defineField({ name: "winner", title: "Winner (optional)", type: "reference", to: [{ type: "review" }] }),
    defineField({ name: "verdict", title: "Comparison Verdict", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Full Comparison Content", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "publishedAt", title: "Published Date", type: "date" }),
  ],
  preview: { select: { title: "title" } },
});
