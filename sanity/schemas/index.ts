import { reviewSchema } from "./review";
import { ingredientSchema } from "./ingredient";
import { blogSchema } from "./blog";
import { authorSchema, brandSchema, bestListSchema, researchSchema, comparisonSchema, goalSchema } from "./others";

import { tdeeCalculatorSchema } from "./tdeeCalculator";

export const schemaTypes = [
  reviewSchema,
  ingredientSchema,
  blogSchema,
  authorSchema,
  brandSchema,
  bestListSchema,
  researchSchema,
  comparisonSchema,
  goalSchema,
  tdeeCalculatorSchema,
];
