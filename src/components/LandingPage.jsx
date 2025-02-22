import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <header className="hero">
        <h1>GHOPA: Токен для тех, кто устал верить в крипту</h1>
        <p>Единственный токен, который обещает не расти и всегда находиться в жопе. Инвестируй без надежды!</p>
        <button className="buy-button">Купить GHOPA</button>
      </header>

      <section className="roadmap">
        <h2>📌 Родмап GHOPA</h2>
        <ul>
          <li>💩 Раздача 60% эмиссии</li>
          <li>🤝 Коллаборация с GAVNO</li>
          <li>📉 100% Анти-рост</li>
          <li>🛑 Фиксированный баг</li>
          <li>🎉 Абсурдные акции</li>
          <li>🤡 NFT "ЖОПА Года"</li>
          <li>🎭 Массовая рекламная кампания</li>
          <li>🗑️ Листинг на самых худших биржах</li>
          <li>📢 1000 GHOPA за каждое сообщение о токене в соцсетях!</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2025 GHOPA | Токен для истинных ценителей крипты.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
