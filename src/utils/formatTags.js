import { v4 as uuidv4 } from "uuid";

export const formatTags = (tags) => {
  return tags?.split(",").map((tag) => ({ id: uuidv4(), name: tag }));
};
