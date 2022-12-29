import { Header, Main, MainCarousel, MainTitle, MainSystemRequirements } from "../components";
import { IHeader } from "../interfaces/IHeader";
import { IMainCarouselItem } from "../interfaces/IMain";
import { codmwItem1, codmwItem2, codmwItem3, codmwItem4, codmwItem5, codmwItem6 } from "../assets/images";

import background from "../assets/images/backgrounds/cod-mw-2-background.jpg";
import { MainText, MainTopic } from "../components/Main";

const header: IHeader = {
  background: background,
  title: "Самый популярный шутер 2022 года",
  description: "Примите участие в борьбе за первенство Vanguard или обуздайте SinglePlayer.",
  websiteLink: "https://www.callofduty.com/ru/modernwarfare2/pc",
  trailerLink: "https://www.callofduty.com/ru/modernwarfare2/pc",
};

const itemsFirst: IMainCarouselItem[] = [
  {
    key: 1,
    src: codmwItem1,
  },
  {
    key: 2,
    src: codmwItem2,
  },
  {
    key: 3,
    src: codmwItem3,
  },
];

const itemsSecond: IMainCarouselItem[] = [
  {
    key: 1,
    src: codmwItem4,
  },
  {
    key: 2,
    src: codmwItem5,
  },
  {
    key: 3,
    src: codmwItem6,
  },
];

function CallOfDutyModernWarfare2() {
  return (
    <>
      <Header {...header} />

      <Main background={background}>
        <MainTitle>ИНФОРМАЦИЯ ДЛЯ ПОЛЬЗОВАТЕЛЕЙ</MainTitle>

        <MainCarousel items={itemsFirst}>
          <MainTopic>ШИРОКИЕ ВОЗМОЖНОСТИ ПЕРСОНАЛИЗАЦИИ</MainTopic>
          <MainText>
            В версии Modern Warfare II для ПК можно будет настроить более 500 отдельных параметров - от назначений
            клавиш и поддержки геймпадов до тонкой регулировки графики, звука и интерфейса. Вдобавок, для улучшения
            обзора вы сможете использовать как несколько экранов, так и один, но широкоформатный.
          </MainText>
        </MainCarousel>

        <MainCarousel items={itemsSecond}>
          <MainTopic>ЗАЩИЩЕНО RICOCHET ANTI-CHEAT</MainTopic>
          <MainText>
            Modern Warfare II выйдет с kernel-драйвером на ПК, чтобы предоставить нашей команде больше данных для
            улучшения безопасности. Даже если ваши друзья предпочитают другие платформы, вы сможете играть на PC вместе
            с ними благодаря функциям кроссплатформенной игры, доступным со дня выхода.
          </MainText>
        </MainCarousel>

        <MainSystemRequirements />
      </Main>
    </>
  );
}

export default CallOfDutyModernWarfare2;
