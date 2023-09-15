const currencyFormat = (num: any) => {
  num = parseInt(num) || null;
  return num?.toFixed(0)?.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$&'") || 0;
};
export const formatValue = (value: number) =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 3,
    notation: "compact",
  }).format(value);

export const formatThousands = (value: number) =>
  Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
    notation: "compact",
  }).format(value);
export default { currencyFormat, formatValue, formatThousands };
