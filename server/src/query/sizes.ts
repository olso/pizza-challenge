import { sizes } from "../data";
import { QueryResolvers } from "../types/GeneratedGql";

export const query: QueryResolvers["sizes"] = () => {
  return sizes;
};
