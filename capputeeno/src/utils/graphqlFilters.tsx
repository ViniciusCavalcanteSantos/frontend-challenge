import { FilterType } from "@/types/FilterType";
import { PriorityType } from "@/types/PriorityType";

export function getCategoryByType(type: FilterType) {
  if(type === FilterType.MUG) return "mugs";
  if(type === FilterType.SHIRT) return "t-shirts";
  return "";
}

export function getFieldByPriority(priority: PriorityType) {
  if(priority === PriorityType.BIGGEST_PRICE) return {field: "price_in_cents", order: "DESC"}
  if(priority === PriorityType.MINOR_PRICE) return {field: "price_in_cents", order: "ASC"}
  if(priority === PriorityType.NEWS) return {field: "created_at", order: "DESC"}
  return {field: "sales", order: "DESC"}
}

export const mountQuery = (type: FilterType, priority: PriorityType) => {
  if(type === FilterType.ALL && priority === PriorityType.POPULARITY) return `
    query {
      allProducts(sortField: "sales", sortOrder: "DESC") {
        id 
        name
        price_in_cents,
        image_url
      }
    }
  `;

  const priorityFilter = getFieldByPriority(priority);
  const categoryFilter = getCategoryByType(type);

  const priorityQuery = `sortField: "${priorityFilter.field}", sortOrder: "${priorityFilter?.order}"`;
  const categoryQuery = categoryFilter ? `filter: {category: "${categoryFilter}"}` : "";
  return `
    query {
      allProducts(${categoryQuery}, ${priorityQuery}) {
        id 
        name
        price_in_cents,
        image_url,
        sales,
        created_at
      }
    }
  `
}
