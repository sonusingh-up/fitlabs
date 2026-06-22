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

export const goalSchema = defineType({
  name: "goal",
  title: "Goal Guides",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Page Title (h1)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "titleItalic", title: "Italic portion of h1", type: "string" }),
    defineField({ name: "slug", title: "Slug (e.g. longevity)", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "figureCode", title: "Figure Code (e.g. GOL-009)", type: "string" }),
    defineField({ name: "category", title: "Category (e.g. Wellness)", type: "string" }),
    defineField({ name: "categoryLabel", title: "Hero label (e.g. WELLNESS · SPECIALIST GOAL)", type: "string" }),
    defineField({ name: "summary", title: "Hero summary paragraph", type: "text", rows: 3 }),
    defineField({ name: "metaTitle", title: "SEO Title (≤55 chars)", type: "string" }),
    defineField({ name: "metaDescription", title: "Meta Description (140–160 chars)", type: "text", rows: 2 }),
    defineField({ name: "readTime", title: "Read Time (e.g. 14 min)", type: "string" }),
    defineField({ name: "evidenceLevel", title: "Evidence Level", type: "string",
      options: { list: ["strong", "moderate", "limited", "emerging"] },
    }),
    defineField({ name: "citedStudies", title: "Number of cited studies", type: "number" }),
    defineField({
      name: "heroStats", title: "Hero Stat Cards (3 max)", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "value", title: "Value", type: "string" }),
        defineField({ name: "label", title: "Label", type: "string" }),
        defineField({ name: "accent", title: "Accent style (green/neutral/gold)", type: "string",
          options: { list: ["green", "neutral", "gold"] },
        }),
      ]}],
    }),
    defineField({ name: "keyTakeaways", title: "Key Takeaways (5–6 bullets)", type: "array", of: [{ type: "text", rows: 2 }] }),
    defineField({
      name: "sections", title: "Content Sections", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "id", title: "Anchor ID (kebab-case)", type: "string" }),
        defineField({ name: "label", title: "Section Label (e.g. Macronutrients)", type: "string" }),
        defineField({ name: "figure", title: "Section Number (e.g. § 01)", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "headingItalic", title: "Heading italic part", type: "string" }),
        defineField({ name: "intro", title: "Intro paragraph", type: "text", rows: 4 }),
        defineField({ name: "body", title: "Section body (Portable Text)", type: "array",
          of: [{ type: "block" }, { type: "image" }],
        }),
        defineField({
          name: "numberedPanels", title: "Numbered Panels (optional)", type: "array",
          of: [{ type: "object", fields: [
            defineField({ name: "num", title: "Number", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "desc", title: "Description", type: "text", rows: 4 }),
          ]}],
        }),
        defineField({
          name: "gridCards", title: "Grid Cards (optional)", type: "array",
          of: [{ type: "object", fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "note", title: "Note", type: "string" }),
          ]}],
        }),
        defineField({ name: "callout", title: "Callout box text (optional)", type: "text", rows: 3 }),
        defineField({ name: "calloutLabel", title: "Callout label (e.g. What This Means)", type: "string" }),
      ]}],
    }),
    defineField({
      name: "supplements", title: "Supplement Stack", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "rank", title: "Rank", type: "number" }),
        defineField({ name: "name", title: "Supplement Name", type: "string" }),
        defineField({ name: "role", title: "Role", type: "string" }),
        defineField({ name: "evidence", title: "Evidence Level", type: "string",
          options: { list: ["strong", "moderate", "limited", "emerging"] },
        }),
        defineField({ name: "dose", title: "Dose", type: "string" }),
        defineField({ name: "timing", title: "Timing", type: "string" }),
        defineField({ name: "mechanism", title: "Mechanism", type: "text", rows: 3 }),
        defineField({ name: "citation", title: "Citation", type: "string" }),
        defineField({ name: "priority", title: "Priority", type: "string",
          options: { list: ["Essential", "Recommended", "Optional"] },
        }),
      ]}],
    }),
    defineField({
      name: "avoidList", title: "Save Your Money (supplements to avoid)", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "name", title: "Name", type: "string" }),
        defineField({ name: "reason", title: "Reason", type: "text", rows: 2 }),
      ]}],
    }),
    defineField({
      name: "bottomLine", title: "Bottom Line Hierarchy", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "rank", title: "Rank (1st, 2nd...)", type: "string" }),
        defineField({ name: "text", title: "Text", type: "text", rows: 2 }),
      ]}],
    }),
    defineField({ name: "bottomLineClosing", title: "Bottom Line closing paragraph", type: "text", rows: 3 }),
    defineField({
      name: "mistakes", title: "Common Mistakes", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "mistake", title: "Mistake", type: "string" }),
        defineField({ name: "fix", title: "Fix", type: "text", rows: 3 }),
      ]}],
    }),
    defineField({
      name: "timeline", title: "Timeline Table Rows", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "col1", title: "Column 1", type: "string" }),
        defineField({ name: "col2", title: "Column 2", type: "string" }),
        defineField({ name: "col3", title: "Column 3", type: "string" }),
        defineField({ name: "col4", title: "Column 4", type: "string" }),
      ]}],
    }),
    defineField({ name: "timelineHeaders", title: "Timeline Table Headers (4)", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "timelineNote", title: "Timeline footnote", type: "text", rows: 2 }),
    defineField({
      name: "faqItems", title: "FAQ Items", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "question", title: "Question", type: "string" }),
        defineField({ name: "answer", title: "Answer", type: "text", rows: 4 }),
      ]}],
    }),
    defineField({
      name: "references", title: "References", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "text", title: "Citation Text", type: "string" }),
        defineField({ name: "journal", title: "Journal / Year", type: "string" }),
        defineField({ name: "url", title: "PubMed URL", type: "url" }),
      ]}],
    }),
    defineField({
      name: "relatedGoals", title: "Related Goals", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "slug", title: "Slug", type: "string" }),
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "desc", title: "Description", type: "string" }),
        defineField({ name: "accent", title: "Accent Color", type: "string" }),
      ]}],
    }),
    defineField({ name: "publishedAt", title: "Published Date", type: "date" }),
    defineField({ name: "updatedAt", title: "Last Updated", type: "date" }),
  ],
  preview: { select: { title: "title", subtitle: "category" } },
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
