import { defineField, defineType } from "sanity";

export const skinConditionSchema = defineType({
  name: "skinCondition",
  title: "Skin Conditions",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Condition Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "symptoms", title: "Symptoms", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "causes", title: "Causes", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "treatments", title: "Treatments", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "relatedGuides", title: "Related Guides", type: "array",
      of: [{ type: "reference", to: [{ type: "skinGuide" }] }],
    }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 2,
      description: "For SEO — keep under 155 characters",
    }),
    defineField({ name: "publishedAt", title: "Published Date", type: "date" }),
  ],
  preview: { select: { title: "title", media: "heroImage" } },
});
