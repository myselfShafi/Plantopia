export const getDiscountPercent = (price, discount) => {
  const original = parseInt(price);
  const mrp = parseInt(discount ?? price);

  const value = original - mrp;
  const percent = (value / original) * 100;

  return Math.round(percent);
};
