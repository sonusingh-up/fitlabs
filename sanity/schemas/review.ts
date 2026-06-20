import { defineField, defineType } from "sanity";

export const reviewSchema = defineType({
  name: "review",
  title: "Reviews",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "brand", title: "Brand", type: "string", validation: (r) => r.required() }),
    defineField({ name: "category", title: "Category", type: "string",
      options: { list: ["Protein Powder","Creatine","Pre-Workout","BCAA","Fat Burner","Multivitamin","Mass Gainer","Other"] }
    }),
    defineField({ name: "editorialScore", title: "Editorial Score (1–10)", type: "number",
      validation: (r) => r.required().min(1).max(10)
    }),
    defineField({ name: "verdict", title: "Short Verdict", type: "text", rows: 3 }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "publishedAt", title: "Published Date", type: "date" }),
    defineField({ name: "updatedAt", title: "Last Updated", type: "date" }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "priceRange", title: "Price Range", type: "string",
      options: { list: ["budget","mid","premium"] }
    }),
    defineField({ name: "affiliateUrl", title: "Affiliate URL", type: "url" }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 2,
      description: "For SEO — keep under 155 characters"
    }),

    // FSP Scoring Pillars
    defineField({
      name: "pillars", title: "FSP Scoring Pillars", type: "array",
      of: [{
        type: "object", fields: [
          { name: "pillar", title: "Pillar", type: "string",
            options: { list: ["formula","transparency","verification","value","practical"] }
          },
          { name: "score", title: "Score (1–10)", type: "number" },
          { name: "notes", title: "Notes", type: "text", rows: 3 },
        ]
      }]
    }),

    // Flags
    defineField({
      name: "flags", title: "Red & Green Flags", type: "array",
      of: [{
        type: "object", fields: [
          { name: "type", title: "Type", type: "string", options: { list: ["red","green"] } },
          { name: "label", title: "Label", type: "string" },
          { name: "detail", title: "Detail", type: "text", rows: 2 },
          { name: "deduction", title: "Score Deduction (red flags only)", type: "number" },
        ]
      }]
    }),

    // Ingredients
    defineField({
      name: "ingredients", title: "Ingredients", type: "array",
      of: [{
        type: "object", fields: [
          { name: "name", title: "Ingredient Name", type: "string" },
          { name: "dosage", title: "Dosage", type: "string" },
          { name: "evidenceLevel", title: "Evidence Level", type: "string",
            options: { list: ["strong","moderate","limited","emerging","insufficient"] }
          },
          { name: "purpose", title: "Purpose", type: "string" },
          { name: "notes", title: "Notes", type: "text", rows: 2 },
        ]
      }]
    }),

    // Claim Audit
    defineField({
      name: "claimAudit", title: "Claim Audit", type: "array",
      of: [{
        type: "object", fields: [
          { name: "claim", title: "Brand Claim", type: "string" },
          { name: "verdict", title: "Verdict", type: "string",
            options: { list: ["supported","overstated","context-dependent","unsupported"] }
          },
          { name: "evidence", title: "Evidence Level", type: "string",
            options: { list: ["strong","moderate","limited","emerging","insufficient"] }
          },
          { name: "notes", title: "Notes", type: "text", rows: 2 },
        ]
      }]
    }),

    // Pros / Cons
    defineField({ name: "pros", title: "Pros", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "cons", title: "Cons", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "bestFor", title: "Best For", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "notIdealFor", title: "Not Ideal For", type: "array", of: [{ type: "string" }] }),

    // Value Metric
    defineField({
      name: "valueMetric", title: "Value Metric", type: "object",
      fields: [
        { name: "pricePerServing", title: "Price Per Serving (₹)", type: "number" },
        { name: "primaryActiveGrams", title: "Primary Active (grams)", type: "number" },
        { name: "pricePerGramActive", title: "Price Per Gram Active (₹)", type: "number" },
        { name: "categoryAvgPricePerGram", title: "Category Avg ₹/g", type: "number" },
        { name: "efficiency", title: "Efficiency vs Category", type: "string",
          options: { list: ["above","at","below"] }
        },
      ]
    }),

    // Review metadata
    defineField({ name: "reviewCode", title: "Review Code (e.g. REV-2026-041)", type: "string" }),
    defineField({ name: "testingPeriod", title: "Testing Period (e.g. 4 Years)", type: "string" }),
    defineField({ name: "tubsTested", title: "Tubs Tested (e.g. 20+)", type: "string" }),
    defineField({ name: "keyTakeaways", title: "Key Takeaways (3-4 bullets)", type: "array", of: [{ type: "string" }] }),

    // Product specs
    defineField({
      name: "productSpecs", title: "Product Specs Card", type: "object",
      fields: [
        defineField({ name: "servings", title: "Servings per container", type: "string" }),
        defineField({ name: "servingSize", title: "Serving size", type: "string" }),
        defineField({ name: "calories", title: "Calories", type: "string" }),
        defineField({ name: "protein", title: "Protein", type: "string" }),
        defineField({ name: "certifications", title: "Certifications", type: "array", of: [{ type: "string" }] }),
      ],
    }),

    // Tester experience
    defineField({
      name: "testerExperience", title: "Personal Tester Experience", type: "object",
      fields: [
        defineField({ name: "name", title: "Tester Name", type: "string" }),
        defineField({ name: "role", title: "Role/Background", type: "string" }),
        defineField({ name: "avatar", title: "Tester Photo", type: "image", options: { hotspot: true } }),
        defineField({ name: "motivation", title: "Why they tested it", type: "text", rows: 2 }),
        defineField({ name: "howUsed", title: "How I used it", type: "text", rows: 4 }),
        defineField({ name: "taste", title: "Taste & texture notes", type: "text", rows: 3 }),
        defineField({ name: "results", title: "Results observed", type: "text", rows: 4 }),
        defineField({ name: "finalThoughts", title: "Final thoughts", type: "text", rows: 3 }),
      ],
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
      name: "references", title: "Research References", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "text", title: "Citation Text", type: "string" }),
        defineField({ name: "url", title: "URL (PubMed/DOI)", type: "url" }),
      ]}],
    }),

    // Related content
    defineField({ name: "relatedReviews", title: "Related Reviews", type: "array",
      of: [{ type: "reference", to: [{ type: "review" }] }],
    }),
    defineField({ name: "relatedIngredients", title: "Related Ingredients", type: "array",
      of: [{ type: "reference", to: [{ type: "ingredient" }] }],
    }),

    // Rich body content
    defineField({ name: "body", title: "Full Review Body", type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),

    // Author references
    defineField({ name: "author", title: "Written By", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "reviewer", title: "Reviewed By", type: "reference", to: [{ type: "author" }] }),
  ],
  preview: {
    select: { title: "title", subtitle: "brand", media: "heroImage" },
  },
});
