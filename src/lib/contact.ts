export const contact = {
  phone: "5514997938562",
  displayPhone: "(14) 99793-8562",
  email: "isaias_nascimento@hotmail.com",
  instagram: "nascimentoinstalacoes_bauru",
};

export const whatsappUrl = (message = "Olá! Gostaria de solicitar um orçamento.") =>
  `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;

export const phoneUrl = `tel:+${contact.phone}`;
