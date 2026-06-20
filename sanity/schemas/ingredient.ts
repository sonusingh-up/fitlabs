import { defineField, defineType } from "sanity";

export const ingredientSchema = defineType({
  name: "ingredient",
  title: "Ingredients",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Ingredient Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "figNumber", title: "Figure Number (e.g. ING-001)", type: "string" }),
    defineField({ name: "evidenceLevel", title: "Evidence Level", type: "string",
      options: { list: ["strong", "moderate", "limited", "emerging", "insufficient"] },
    }),
    defineField({ name: "summary", title: "Short Summary (hub card)", type: "text", rows: 3 }),
    defineField({ name: "topBenefit", title: "Top Benefit", type: "string" }),
    defineField({ name: "metaDescription", title: "Meta Description (140-160 chars)", type: "text", rows: 2 }),

    // Article template fields
    defineField({ name: "aka", title: "Also Known As", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "intro", title: "Intro Paragraph (2-3 sentences)", type: "text", rows: 4 }),
    defineField({ name: "dose", title: "Effective Dose (e.g. 3-5g / day)", type: "string" }),
    defineField({ name: "mechanism", title: "Mechanism (one-line)", type: "string" }),
    defineField({ name: "mechanismDetail", title: "How It Works (full paragraph)", type: "text", rows: 5 }),
    defineField({
      name: "keyBenefits", title: "Evidence-Based Benefits", type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "claim", title: "Claim", type: "string" }),
          defineField({ name: "evidence", title: "Evidence Level", type: "string",
            options: { list: ["strong", "moderate", "limited", "emerging", "insufficient"] },
          }),
          defineField({ name: "note", title: "Citation / Note", type: "text", rows: 2 }),
        ],
      }],
    }),
    defineField({ name: "dosageNotes", title: "Dosage Guidance Paragraph", type: "text", rows: 4 }),
    defineField({ name: "safetyNotes", title: "Safety & Side Effects Paragraph", type: "text", rows: 4 }),
    defineField({ name: "whoFor", title: "Who Should Take It (narrative)", type: "text", rows: 3 }),
    defineField({ name: "bestFor", title: "Best For (tags)", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "relatedSlugs", title: "Related Ingredient Slugs", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "faqItems", title: "FAQ Items", type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "question", title: "Question", type: "string" }),
          defineField({ name: "answer", title: "Answer", type: "text", rows: 3 }),
        ],
      }],
    }),

    // Dates
    defineField({ name: "publishedAt", title: "Published Date", type: "date" }),
    defineField({ name: "updatedAt", title: "Last Updated", type: "date" }),

    // Fallback rich content
    defineField({ name: "body", title: "Full Content (Portable Text fallback)", type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category" },
  },
});
