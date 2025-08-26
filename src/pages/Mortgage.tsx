import React from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
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

          {/* Universal Mortgage Calculator */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Ипотечный калькулятор
            </h2>
            
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Calculator className="w-8 h-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold text-foreground">Рассчитайте ипотеку</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Calculator Form */}
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="housePrice">Стоимость дома (₽)</Label>
                    <Input
                      id="housePrice"
                      type="number"
                      placeholder="5200000"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="program">Ипотечная программа</Label>
                    <Select defaultValue="family">
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="family">Семейная ипотека - 6%</SelectItem>
                        <SelectItem value="standard">Стандартная ипотека - 8.5%</SelectItem>
                        <SelectItem value="domrf">Дом.РФ - 8%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="downPayment">Первоначальный взнос (%)</Label>
                    <div className="mt-2">
                      <Slider
                        id="downPayment"
                        min={20.1}
                        max={99}
                        step={0.1}
                        defaultValue={[20.1]}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>20.1%</span>
                        <span id="downPaymentValue">20.1%</span>
                        <span>99%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="term">Срок кредита (лет)</Label>
                    <Select defaultValue="25">
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10 лет</SelectItem>
                        <SelectItem value="15">15 лет</SelectItem>
                        <SelectItem value="20">20 лет</SelectItem>
                        <SelectItem value="25">25 лет</SelectItem>
                        <SelectItem value="30">30 лет</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="maternityCapital" />
                    <Label htmlFor="maternityCapital">
                      Использовать материнский капитал (631 000 ₽)
                    </Label>
                  </div>

                  <Button className="w-full" size="lg">
                    <Calculator className="w-4 h-4 mr-2" />
                    Рассчитать
                  </Button>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4 text-center">Результат расчета</h4>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Стоимость дома:</span>
                      <span className="font-semibold">5 200 000 ₽</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Первоначальный взнос:</span>
                      <span className="font-semibold text-secondary">1 045 200 ₽</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Сумма кредита:</span>
                      <span className="font-semibold">4 154 800 ₽</span>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Ежемесячный платеж</div>
                        <div className="text-3xl font-bold text-primary">36 289 ₽</div>
                        <div className="text-xs text-muted-foreground">семейная ипотека 6% на 25 лет</div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="text-sm text-muted-foreground mb-2">Переплата по кредиту:</div>
                      <div className="text-lg font-semibold text-secondary">6 731 800 ₽</div>
                    </div>
                    
                    <div className="text-center pt-4">
                      <Button variant="outline" className="w-full">
                        Получить одобрение
                      </Button>
                    </div>
                  </div>
                </div>
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