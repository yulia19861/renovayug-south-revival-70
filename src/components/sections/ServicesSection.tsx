import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  MapPin, 
  Home,
  Settings,
  Phone,
  ArrowRight,
  Eye
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Строительство домов",
      description: "Полный цикл строительства от фундамента до ключей. Железобетонный каркас, качественные материалы, соблюдение всех технологий.",
      features: [
        "Железобетонный каркас",
        "Качественные материалы", 
        "Соблюдение сроков",
        "Гарантия качества"
      ],
      color: "primary",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Подбор земельного участка",
      description: "Поможем найти идеальный участок для строительства вашего дома. Полное сопровождение сделки и оформление документов.",
      features: [
        "Анализ локации",
        "Проверка документов",
        "Сопровождение сделки",
        "Оформление права собственности"
      ],
      color: "secondary",
      gradient: "from-secondary/10 to-secondary/5"
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: "Отдел готовых домов",
      description: "Готовые дома под ключ с возможностью немедленного заселения. Различные планировки и площади на выбор.",
      features: [
        "Готовые к заселению",
        "Различные планировки",
        "Полная отделка",
        "Благоустроенная территория"
      ],
      color: "primary",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: <Eye className="w-10 h-10" />,
      title: "Экскурсии на наши объекты",
      description: "Бесплатные экскурсии по построенным домам. Посетите готовые объекты, оцените качество работы и выберите подходящий проект.",
      features: [
        "Бесплатные экскурсии",
        "Осмотр готовых домов",
        "Консультация специалиста",
        "Выбор проекта на месте"
      ],
      color: "secondary",
      gradient: "from-secondary/10 to-secondary/5"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary mb-4">
            <Building2 className="w-4 h-4 mr-2" />
            Наши услуги
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Полный спектр услуг для вашего <span className="text-primary">дома</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            От подбора участка до готового дома под ключ — мы сопровождаем вас на каждом этапе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`border-2 hover:border-${service.color}/50 transition-all duration-500 hover:shadow-brand hover:-translate-y-2 animate-fade-in group bg-gradient-to-br ${service.gradient}`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className={`text-${service.color} group-hover:animate-pulse-glow transition-all duration-500`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-${service.color} rounded-full`}></div>
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`w-full border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-white transition-all duration-300 group/btn`}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Узнать подробнее
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 via-background to-secondary/5 border-2 border-primary/20 inline-block">
            <CardContent className="p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Не нашли подходящую услугу?
                </h3>
                <p className="text-muted-foreground">
                  Свяжитесь с нами — мы найдем индивидуальное решение для вашего проекта
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary-light hover:shadow-brand hover:scale-105 text-white font-semibold transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Получить консультацию
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;