import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Building2,
  Calculator
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacts" className="py-16 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary mb-4">
            <Building2 className="w-4 h-4 mr-2" />
            Контакты
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом — мы ответим на все вопросы и подготовим индивидуальное предложение
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Наши контакты
              </h3>
              
              <div className="space-y-4">
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">Телефон</h4>
                        <a 
                          href="tel:+79784447064" 
                          className="text-lg font-bold text-primary hover:text-primary-light transition-colors"
                        >
                          +7 (978) 444-70-64
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Звоните в любое время</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-secondary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <MessageSquare className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-3">Мессенджеры</h4>
                        <div className="space-y-3">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="w-full justify-start border-secondary text-secondary hover:bg-secondary hover:text-white"
                            onClick={() => window.open('https://api.whatsapp.com/send/?phone=79784447064&text&type=phone_number&app_absent=0', '_blank')}
                          >
                            <MessageSquare className="w-4 h-4 mr-2" />
                            WhatsApp
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-white"
                            onClick={() => window.open('https://t.me/renovaug', '_blank')}
                          >
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Telegram
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="w-full justify-start border-secondary text-secondary hover:bg-secondary hover:text-white"
                            onClick={() => window.open('https://max.ru/renovaug', '_blank')}
                          >
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Max
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-3">Быстрые ответы в любом удобном мессенджере</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">Режим работы</h4>
                        <p className="text-foreground font-medium">Пн-Вс: 08:00 - 20:00</p>
                        <p className="text-sm text-muted-foreground mt-1">Без выходных и праздников</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-secondary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">География работы</h4>
                        <p className="text-foreground">Севастополь</p>
                        <p className="text-sm text-muted-foreground mt-1">Выезд на объект</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      Получите бесплатную консультацию
                    </h3>
                    <p className="text-muted-foreground">
                      Обсудим ваш проект, рассчитаем стоимость и сроки строительства
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary to-primary-light hover:shadow-brand hover:scale-105 text-white font-semibold transition-all duration-300"
                    >
                      <Calculator className="w-5 h-5 mr-2" />
                      Рассчитать стоимость дома
                    </Button>
                    
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white mb-3"
                      onClick={() => window.open('https://api.whatsapp.com/send/?phone=79784447064&text&type=phone_number&app_absent=0', '_blank')}
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Написать в WhatsApp
                    </Button>

                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white mb-3"
                      onClick={() => window.open('https://t.me/renovaug', '_blank')}
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Написать в Telegram
                    </Button>

                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white"
                      onClick={() => window.open('https://max.ru/renovaug', '_blank')}
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Написать в Max
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 via-background to-primary/5 border-2 border-secondary/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-foreground text-center">
                    Наши гарантии
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-foreground">Строительство в срок</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">Фиксированная стоимость в договоре</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-foreground">Оплата через эскроу-счёт</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;