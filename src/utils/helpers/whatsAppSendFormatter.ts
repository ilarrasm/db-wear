/* 
dicho helper deberia resolver el problema de enviar un mensaje por la api de whatsapp.
dicho debe tener un texto donde se necesite poner el 

por el momento solo utilizaremos el nombre del set

*/

const NUMBER = "34635430327";

const BodyFormatter = (nameProduct: string) =>
  `¡Hola! vengo a preguntar por el ${nameProduct}. Muchas gracias!`;

const whatsAppSendFormatter = (nameProduct: string) => {
  return `https://api.whatsapp.com/send?phone=+${NUMBER}&text=${BodyFormatter(nameProduct)}`;
};

export default whatsAppSendFormatter;