import { defineField, defineType } from "sanity";

export const blogSchema = defineType({
  name: "blog",
  title: "Blog Articles",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "titleItalic", title: "Italic word in title (for h1 styling)", type: "string" }),
    defineField({ name: "category", title: "Category", type: "string",
      options: { list: ["Longevity", "Nutrition", "Performance", "Supplements", "Training", "Mental Health", "Pharmacology"] },
    }),
    defineField({ name: "figureCode", title: "Figure Code (e.g. BLG-001)", type: "string" }),
    defineField({ name: "readTime", title: "Read Time (e.g. 9 min)", type: "string" }),
    defineField({ name: "evidenceLevel", title: "Evidence Level", type: "string",
      options: { list: ["strong", "moderate", "limited", "emerging", "guide"] },
    }),
    defineField({ name: "summary", title: "Summary / Deck (below headline)", type: "text", rows: 3 }),
    defineField({ name: "metaDescription", title: "Meta Description (140-160 chars)", type: "text", rows: 2 }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),

    // Stat callouts (3 items in hero)
    defineField({
      name: "statCallouts", title: "Stat Callouts (3 items)", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "value", title: "Value", type: "string" }),
        defineField({ name: "label", title: "Label", type: "string" }),
      ]}],
    }),

    // Author & reviewer
    defineField({ name: "author", title: "Author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "reviewer", title: "Reviewed By", type: "reference", to: [{ type: "author" }] }),

    // TOC items
    defineField({
      name: "tocItems", title: "Table of Contents Items", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "id", title: "Section ID", type: "string" }),
        defineField({ name: "label", title: "Label", type: "string" }),
      ]}],
    }),

    // Mechanism panels
    defineField({
      name: "mechanismPanels", title: "Mechanism Panels (numbered)", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "num", title: "Number (01, 02...)", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
      ]}],
    }),

    // FAQ
    defineField({
      name: "faqItems", title: "FAQ Items", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "question", title: "Question", type: "string" }),
        defineField({ name: "answer", title: "Answer", type: "text", rows: 3 }),
      ]}],
    }),

    // References
    defineField({
      name: "references", title: "References", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "text", title: "Citation Text", type: "string" }),
        defineField({ name: "url", title: "URL (PubMed/DOI)", type: "url" }),
      ]}],
    }),

    // Related
    defineField({
      name: "relatedArticles", title: "Related Articles", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "href", title: "URL Path", type: "string" }),
        defineField({ name: "label", title: "Label", type: "string" }),
      ]}],
    }),

    // Portable Text body
    defineField({ name: "body", title: "Full Content", type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),

    // Dates & tags
    defineField({ name: "publishedAt", title: "Published Date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "updatedAt", title: "Last Updated", type: "date" }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "heroImage" },
  },
});
