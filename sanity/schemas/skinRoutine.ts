import { defineField, defineType } from "sanity";

export const skinRoutineSchema = defineType({
  name: "skinRoutine",
  title: "Skin Routines",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Routine Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "skinTypes", title: "Suitable Skin Types", type: "array",
      of: [{ type: "string" }],
      options: { list: ["oily", "dry", "combination", "sensitive", "normal", "acne-prone", "mature"] },
    }),
    defineField({
      name: "steps", title: "Routine Steps", type: "array",
      of: [{
        type: "object", fields: [
          { name: "stepNumber", title: "Step Number", type: "number" },
          { name: "instruction", title: "Instruction", type: "string" },
          { name: "duration", title: "Duration (e.g. 30 seconds)", type: "string" },
          { name: "notes", title: "Notes", type: "text", rows: 2 },
        ],
      }],
    }),
    defineField({ name: "duration", title: "Total Duration (e.g. 10 minutes)", type: "string" }),
    defineField({
      name: "ingredients", title: "Key Ingredients", type: "array",
      of: [{ type: "reference", to: [{ type: "skinIngredient" }] }],
    }),
    defineField({
      name: "relatedGuides", title: "Related Guides", type: "array",
      of: [{ type: "reference", to: [{ type: "skinGuide" }] }],
    }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 2,
      description: "For SEO — keep under 155 characters",
    }),
    defineField({ name: "publishedAt", title: "Published Date", type: "date" }),
  ],
  preview: { select: { title: "title", subtitle: "duration", media: "heroImage" } },
});
