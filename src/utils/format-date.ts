export default function formatDateToPTBR(dateStr: string) {
  const date = new Date(dateStr);

  return date.toLocaleDateString("pt-BR");
}
