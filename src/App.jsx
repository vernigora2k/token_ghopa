import React from "react";
import { motion } from "framer-motion";
import Logo from "./assets/logo_13.png";
import { HeroContainer, HeroTitle, HeroText, RoadmapContainer, RoadmapTitle, RoadmapGrid, RoadmapCard, Section, StepTitle, StepText, LogoImage } from "./styled";

const HeroSection = () => {
  return (
    <HeroContainer>
    <LogoImage src={Logo} alt="GHOPA Logo" />
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', textAlign: 'center', padding: '0 10px' }}
      >
        GHOPA: Твой путь в криптохаос
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
        style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', maxWidth: '90%', textAlign: 'center', padding: '0 10px' }}
      >
        Единственный токен, который обещает не расти и всегда оставаться в жопе. Настоящая анти-инвестиция!
      </motion.p>
    </HeroContainer>
  );
};

const Roadmap = () => {
  const items = [
    { title: "📉 100% Анти-рост", text: "GHOPA гарантированно не растёт. Чем ниже курс, тем выше статус! Это философия жизни." },
    { title: "🤝 Коллаборация с GAVNO", text: "Мы планируем заключить партнёрство с GAVNO — в будущем можно будет обменивать 💩 на ЖОПУ. Первая токсичная ликвидность в мире крипты!" },
    { title: "🎉 Абсурдные акции", text: "Мы раздаём GHOPA случайным людям, которые даже не подозревают об этом!" },
    { title: "🛑 Фиксированный баг", text: "В коде GHOPA есть баг, который никто не собирается исправлять. Децентрализация абсолютная!" },
    { title: "🤡 NFT 'ЖОПА Года'", text: "Каждый месяц мы награждаем самого преданного холдера NFT-трофеем. Это звучит странно, но ты хочешь его!" },
    { title: "🎭 Массовая рекламная кампания", text: "Мы купим рекламу на заборах, в газетах 90-х и даже разместим 'GHOPA не нужен' на биржах!" },
    { title: "🗑️ Листинг на самых худших биржах", text: "GHOPA будет торговаться там, где найти кнопку 'Продать' невозможно. Ты застрял!" },
    { title: "📢 1000 GHOPA за каждое сообщение в соцсетях", text: "Напиши о GHOPA в соцсетях, пришли скриншот и получи 1000 GHOPA! Чем больше постов, тем больше ЖОПЫ!" },
    { title: "🎮 Разработка GHOPA Mini-Game", text: "Мы работаем над Telegram-игрой, в которой ты сможешь соревноваться за титул Короля ЖОПЫ! Жди, скоро будем тестировать." }
  ];

  return (
    <RoadmapContainer>
      <RoadmapTitle style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center' }}>📌 Родмап GHOPA</RoadmapTitle>
      <RoadmapGrid>
        {items.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
            <RoadmapCard style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', padding: '20px' }}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </RoadmapCard>
          </motion.div>
        ))}
      </RoadmapGrid>
    </RoadmapContainer>
  );
};

const HowToBuy = () => {
  return (
    <Section>
      <StepTitle>Как купить GHOPA?</StepTitle>
      <StepText>1️⃣ Открой <a href="https://t.me/Blum" target="_blank" rel="noopener noreferrer" className="white-link">Blum Memepad</a> и подключи свой кошелёк.</StepText>
      <StepText>2️⃣ Найди GHOPA в списке токенов.</StepText>
      <StepText>3️⃣ Выбери сумму и нажми 'Купить'.</StepText>
      <StepText>4️⃣ Поздравляем, ты теперь владеешь токеном GHOPA!</StepText>
    </Section>
  );
};

const HowToGetTokens = () => {
  return (
    <Section>
      <StepTitle>Как получить GHOPA бесплатно?</StepTitle>
      <StepText>1️⃣ Сделай пост о GHOPA в одной из соцсетей: Twitter, Telegram-группах, Facebook, TikTok и других.</StepText>
      <StepText>2️⃣ Пришли скриншот своих постов и сообщений на наш официальный почтовый адрес: <strong>ghopa.token@gmail.com</strong>.</StepText>
      <StepText>3️⃣ После проверки тебе начислят 1000 GHOPA за каждый скриншот на твой кошелёк.</StepText>
      <StepText>4️⃣ Чем больше постов, тем больше GHOPA ты получишь!</StepText>
    </Section>
  );
};

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', background: '#111', color: '#fff' }}>
      <p>© 2025 GHOPA. Все права защищены (надеемся). Если что-то пошло не так — это и было задумано! 💩</p>
      <p>📢 Официальный канал в Telegram: <a href="https://t.me/ghopa_token" target="_blank" rel="noopener noreferrer" className="white-link">t.me/ghopa_token</a></p>
      <p>✉️ Связаться с нами: <a href="mailto:ghopa.token@gmail.com" className="white-link">ghopa.token@gmail.com</a></p>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <HeroSection />
      <Roadmap />
      <HowToBuy />
      <HowToGetTokens />
      <Footer />
    </div>
  );
};

export default App;
