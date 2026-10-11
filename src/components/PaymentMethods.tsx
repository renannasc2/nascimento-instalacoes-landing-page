const brands = [
  ["mastercard", "Mastercard"], ["visa", "Visa"], ["elo", "Elo"],
  ["maestro", "Maestro"], ["hiper", "Hiper"], ["hipercard", "Hipercard"],
  ["visa-electron", "Visa Electron"],
];

const PaymentMethods = () => (
  <section aria-label="Formas de pagamento" className="py-8 px-4 bg-background border-y border-border">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <h2 className="text-xl font-bold">Aceitamos cartões de crédito e débito</h2>
        <p className="text-sm text-muted-foreground mt-1">Consulte as condições ao solicitar seu orçamento.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {brands.map(([file, name]) => (
          <img key={file} src={`/${file}.png`} alt={name} loading="lazy" decoding="async" width={48} height={32} className="w-12 h-8 object-contain" />
        ))}
      </div>
    </div>
  </section>
);

export default PaymentMethods;
