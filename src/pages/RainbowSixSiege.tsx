import { Header, Main, MainCarousel, MainTitle, MainText, MainSystemRequirements } from "../components";
import { IHeader, IMainCarouselItem } from "../interfaces/";
import {
  rainbow_6_siege_header_background as headerBackground,
  rainbow_6_siege_main_background as mainBackground,
  rainbow_6_siege_item_1,
  rainbow_6_siege_item_2,
  rainbow_6_siege_item_3,
  rainbow_6_siege_item_4,
  rainbow_6_siege_item_5,
  rainbow_6_siege_item_6,
} from "../assets/";

function RainbowSixSiege() {
  const header: IHeader = {
    background: headerBackground,
    title: "Тактический шутер от первого лица, в котором вы можете показать свои навыки стрельбы",
    description: "Сразите своих противников в режиме 5x5",
    websiteLink: "https://www.ubisoft.com/ru-ru/game/rainbow-six/siege",
    trailerLink: "https://www.youtube.com/watch?v=jGRK77YQQ4k",
  };

  const itemsFirst: IMainCarouselItem[] = [
    {
      key: 1,
      src: rainbow_6_siege_item_1,
    },
    {
      key: 2,
      src: rainbow_6_siege_item_2,
    },
    {
      key: 3,
      src: rainbow_6_siege_item_3,
    },
    {
      key: 4,
      src: rainbow_6_siege_item_4,
    },
    {
      key: 5,
      src: rainbow_6_siege_item_5,
    },
    {
      key: 6,
      src: rainbow_6_siege_item_6,
    },
  ];

  return (
    <>
      <Header {...header} />

      <Main background={mainBackground}>
        <MainTitle color="light">ИНФОРМАЦИЯ ДЛЯ ПОЛЬЗОВАТЕЛЕЙ</MainTitle>

        <MainCarousel items={itemsFirst}>
          <MainText size={5} color="danger">
            ОБНОВЛЕННЫЕ ГРАФИЧЕСКИЕ ЭФФЕКТЫ
          </MainText>
          <MainText size={6} color="light">
            Игра вышедшая в 2015 году постоянно эволюционирует. Игра не стоит не месте и постоянно модернизирует свою
            графику и геемплей. Улучшенные уровни точности и производительности благодаря новым графическим режимам с
            разрешением до 4K, до 60 кадров в секунду, опциями HDR, трассировкой лучей, улучшенными качествами текстур и
            многим другим.
          </MainText>
        </MainCarousel>

        <MainSystemRequirements />
      </Main>
    </>
  );
}

export default RainbowSixSiege;
