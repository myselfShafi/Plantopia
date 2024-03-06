export const getCurrentYear = () => {
  const current = new Date();
  const year = current.getFullYear();
  return year;
};
