import { Header, Main, MainCarousel, MainTitle, MainText, MainSystemRequirements } from "../components";
import { IHeader, IMainCarouselItem } from "../interfaces";
import {
  gta_5_header_background as headerBackground,
  gta_5_main_background as mainBackground,
  gta_5_item_1,
  gta_5_item_2,
  gta_5_item_3,
  gta_5_item_4,
  gta_5_item_5,
  gta_5_item_6,
} from "../assets/";

function GrandTheftAuto() {
  const headerProps: IHeader = {
    background: headerBackground,
    title: "Теперь доступно для PS5 и Xbox Series X/S",
    description: "Испытайте развлекательные блокбастеры, Grand Theft Auto V и Grand Theft Auto Online.",
    websiteLink: "https://www.rockstargames.com/gta-v",
    trailerLink: "https://www.youtube.com/watch?v=QkkoHAzjnUs&t=1s",
  };

  const itemsFirst: IMainCarouselItem[] = [
    {
      key: 1,
      src: gta_5_item_1,
    },
    {
      key: 2,
      src: gta_5_item_2,
    },
    {
      key: 3,
      src: gta_5_item_3,
    },
  ];

  const itemsSecond: IMainCarouselItem[] = [
    {
      key: 1,
      src: gta_5_item_4,
    },
    {
      key: 2,
      src: gta_5_item_5,
    },
    {
      key: 3,
      src: gta_5_item_6,
    },
  ];

  return (
    <>
      <Header {...headerProps} />

      <Main background={mainBackground}>
        <MainTitle color="light">ИНФОРМАЦИЯ ДЛЯ ПОЛЬЗОВАТЕЛЕЙ</MainTitle>

        <MainCarousel items={itemsFirst}>
          <MainText size={5} color="danger">
            ПОТРЯСАЮЩИЕ ВИЗУАЛЬНЫЕ ЭФФЕКТЫ
          </MainText>
          <MainText size={6} color="light">
            Улучшенные уровни точности и производительности благодаря новым графическим режимам с разрешением до 4K, до
            60 кадров в секунду, опциями HDR, трассировкой лучей, улучшенными качествами текстур и многим другим.
          </MainText>
        </MainCarousel>

        <MainCarousel items={itemsSecond}>
          <MainText size={5} color="danger">
            GRAND THEFT AUTO ONLINE
          </MainText>
          <MainText size={6} color="light">
            Почувствуйте новые уровни ощущения в режиме Мультиплеера GTA ONLINE. Различные и интересные миссии от
            привычных вам героев, гонка за улучшениями персонажа и его полная персонализация, новый меню дизайн, а также
            эксклюзивный контент, который вы встретите только в режиме ONLINE.
          </MainText>
        </MainCarousel>

        <MainSystemRequirements />
      </Main>
    </>
  );
}

export default GrandTheftAuto;
