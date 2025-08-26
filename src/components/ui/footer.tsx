import React from "react";
import { Phone, MessageSquare, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-primary-light text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/9a1f223a-53ea-4efd-a5d5-58b13d6a96a6.png" 
                alt="РеноваЮг" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Надёжное строительство домов в Крыму. Более 150 реализованных объектов.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Услуги</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li><a href="#" className="hover:text-white transition-colors">Строительство домов</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Подбор земельного участка</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Готовые дома</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Экскурсии на объекты</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ипотечное оформление</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Сдача под ключ</a></li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Информация</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Каталог проектов</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы клиентов</a></li>
              <li><a href="#mortgage" className="hover:text-white transition-colors">Ипотечные программы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Контакты</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white/80" />
                <a href="tel:+79784447064" className="text-white/90 hover:text-white transition-colors">
                  +7 (978) 444-70-64
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-white/80" />
                <span className="text-white/90">г. Севастополь, Крым</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-white/80" />
                <span className="text-white/90">Пн-Вс: 08:00 - 20:00</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-4 h-4 text-white/80" />
                <div className="flex space-x-4">
                  <a 
                    href="https://api.whatsapp.com/send/?phone=79784447064&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a 
                    href="https://t.me/renovaug"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    Telegram
                  </a>
                  <a 
                    href="https://max.ru/renovaug"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    Max
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/80">
              © 2016-2025 РеноваЮг. Все права защищены.
            </div>
            
            <div className="flex space-x-6 text-sm text-white/80">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-white/60">
              Аккредитованный застройщик Сбербанк, ВТБ, Дом.РФ в Крыму
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;