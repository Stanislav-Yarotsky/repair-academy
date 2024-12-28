import "./Hero.scss";
function Hero({ isPromoActive }) {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">
              РАЗРАБОТКА ДИЗАЙН-ПРОЕКТА И РЕАЛИЗАЦИЯ{" "}
              <span className="highlight">КАК НА КАРТИНКЕ</span>
            </h1>
            <p className="hero__description">
              Получайте удовольствие, пока профессионалы «Академии ремонта»
              преображают ваше жильё
            </p>
            <div className="hero__buttons">
              <button className="button button--default">
                ЗАПОЛНИТЬ ЗАЯВКУ →
              </button>
              {isPromoActive && (
                <button className="button button--transparent">
                  ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
                </button>
              )}
            </div>
          </div>
          <div className="hero__footer">
            <p>
              Возвращаем 100% стоимости разработки дизайна через бонусную
              программу
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
