import React from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Ruler, MapPin, Calculator, Eye } from "lucide-react";

const houses = [
  {
    id: 1,
    name: "Дом 'СЕМЕЙНЫЙ'",
    area: "120 м²",
    price: "5 200 000 ₽",
    monthlyPayment: "36 000 ₽/мес",
    image: "/assets/hero-house.jpg",
    rooms: "3 комнаты",
    location: "Севастополь",
    features: ["Железобетонный каркас", "Энергоэффективность", "Современная планировка"]
  },
  {
    id: 2,
    name: "Дом 'КОМФОРТ'",
    area: "150 м²",
    price: "6 800 000 ₽",
    monthlyPayment: "47 000 ₽/мес",
    image: "/assets/hero-house-family.jpg",
    rooms: "4 комнаты",
    location: "Симферополь",
    features: ["Панорамные окна", "Терраса", "Гараж"]
  },
  {
    id: 3,
    name: "Дом 'ПРЕМИУМ'",
    area: "200 м²",
    price: "8 900 000 ₽",
    monthlyPayment: "61 000 ₽/мес",
    image: "/assets/hero-house.jpg",
    rooms: "5 комнат",
    location: "Ялта",
    features: ["Второй этаж", "Камин", "Ландшафтный дизайн"]
  },
  {
    id: 4,
    name: "Дом 'ЭКОНОМ'",
    area: "90 м²",
    price: "4 100 000 ₽",
    monthlyPayment: "28 000 ₽/мес",
    image: "/assets/hero-house-family.jpg",
    rooms: "2 комнаты",
    location: "Евпатория",
    features: ["Компактность", "Энергосбережение", "Быстрое строительство"]
  },
  {
    id: 5,
    name: "Дом 'КЛАССИК'",
    area: "135 м²",
    price: "5 900 000 ₽",
    monthlyPayment: "41 000 ₽/мес",
    image: "/assets/hero-house.jpg",
    rooms: "3 комнаты",
    location: "Керчь",
    features: ["Классическая планировка", "Высокие потолки", "Большие окна"]
  },
  {
    id: 6,
    name: "Дом 'МОДЕРН'",
    area: "180 м²",
    price: "7 500 000 ₽",
    monthlyPayment: "52 000 ₽/мес",
    image: "/assets/hero-house-family.jpg",
    rooms: "4 комнаты",
    location: "Феодосия",
    features: ["Современный дизайн", "Умный дом", "Плоская крыша"]
  }
];

const Catalog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-accent via-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Каталог <span className="text-primary">проектов домов</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Выберите идеальный дом для вашей семьи из нашего каталога проверенных проектов. 
              Все дома строятся с использованием современных технологий и качественных материалов.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {houses.map((house) => (
              <Card key={house.id} className="overflow-hidden hover:shadow-brand transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={house.image} 
                    alt={house.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {house.location}
                  </Badge>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute top-4 right-4"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    360°
                  </Button>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{house.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Ruler className="w-4 h-4 mr-1" />
                        {house.area}
                      </div>
                      <div className="flex items-center">
                        <Home className="w-4 h-4 mr-1" />
                        {house.rooms}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {house.features.map((feature, index) => (
                      <div key={index} className="text-sm text-muted-foreground">
                        • {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {house.price}
                    </div>
                    <div className="text-secondary font-semibold">
                      Ипотека от {house.monthlyPayment}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      <Calculator className="w-4 h-4 mr-2" />
                      Рассчитать
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Круглосуточное наблюдение за строительством
              </h3>
              <p className="text-lg mb-6">
                Следите за ходом строительства вашего дома в реальном времени через веб-камеры
              </p>
              <Button variant="outline" className="bg-white text-primary hover:bg-white/90">
                <Eye className="w-4 h-4 mr-2" />
                Смотреть онлайн
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;