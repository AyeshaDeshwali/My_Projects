// src/utils/paginate.js
export const paginate = (items, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};
