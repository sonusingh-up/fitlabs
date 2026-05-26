import { defineField, defineType } from "sanity";

export const ingredientSchema = defineType({
  name: "ingredient",
  title: "Ingredients",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Ingredient Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "summary", title: "Short Summary", type: "text", rows: 3 }),
    defineField({ name: "evidenceLevel", title: "Evidence Level", type: "string",
      options: { list: ["strong","moderate","limited","emerging","insufficient"] }
    }),
    defineField({ name: "topBenefit", title: "Top Benefit", type: "string" }),
    defineField({ name: "figNumber", title: "Figure Number (e.g. ING-01)", type: "string" }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 2 }),
    defineField({ name: "body", title: "Full Content", type: "array",
      of: [{ type: "block" }, { type: "image" }]
    }),
    defineField({ name: "publishedAt", title: "Published Date", type: "date" }),
  ],
  preview: {
    select: { title: "name", subtitle: "category" },
  },
});
