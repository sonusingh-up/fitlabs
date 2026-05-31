import { reviewSchema } from "./review";
import { ingredientSchema } from "./ingredient";
import { authorSchema, brandSchema, bestListSchema, researchSchema, comparisonSchema } from "./others";

export const schemaTypes = [
  reviewSchema,
  ingredientSchema,
  authorSchema,
  brandSchema,
  bestListSchema,
  researchSchema,
  comparisonSchema,
];
