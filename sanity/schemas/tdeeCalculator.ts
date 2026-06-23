import { defineField, defineType } from "sanity";

export const tdeeCalculatorSchema = defineType({
  name: "tdeeCalculator",
  title: "TDEE Calculator Settings",
  type: "document",
  fields: [
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
    }),
    defineField({
      name: "ogImage",
      title: "OpenGraph Image",
      type: "image",
    }),
    defineField({
      name: "tooltips",
      title: "Activity Tooltips",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "level", title: "Activity Level", type: "string", options: { list: ['sedentary', 'light', 'moderate', 'active', 'athlete'] } },
            { name: "description", title: "Tooltip Description", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "educationalContent",
      title: "Educational Content",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
