import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "fitlabs",
  title: "Fitlabreviews CMS",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem().title("Reviews").schemaType("review").child(S.documentTypeList("review")),
            S.listItem().title("Blog").schemaType("blog").child(S.documentTypeList("blog")),
            S.listItem().title("Ingredients").schemaType("ingredient").child(S.documentTypeList("ingredient")),
            S.listItem().title("Authors").schemaType("author").child(S.documentTypeList("author")),
            S.listItem().title("Brands").schemaType("brand").child(S.documentTypeList("brand")),
            S.listItem().title("Best Lists").schemaType("bestList").child(S.documentTypeList("bestList")),
            S.listItem().title("Research").schemaType("research").child(S.documentTypeList("research")),
            S.listItem().title("Comparisons").schemaType("comparison").child(S.documentTypeList("comparison")),
          ]),
    }),
    visionTool(),
  ],

  schema: { types: schemaTypes },
});
