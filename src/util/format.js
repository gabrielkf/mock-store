export const {
  //* destructures property and renames it
  format: formatPrice,
} = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
