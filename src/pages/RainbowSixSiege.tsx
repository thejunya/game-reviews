import { Header, Main, MainCarousel, MainTitle, MainSystemRequirements } from "../components";
import { MainText, MainTopic } from "../components/Main";
import { IHeader } from "../interfaces/IHeader";
import { IMainCarouselItem } from "../interfaces/IMain";
import {
  rainbow6Item1,
  rainbow6Item2,
  rainbow6Item3,
  rainbow6Item4,
  rainbow6Item5,
  rainbow6Item6,
} from "../assets/images";

import background from "../assets/images/backgrounds/rainbow-6-siege-background.jpg";

const header: IHeader = {
  background: background,
  title: "Тактический шутер от первого лица, в котором вы можете показать свои навыки стрельбы",
  description: "Сразите своих противников в режиме 5x5",
  websiteLink: "https://www.ubisoft.com/ru-ru/game/rainbow-six/siege",
  trailerLink: "https://www.youtube.com/watch?v=jGRK77YQQ4k",
};

const itemsFirst: IMainCarouselItem[] = [
  {
    key: 1,
    src: rainbow6Item1,
  },
  {
    key: 2,
    src: rainbow6Item2,
  },
  {
    key: 3,
    src: rainbow6Item3,
  },
  {
    key: 4,
    src: rainbow6Item4,
  },
  {
    key: 5,
    src: rainbow6Item5,
  },
  {
    key: 6,
    src: rainbow6Item6,
  },
];

function RainbowSixSiege() {
  return (
    <>
      <>
        <Header {...header} />

        <Main background={background}>
          <MainTitle>ИНФОРМАЦИЯ ДЛЯ ПОЛЬЗОВАТЕЛЕЙ</MainTitle>

          <MainCarousel items={itemsFirst}>
            <MainTopic>ОБНОВЛЕННЫЕ ГРАФИЧЕСКИЕ ЭФФЕКТЫ</MainTopic>
            <MainText>
              Игра вышедшая в 2015 году постоянно эволюционирует. Игра не стоит не месте и постоянно модернизирует свою
              графику и геемплей. Улучшенные уровни точности и производительности благодаря новым графическим режимам с
              разрешением до 4K, до 60 кадров в секунду, опциями HDR, трассировкой лучей, улучшенными качествами текстур
              и многим другим.
            </MainText>
          </MainCarousel>

          <MainSystemRequirements />
        </Main>
      </>
    </>
  );
}

export default RainbowSixSiege;
