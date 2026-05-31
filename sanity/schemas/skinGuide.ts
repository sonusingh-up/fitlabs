import { defineField, defineType } from "sanity";

export const skinGuideSchema = defineType({
  name: "skinGuide",
  title: "Skin Guides",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Guide Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "description", title: "Short Description", type: "text", rows: 3 }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "category", title: "Category", type: "string",
      options: { list: ["Acne", "Anti-Aging", "Hydration", "Sun Protection", "Hyperpigmentation", "Sensitive Skin", "General Skincare"] },
    }),
    defineField({ name: "difficulty", title: "Difficulty", type: "string",
      options: { list: ["beginner", "intermediate", "advanced"] },
    }),
    defineField({ name: "timeEstimate", title: "Time Estimate (e.g. 5 min read)", type: "string" }),
    defineField({ name: "body", title: "Full Content", type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({
      name: "relatedTopics", title: "Related Topics", type: "array",
      // Single reference member pointing to multiple types — avoids duplicate-name error
      of: [
        { type: "reference", to: [{ type: "skinCondition" }, { type: "skinIngredient" }, { type: "skinRoutine" }] },
      ],
    }),
    defineField({ name: "author", title: "Author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 2,
      description: "For SEO — keep under 155 characters",
    }),
    defineField({ name: "publishedAt", title: "Published Date", type: "date" }),
    defineField({ name: "updatedAt", title: "Last Updated", type: "date" }),
  ],
  preview: { select: { title: "title", subtitle: "category", media: "heroImage" } },
});
