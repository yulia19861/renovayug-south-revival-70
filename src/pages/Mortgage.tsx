import React from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Calculator, Building, Shield, CheckCircle } from "lucide-react";

const mortgagePrograms = [
  {
    bank: "Сбербанк",
    program: "Семейная ипотека",
    rate: "6%",
    downPayment: "15%",
    term: "до 30 лет",
    features: ["Государственная поддержка", "Льготная ставка", "Материнский капитал"]
  },
  {
    bank: "ВТБ",
    program: "Новостройки",
    rate: "6.5%",
    downPayment: "20%",
    term: "до 25 лет",
    features: ["Без справок о доходах", "Быстрое одобрение", "Онлайн-заявка"]
  },
  {
    bank: "Дом.РФ",
    program: "Льготная ипотека",
    rate: "8%",
    downPayment: "10%",
    term: "до 30 лет",
    features: ["Минимальный взнос", "Господдержка", "Для молодых семей"]
  }
];

const Mortgage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-accent via-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Ипотечные <span className="text-primary">программы</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы аккредитованы во всех крупнейших банках Крыма. Поможем подобрать оптимальную 
              ипотечную программу и оформим все документы.
            </p>
          </div>

          {/* Mortgage Programs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {mortgagePrograms.map((program, index) => (
              <Card key={index} className="p-6 hover:shadow-brand transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{program.bank}</h3>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    {program.program}
                  </Badge>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Ставка:</span>
                    <span className="text-2xl font-bold text-primary">{program.rate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Первый взнос:</span>
                    <span className="font-semibold">{program.downPayment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Срок:</span>
                    <span className="font-semibold">{program.term}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button className="w-full">
                  <Calculator className="w-4 h-4 mr-2" />
                  Рассчитать
                </Button>
              </Card>
            ))}
          </div>

          {/* Bank Calculators */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Ипотечные калькуляторы банков
            </h2>
            
            {/* Sberbank Calculator */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold text-foreground">Калькулятор Сбербанка</h3>
              </div>
              <div className="bg-muted rounded-lg p-8 text-center">
                <iframe
                  src="https://domclick.ru/ipoteka/calculator"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Калькулятор Сбербанка"
                  className="rounded-lg"
                />
                <p className="text-sm text-muted-foreground mt-4">
                  Официальный калькулятор ипотеки Сбербанка
                </p>
              </div>
            </Card>

            {/* VTB Calculator */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <CreditCard className="w-8 h-8 text-secondary mr-4" />
                <h3 className="text-2xl font-bold text-foreground">Калькулятор ВТБ</h3>
              </div>
              <div className="bg-muted rounded-lg p-8 text-center">
                <iframe
                  src="https://www.vtb.ru/personal/ipoteka/calculator/"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Калькулятор ВТБ"
                  className="rounded-lg"
                />
                <p className="text-sm text-muted-foreground mt-4">
                  Официальный калькулятор ипотеки ВТБ
                </p>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <div className="mt-16 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-center mb-8">
              Почему выбирают нас для ипотеки
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Аккредитация</h4>
                <p className="text-sm opacity-90">
                  Официальная аккредитация во всех крупных банках Крыма
                </p>
              </div>
              <div className="text-center">
                <Calculator className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Лучшие условия</h4>
                <p className="text-sm opacity-90">
                  Помогаем получить минимальную ставку и максимальную сумму
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Полное сопровождение</h4>
                <p className="text-sm opacity-90">
                  Ведем сделку от заявки до получения ключей
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mortgage;