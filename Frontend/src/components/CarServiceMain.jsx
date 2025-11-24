import React from 'react';

// 🚗 Дефинирање на 6-те Автомобилски Услуги (Македонски текст)
const carServices = [
  {
    id: 1,
    title: 'Комплетна Дијагностика',
    description: 'Сеопфатна електронска и механичка проверка за прецизно утврдување на сите проблеми.',
    img: 'https://www.transmico.com/wp-content/uploads/diagnostic-auto-opt-scaled.jpg', 
  },
  {
    id: 2,
    title: 'Сервис на Моторно Масло',
    description: 'Брза и професионална замена на синтетичко масло со дополнителна проверка на сите течности.',
    img: 'https://ap.boschcarservice.com/in/media/images/16_9/services/engine_service/job_2770_final-copy_image_640w_360h.webp',
  },
  {
    id: 3,
    title: 'Ревизија на Кочни Систем',
    description: 'Замена на плочки, дискови и течност за сопирање, обезбедувајќи максимални перформанси.',
    img: 'https://www.meineke.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fdkq07unc94tv%2F38UHdasXk9IZEpS5XqdwxW%2Fde319c2ea9898c16b5183ff1f0398b1d%2Fimage.png&w=1920&q=75',
  },
  {
    id: 4,
    title: 'Сервис на Гуми и Балансирање',
    description: 'Ротација, балансирање и прецизно подесување на геометријата за оптимално управување.',
    img: 'https://jasonstyreservices.co.uk/wp-content/uploads/2021/09/WHEEL-ALIGNMENT-hero_74461674.jpg',
  },
  {
    id: 5,
    title: 'Полнење и Поправка на Клима',
    description: 'Тестирање и полнење на фреон, плус поправка на протекувања за максимална ефикасност.',
    img: 'https://www.shutterstock.com/image-photo/repairman-holding-monitor-tool-check-600nw-2279387293.jpg',
  },
  {
    id: 6,
    title: 'Редовно Сервисирање',
    description: 'Сервисирање според упатствата на производителот за 30к, 60к и 90к километри.',
    img: 'https://repairsmith-prod-wordpress.s3.amazonaws.com/2022/11/mechanic-working-on-engine.jpg',
  },
];

/**
 * Главна компонента која ги прикажува сите автомобилски услуги.
 * Користи Tailwind CSS за црно-бело-црвен изглед.
 */
const CarServiceMain = () => {
  // 🎨 Константни Tailwind класи за Црно/Бело/Црвено
  const bgColor = 'bg-gray-900'; // Црна позадина
  const textColor = 'text-white'; // Бел текст
  const cardBg = 'bg-gray-800'; // Потемна сива за картичките
  const accentColor = 'text-red-600'; // Црвен акцент
  const buttonClasses = 'bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition duration-300';
  const cardShadow = 'shadow-xl shadow-black/70'; // Длабока сенка

  const potraga = [
  { title: 'Поправки', url: '/popravki' },
  { title: 'Комплетна Дијагностика', url: '/popravki/1' },
  { title: 'Сервис на Моторно Масло', url: '/popravki/2' },
  { title: 'Ревизија на Кочни Систем', url: '/popravki/3' },
  { title: 'Сервис на Гуми и Баланисирање', url: '/popravki/4' },
  { title: 'Поправка на Клима', url: '/popravki/5' },
  { title: 'Редовно Сервисирање', url: '/popravki/6' },
  { title: 'За нас', url: '#' },
  { title: 'Каде се наоѓаме?', url: '/info' },
  { title: 'Кој сме ние?', url: '/info' },
  { title: 'Контакт 070 292 293📞', url: '#' }
]

  return (
    // Главен контејнер
    <main className={`min-h-screen p-8 transition duration-500 ${bgColor} ${textColor}`}>
      <header className="text-center mb-12">
        <h1 className={`text-4xl md:text-5xl font-extrabold mb-3 ${accentColor}`}>
          Нашите Премиум Авто Услуги
        </h1>
        <p className="text-lg opacity-80">
          Стручна грижа за вашето возило, поддржана со посветеност на квалитет и сигурност.
        </p>
      </header>
      
      {/* Мрежа за распоред на картичките (Grid) */}
      <section 
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {carServices.map((service, e) => (
          
          // Секоја услуга е <article> (картичка)

          <article 
          
            // Комбинација од црна, бела и црвена
            className={`p-6 rounded-xl ${cardBg} ${cardShadow} border-t-4 border-red-600 flex flex-col items-center text-center transition duration-300 hover:scale-[1.02] hover:bg-gray-700/50`} 
            key={service.id}
          >
            {/* Икона */}
            <div className={`text-5xl mb-4 ${accentColor}`} aria-hidden="true">
              <img className='h-[200px]' src={service.img} alt="" />
            </div>
            
            <h3 className={`text-xl font-bold mb-3 ${accentColor}`}>
              {service.title}
            </h3>
            
            <p className="mb-6 text-sm opacity-90">
              {service.description}
            </p>
            
            <button className={buttonClasses} onClick={() => window.location.href = `${potraga[e+1].url}`}>
              Дознај Повеќе
            </button>
          </article>
        ))}
      </section>
    </main>
  );
};

export default CarServiceMain;