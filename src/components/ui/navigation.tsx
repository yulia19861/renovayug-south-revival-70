import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center flex-1 justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <img 
                src="/lovable-uploads/9a1f223a-53ea-4efd-a5d5-58b13d6a96a6.png" 
                alt="РеноваЮг - строим будущее вместе" 
                className="h-20 w-auto max-w-md mx-auto lg:mx-0"
              />
              <p className="text-lg font-semibold text-muted-foreground -mt-1 tracking-wide">
                СТРОИМ БУДУЩЕЕ ВМЕСТЕ
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              ГЛАВНАЯ
            </a>
            <a href="/catalog" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              КАТАЛОГ
            </a>
            <a href="/reviews" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              ОТЗЫВЫ
            </a>
            <a href="/mortgage" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              ИПОТЕКА
            </a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              КОНТАКТЫ
            </a>
            <div className="flex flex-col items-end text-xs ml-8">
              <span className="text-muted-foreground">Пн-Вс: 08:00 - 20:00</span>
              <a href="tel:+79784447064" className="text-primary font-semibold hover:text-primary-light transition-colors">
                +7 (978) 444-70-64
              </a>
            </div>
            <Button variant="secondary" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-lg font-semibold">Меню</h2>
                </div>
                
                <div className="flex flex-col space-y-6">
                  <a 
                    href="#" 
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    ГЛАВНАЯ
                  </a>
                  <a 
                    href="/catalog" 
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    КАТАЛОГ
                  </a>
                  <a 
                    href="/reviews" 
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    ОТЗЫВЫ
                  </a>
                  <a 
                    href="/mortgage" 
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    ИПОТЕКА
                  </a>
                  <a 
                    href="#contacts" 
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    КОНТАКТЫ
                  </a>
                  
                  <div className="border-t pt-6 mt-6">
                    <div className="text-sm text-muted-foreground mb-2">Пн-Вс: 08:00 - 20:00</div>
                    <a href="tel:+79784447064" className="text-primary font-semibold text-lg hover:text-primary-light transition-colors">
                      +7 (978) 444-70-64
                    </a>
                  </div>
                  
                  <Button variant="secondary" className="mt-4">
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;