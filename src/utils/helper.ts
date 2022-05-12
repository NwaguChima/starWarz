export const computeHeight = (rows: any) => {
  const sum = rows?.reduce((sum: number, cur: any) => {
    if (cur.values.height !== "unknown") {
      return sum + +cur.values.height;
    } else return sum;
  }, 0);

  return sum;
};
