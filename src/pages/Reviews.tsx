import React from "react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Star, Play, Quote, MapPin, Calendar } from "lucide-react";

const textReviews = [
  {
    id: 1,
    name: "Алексей Морозов",
    location: "Севастополь",
    date: "Декабрь 2024",
    rating: 5,
    text: "Отличная работа команды РеноваЮг! Дом построили точно в срок, качество на высоте. Особенно порадовала возможность следить за строительством через камеры - было спокойно находиться в Москве и видеть прогресс каждый день.",
    avatar: "AM",
    project: "Дом 'СЕМЕЙНЫЙ' 120 м²"
  },
  {
    id: 2,
    name: "Марина Петрова",
    location: "Ялта", 
    date: "Ноябрь 2024",
    rating: 5,
    text: "Очень довольны результатом! Ипотеку оформили быстро, всю документацию подготовили сами. Дом получился именно таким, как мы мечтали. Рекомендуем РеноваЮг всем друзьям!",
    avatar: "МП",
    project: "Дом 'КОМФОРТ' 150 м²"
  },
  {
    id: 3,
    name: "Игорь Сидоров",
    location: "Симферополь",
    date: "Октябрь 2024", 
    rating: 5,
    text: "Профессиональный подход на всех этапах. От выбора участка до сдачи дома под ключ - все организовано четко. Качество материалов и работ превзошло ожидания.",
    avatar: "ИС",
    project: "Дом 'ПРЕМИУМ' 200 м²"
  },
  {
    id: 4,
    name: "Елена Козлова",
    location: "Евпатория",
    date: "Сентябрь 2024",
    rating: 5,
    text: "Спасибо за наш уютный дом! Особенно ценим индивидуальный подход и готовность учесть все наши пожелания. Веб-камеры на стройке - это просто находка для тех, кто не может часто приезжать.",
    avatar: "ЕК",
    project: "Дом 'ЭКОНОМ' 90 м²"
  }
];

const videoReviews = [
  {
    id: 1,
    name: "Семья Петренко",
    location: "Керчь",
    thumbnail: "/assets/hero-house-family.jpg",
    duration: "3:24",
    project: "Дом 'КЛАССИК' 135 м²"
  },
  {
    id: 2,
    name: "Андрей Волков",
    location: "Феодосия", 
    thumbnail: "/assets/hero-house.jpg",
    duration: "2:15",
    project: "Дом 'МОДЕРН' 180 м²"
  }
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-accent via-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Отзывы <span className="text-primary">наших клиентов</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              За время работы мы построили более 150 домов и заслужили доверие сотен семей. 
              Читайте честные отзывы наших клиентов о качестве работы и сервисе.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Построенных домов</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">98%</div>
              <div className="text-muted-foreground">Довольных клиентов</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.9</div>
              <div className="text-muted-foreground">Средняя оценка</div>
              <div className="flex justify-center mt-2">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">8</div>
              <div className="text-muted-foreground">Лет опыта</div>
            </Card>
          </div>

          {/* Text Reviews */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Письменные отзывы
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {textReviews.map((review) => (
                <Card key={review.id} className="p-6 hover:shadow-brand transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-4">
                    <Avatar className="bg-primary text-primary-foreground">
                      {review.avatar}
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-foreground">{review.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          <MapPin className="w-3 h-3 mr-1" />
                          {review.location}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {review.date}
                        </span>
                        <div className="flex">
                          {[1,2,3,4,5].map((star) => (
                            <Star 
                              key={star} 
                              className={`w-3 h-3 ${star <= review.rating ? 'fill-secondary text-secondary' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Badge className="bg-accent text-accent-foreground text-xs">
                      {review.project}
                    </Badge>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <p className="text-muted-foreground leading-relaxed pl-6">
                      {review.text}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Video Reviews */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Видео отзывы
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoReviews.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-brand transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={`Видео отзыв ${video.name}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Button size="lg" className="rounded-full">
                        <Play className="w-6 h-6 mr-2" />
                        Смотреть
                      </Button>
                    </div>
                    <Badge className="absolute bottom-4 right-4 bg-black/70 text-white">
                      {video.duration}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{video.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {video.location}
                      </span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {video.project}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Live Camera Feature */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              Круглосуточное наблюдение за строительством
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Уникальная возможность следить за ходом строительства вашего дома в режиме реального времени 
              через веб-камеры, установленные на объекте
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="bg-white text-primary hover:bg-white/90">
                <Play className="w-4 h-4 mr-2" />
                Посмотреть камеры
              </Button>
              <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                Узнать подробнее
              </Button>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Готовы оставить свой отзыв?
            </h3>
            <p className="text-muted-foreground mb-6">
              Начните строительство дома мечты уже сегодня
            </p>
            <Button size="lg" className="bg-gradient-to-r from-secondary to-secondary-light">
              Заказать консультацию
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;