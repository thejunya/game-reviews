import { Header, Main, MainCarousel, MainTitle, MainSystemRequirements } from "../components";
import { IHeader } from "../interfaces/IHeader";
import { IMainCarouselItem } from "../interfaces/IMain";
import { gta5Item1, gta5Item2, gta5Item3, gta5Item4, gta5Item5, gta5Item6 } from "../assets/images";

import background from "../assets/images/backgrounds/gta-5-background.jpeg";
import { MainText, MainTopic } from "../components/Main";

const header: IHeader = {
  background: background,
  title: "Теперь доступно для PS5 и Xbox Series X/S",
  description: "Испытайте развлекательные блокбастеры, Grand Theft Auto V и Grand Theft Auto Online.",
  websiteLink: "https://www.rockstargames.com/gta-v",
  trailerLink: "https://www.youtube.com/watch?v=QkkoHAzjnUs&t=1s",
};

const itemsFirst: IMainCarouselItem[] = [
  {
    key: 1,
    src: gta5Item1,
  },
  {
    key: 2,
    src: gta5Item2,
  },
  {
    key: 3,
    src: gta5Item3,
  },
];

const itemsSecond: IMainCarouselItem[] = [
  {
    key: 1,
    src: gta5Item4,
  },
  {
    key: 2,
    src: gta5Item5,
  },
  {
    key: 3,
    src: gta5Item6,
  },
];

function GrandTheftAuto() {
  return (
    <>
      <Header {...header} />

      <Main background={background}>
        <MainTitle>ИНФОРМАЦИЯ ДЛЯ ПОЛЬЗОВАТЕЛЕЙ</MainTitle>

        <MainCarousel items={itemsFirst}>
          <MainTopic>ПОТРЯСАЮЩИЕ ВИЗУАЛЬНЫЕ ЭФФЕКТЫ</MainTopic>
          <MainText>
            Улучшенные уровни точности и производительности благодаря новым графическим режимам с разрешением до 4K, до
            60 кадров в секунду, опциями HDR, трассировкой лучей, улучшенными качествами текстур и многим другим.
          </MainText>
        </MainCarousel>

        <MainCarousel items={itemsSecond}>
          <MainTopic>GRAND THEFT AUTO ONLINE</MainTopic>
          <MainText>
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
