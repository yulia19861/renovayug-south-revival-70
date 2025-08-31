import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Clock, 
  CreditCard, 
  Award,
  Users,
  MapPin,
  Banknote,
  CheckCircle2
} from "lucide-react";
import YandexMap from "@/components/ui/yandex-map";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Надёжность",
      description: "Железобетонный каркас и качественные материалы",
      color: "text-primary"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Безопасность",
      description: "Оплата через эскроу-счёт",
      color: "text-secondary"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Аккредитация",
      description: "Сбербанк, ВТБ, Дом.РФ",
      color: "text-primary"
    }
  ];

  const advantages = [
    "Более 150 реализованных объектов",
    "Семейная ипотека от 6%",
    "Собственная строительная бригада",
    "Полный цикл строительства"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-brand hover:-translate-y-2 animate-fade-in group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-8">
                <div className={`${feature.color} mb-4 flex justify-center group-hover:animate-pulse-glow transition-all duration-500`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary">
                <Users className="w-4 h-4 mr-2" />
                Наши преимущества
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Почему выбирают <span className="text-primary">РеноваЮг</span>?
              </h2>
              <p className="text-lg text-muted-foreground">
                Мы строим не просто дома — мы создаем пространство для жизни ваших мечтаний
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">География работы - Севастополь</h3>
                  </div>
                </div>
                <div className="mb-6">
                  <YandexMap />
                </div>
                <p className="text-foreground mb-4 text-center font-medium">
                  Флажками отмечены наши построенные дома
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border-2 border-secondary/20">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Banknote className="w-8 h-8 text-secondary" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Финансирование</h3>
                    <p className="text-muted-foreground">Гибкие условия</p>
                  </div>
                </div>
                <p className="text-foreground mb-4">
                  Семейная ипотека от 6%, материнский капитал
                </p>
                <div className="text-2xl font-bold text-secondary">
                  от 36 000 ₽/мес
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;