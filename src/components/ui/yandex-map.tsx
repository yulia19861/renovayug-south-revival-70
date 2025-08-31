import React, { useEffect, useRef } from 'react';

interface Location {
  name: string;
  address: string;
  coordinates: [number, number];
  count: number;
}

const YandexMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  const locations: Location[] = [
    {
      name: "ТСН Планер 2",
      address: "г. Севастополь, ТСН Планер 2",
      coordinates: [44.616, 33.525], // Требуется точный адрес
      count: 10
    },
    {
      name: "ТСН Афганец",
      address: "г. Севастополь, Гагаринский район, ТСН Афганец д. 133",
      coordinates: [44.588, 33.458], // Гагаринский район
      count: 17
    },
    {
      name: "ТСН Милосердие",
      address: "г. Севастополь, ТСН Милосердие",
      coordinates: [44.610, 33.540], // Требуется точный адрес
      count: 6
    },
    {
      name: "ТСН Поиск",
      address: "г. Севастополь, ТСН Поиск",
      coordinates: [44.595, 33.495], // Требуется точный адрес
      count: 4
    },
    {
      name: "ТСН Царское Село",
      address: "г. Севастополь, ТСН Царское Село",
      coordinates: [44.605, 33.515], // Требуется точный адрес
      count: 3
    },
    {
      name: "Орловка, Полюшко",
      address: "пос. Орловка, Полюшко",
      coordinates: [44.690, 33.365], // пос. Орловка
      count: 1
    }
  ];

  useEffect(() => {
    const loadYandexMaps = () => {
      if (window.ymaps) {
        initMap();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU';
      script.onload = () => {
        window.ymaps.ready(initMap);
      };
      document.head.appendChild(script);
    };

    const initMap = () => {
      if (!mapRef.current || !window.ymaps) return;

      const map = new window.ymaps.Map(mapRef.current, {
        center: [44.616, 33.525], // Центр Севастополя
        zoom: 11,
        controls: ['zoomControl', 'fullscreenControl']
      });

      // Добавляем метки для каждой локации
      locations.forEach((location) => {
        // Создаем коллекцию для группировки плейсмарков одной локации
        const collection = new window.ymaps.GeoObjectCollection();
        
        // Добавляем количество плейсмарков согласно count
        for (let i = 0; i < location.count; i++) {
          // Немного смещаем координаты для визуального разделения
          const offsetLat = (Math.random() - 0.5) * 0.008;
          const offsetLng = (Math.random() - 0.5) * 0.008;
          
          const placemark = new window.ymaps.Placemark(
            [
              location.coordinates[0] + offsetLat,
              location.coordinates[1] + offsetLng
            ],
            {
              balloonContent: `<strong>${location.name}</strong><br>${location.address}<br>Дом ${i + 1} из ${location.count}`,
              hintContent: `${location.name} - дом ${i + 1}`
            },
            {
              preset: 'islands#redIcon',
              iconColor: '#ff6b35'
            }
          );
          
          collection.add(placemark);
        }
        
        map.geoObjects.add(collection);
      });

      // Подгоняем масштаб карты под все метки
      map.setBounds(map.geoObjects.getBounds(), {
        checkZoomRange: true,
        zoomMargin: 50
      });
    };

    loadYandexMaps();
  }, []);

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden border-2 border-primary/20">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

// Расширяем типы для window.ymaps
declare global {
  interface Window {
    ymaps: any;
  }
}

export default YandexMap;