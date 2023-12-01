const priceFormatter = (number: number | null = 0) => {
  if (!number) return "Consultar";
  const euroFormat = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2, // Define el número mínimo de dígitos para los céntimos
  }).format(number);
  return euroFormat;
};
export default priceFormatter;
