import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calculator, Shield, CreditCard, CheckCircle } from "lucide-react";
import heroHouse from "@/assets/hero-house-family.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-accent via-background to-muted overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-center">
                Строительство домов в <span className="text-primary">Крыму</span>!
              </h1>
              
              <div className="space-y-4">
                <div className="text-2xl lg:text-3xl">
                  <span className="text-secondary font-bold">Стоимость строительства от 5 200 000 ₽</span>
                </div>
                <div className="text-xl lg:text-2xl">
                  <span className="text-primary font-semibold">Семейная ипотека 6%</span>
                </div>
                <div className="text-lg text-muted-foreground">
                  — от <span className="text-foreground font-semibold">36 000 ₽/мес</span>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-secondary to-secondary-light hover:shadow-warm hover:scale-105 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 animate-pulse-glow">
                <Calculator className="w-5 h-5 mr-2" />
                Рассчитать стоимость дома
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">Надёжный дом с железобетонным каркасом</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">Аккредитованный застройщик Сбербанк, ВТБ, Дом.РФ в Крыму!</span>
              </div>
              <div className="flex items-center space-x-3">
                <CreditCard className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">Оплата через эскроу-счёт — только после выполнения работ</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 rounded-2xl animate-pulse-glow hover:animate-float transition-all duration-300">
              <div className="flex items-center justify-center space-x-2 text-xl font-bold">
                <span>Реализовали</span>
                <span className="text-3xl animate-pulse">более 150</span>
                <span>объектов!</span>
              </div>
            </div>
          </div>

          {/* Right Content - House Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src={heroHouse}
                alt="Красивый дом от РеноваЮг"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-6 shadow-brand animate-float">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Реализовали</div>
                  <div className="text-2xl font-bold text-primary animate-pulse">150+</div>
                  <div className="text-sm text-muted-foreground">объектов!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;