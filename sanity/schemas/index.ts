import { reviewSchema } from "./review";
import { ingredientSchema } from "./ingredient";
import { authorSchema, brandSchema, bestListSchema, researchSchema, comparisonSchema } from "./others";
import { skinConditionSchema } from "./skinCondition";
import { skinRoutineSchema } from "./skinRoutine";
import { skinIngredientSchema } from "./skinIngredient";
import { skinGuideSchema } from "./skinGuide";

export const schemaTypes = [
  reviewSchema,
  ingredientSchema,
  authorSchema,
  brandSchema,
  bestListSchema,
  researchSchema,
  comparisonSchema,
  skinConditionSchema,
  skinRoutineSchema,
  skinIngredientSchema,
  skinGuideSchema,
];
