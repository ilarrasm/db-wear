const transformAmountcolorsToText = (amountColors: number) => {
  if (!amountColors) return "";
  if (amountColors === 1) return "Un solo color - envio a toda españa.";
  return `${amountColors} colores - envio a toda españa.`;
};

export default transformAmountcolorsToText;