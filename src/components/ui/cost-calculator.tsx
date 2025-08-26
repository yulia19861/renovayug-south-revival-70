import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, ArrowRight, ArrowLeft, Home, Banknote } from "lucide-react";

interface CalculatorData {
  hasLand: boolean;
  area: string;
  floors: string;
  foundation: string;
  roof: boolean;
  wallMaterial: string;
  budget: string;
  useMaternityCapital: boolean;
  useMortgage: boolean;
}

export const CostCalculator = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [data, setData] = useState<CalculatorData>({
    hasLand: false,
    area: "",
    floors: "",
    foundation: "",
    roof: false,
    wallMaterial: "",
    budget: "",
    useMaternityCapital: false,
    useMortgage: false,
  });

  const calculateCost = () => {
    const baseArea = parseInt(data.area) || 100;
    const floorMultiplier = data.floors === "2" ? 1.4 : 1;
    const foundationCost = data.foundation === "plate" ? 1.2 : 1;
    const roofCost = data.roof ? 1.15 : 1;
    const wallCost = data.wallMaterial === "shell" ? 0.9 : 1.1;
    
    const baseCostPerSqm = 43000; // базовая стоимость за кв.м
    
    const totalCost = baseArea * baseCostPerSqm * floorMultiplier * foundationCost * roofCost * wallCost;
    
    return Math.round(totalCost);
  };

  const calculateMortgage = (totalCost: number) => {
    const budget = parseInt(data.budget) || 0;
    const maternityCapital = data.useMaternityCapital ? 631000 : 0;
    const downPayment = budget + maternityCapital;
    const loanAmount = Math.max(totalCost - downPayment, 0);
    
    // Семейная ипотека 6% на 25 лет
    const monthlyRate = 0.06 / 12;
    const months = 25 * 12;
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    
    return {
      loanAmount,
      monthlyPayment: Math.round(monthlyPayment),
      downPayment
    };
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const resetCalculator = () => {
    setStep(1);
    setData({
      hasLand: false,
      area: "",
      floors: "",
      foundation: "",
      roof: false,
      wallMaterial: "",
      budget: "",
      useMaternityCapital: false,
      useMortgage: false,
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Home className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Основные параметры дома</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="hasLand" 
                  checked={data.hasLand} 
                  onCheckedChange={(checked) => setData(prev => ({ ...prev, hasLand: !!checked }))}
                />
                <Label htmlFor="hasLand">У меня есть земельный участок</Label>
              </div>

              <div>
                <Label htmlFor="area">Площадь дома (кв.м)</Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="100"
                  value={data.area}
                  onChange={(e) => setData(prev => ({ ...prev, area: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="floors">Количество этажей</Label>
                <Select value={data.floors} onValueChange={(value) => setData(prev => ({ ...prev, floors: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите количество этажей" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 этаж</SelectItem>
                    <SelectItem value="2">2 этажа</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Конструктивные особенности</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="foundation">Тип фундамента</Label>
                <Select value={data.foundation} onValueChange={(value) => setData(prev => ({ ...prev, foundation: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип фундамента" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="strip">Лента со стяжкой</SelectItem>
                    <SelectItem value="plate">Плита</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="roof" 
                  checked={data.roof} 
                  onCheckedChange={(checked) => setData(prev => ({ ...prev, roof: !!checked }))}
                />
                <Label htmlFor="roof">Четырехскатная кровля</Label>
              </div>

              <div>
                <Label htmlFor="wallMaterial">Материал стен</Label>
                <Select value={data.wallMaterial} onValueChange={(value) => setData(prev => ({ ...prev, wallMaterial: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите материал стен" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shell">Ракушка</SelectItem>
                    <SelectItem value="gasblock">Газоблок</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Banknote className="w-12 h-12 mx-auto text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Финансирование</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="budget">Ориентировочная сумма на руках (₽)</Label>
                <Input
                  id="budget"
                  type="number"
                  placeholder="1000000"
                  value={data.budget}
                  onChange={(e) => setData(prev => ({ ...prev, budget: e.target.value }))}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="maternityCapital" 
                  checked={data.useMaternityCapital} 
                  onCheckedChange={(checked) => setData(prev => ({ ...prev, useMaternityCapital: !!checked }))}
                />
                <Label htmlFor="maternityCapital">Использую материнский капитал (631 000 ₽)</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="mortgage" 
                  checked={data.useMortgage} 
                  onCheckedChange={(checked) => setData(prev => ({ ...prev, useMortgage: !!checked }))}
                />
                <Label htmlFor="mortgage">Планирую использовать ипотеку</Label>
              </div>
            </div>
          </div>
        );

      case 4:
        const totalCost = calculateCost();
        const mortgage = calculateMortgage(totalCost);
        
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Calculator className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Результат расчета</h3>
            </div>
            
            <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="text-center space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground">Стоимость строительства</div>
                  <div className="text-3xl font-bold text-primary">
                    {totalCost.toLocaleString()} ₽
                  </div>
                </div>
                
                {!data.hasLand && (
                  <div className="text-sm text-muted-foreground border-t pt-4">
                    + подбор земельного участка (от 500 000 ₽)
                  </div>
                )}

                {data.useMortgage && (
                  <div className="border-t pt-4 space-y-2">
                    <div className="text-sm text-muted-foreground">Первоначальный взнос</div>
                    <div className="text-xl font-semibold text-secondary">
                      {mortgage.downPayment.toLocaleString()} ₽
                    </div>
                    
                    <div className="text-sm text-muted-foreground">Сумма кредита</div>
                    <div className="text-xl font-semibold">
                      {mortgage.loanAmount.toLocaleString()} ₽
                    </div>
                    
                    <div className="text-sm text-muted-foreground">Ежемесячный платеж</div>
                    <div className="text-2xl font-bold text-primary">
                      {mortgage.monthlyPayment.toLocaleString()} ₽/мес
                    </div>
                    <div className="text-xs text-muted-foreground">
                      (семейная ипотека 6% на 25 лет)
                    </div>
                  </div>
                )}
              </div>
            </Card>

            <div className="space-y-3">
              <Button className="w-full" size="lg">
                Получить подробное предложение
              </Button>
              <Button variant="outline" className="w-full" onClick={resetCalculator}>
                Рассчитать заново
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">
            Калькулятор стоимости строительства
          </DialogTitle>
        </DialogHeader>
        
        {/* Progress */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                s === step 
                  ? "bg-primary text-primary-foreground" 
                  : s < step 
                    ? "bg-primary/20 text-primary" 
                    : "bg-muted text-muted-foreground"
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        {renderStep()}

        {/* Navigation */}
        {step < 4 && (
          <div className="flex justify-between pt-6">
            <Button 
              variant="outline" 
              onClick={prevStep} 
              disabled={step === 1}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад
            </Button>
            <Button 
              onClick={nextStep}
              disabled={
                (step === 1 && (!data.area || !data.floors)) ||
                (step === 2 && (!data.foundation || !data.wallMaterial)) ||
                (step === 3 && !data.budget)
              }
            >
              Далее
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};