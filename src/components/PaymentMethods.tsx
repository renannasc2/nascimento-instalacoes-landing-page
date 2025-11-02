import { Card, CardContent } from "@/components/ui/card";

const PaymentMethods = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Aceitamos Cartão de Crédito
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pagamento facilitado! Rapidez, segurança e praticidade para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cartões de Crédito */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Crédito</h3>
              <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
                <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img src="/mastercard.png" alt="Mastercard" className="h-full object-contain" />
                </div>
                <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img src="/visa.png" alt="Visa" className="h-full object-contain" />
                </div>
                <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img src="/elo.png" alt="Elo" className="h-full object-contain" />
                </div>
                <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img src="/maestro.png" alt="Maestro" className="h-full object-contain" />
                </div>
                <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img src="/hiper.png" alt="Hiper" className="h-full object-contain" />
                </div>
                <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img src="/hipercard.png" alt="Hipercard" className="h-full object-contain" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cartões de Débito */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Débito</h3>
              <div className="grid grid-cols-2 gap-4 items-center justify-items-center">
                <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img src="/mastercard.png" alt="Mastercard" className="h-full object-contain" />
                </div>
                <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img src="/visa.png" alt="Visa" className="h-full object-contain" />
                </div>
                <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img src="/elo.png" alt="Elo" className="h-full object-contain" />
                </div>
                <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img src="/visa-electron.png" alt="Visa Electron" className="h-full object-contain" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;