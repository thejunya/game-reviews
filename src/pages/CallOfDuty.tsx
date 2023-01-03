import { Header, Main, MainCarousel, MainTitle, MainText, MainSystemRequirements } from "../components";
import { IHeader, IMainCarouselItem } from "../interfaces";
import {
  cod_mw_2_header_background as headerBackground,
  cod_mw_2_main_background as mainBackground,
  cod_mw_2_item_1,
  cod_mw_2_item_2,
  cod_mw_2_item_3,
  cod_mw_2_item_4,
  cod_mw_2_item_5,
  cod_mw_2_item_6,
} from "../assets/";

function CallOfDuty() {
  const headerProps: IHeader = {
    background: headerBackground,
    title: "Самый популярный шутер 2022 года",
    description: "Примите участие в борьбе за первенство Vanguard или обуздайте SinglePlayer.",
    websiteLink: "https://www.callofduty.com/ru/modernwarfare2/pc",
    trailerLink: "https://www.callofduty.com/ru/modernwarfare2/pc",
  };

  const itemsFirst: IMainCarouselItem[] = [
    {
      key: 1,
      src: cod_mw_2_item_1,
    },
    {
      key: 2,
      src: cod_mw_2_item_2,
    },
    {
      key: 3,
      src: cod_mw_2_item_3,
    },
  ];

  const itemsSecond: IMainCarouselItem[] = [
    {
      key: 1,
      src: cod_mw_2_item_4,
    },
    {
      key: 2,
      src: cod_mw_2_item_5,
    },
    {
      key: 3,
      src: cod_mw_2_item_6,
    },
  ];

  return (
    <>
      <Header {...headerProps} />

      <Main background={mainBackground}>
        <MainTitle color="light">ИНФОРМАЦИЯ ДЛЯ ПОЛЬЗОВАТЕЛЕЙ</MainTitle>

        <MainCarousel items={itemsFirst}>
          <MainText size={5} color="danger">
            ШИРОКИЕ ВОЗМОЖНОСТИ ПЕРСОНАЛИЗАЦИИ
          </MainText>
          <MainText size={6} color="light">
            В версии Modern Warfare II для ПК можно будет настроить более 500 отдельных параметров - от назначений
            клавиш и поддержки геймпадов до тонкой регулировки графики, звука и интерфейса. Вдобавок, для улучшения
            обзора вы сможете использовать как несколько экранов, так и один, но широкоформатный.
          </MainText>
        </MainCarousel>

        <MainCarousel items={itemsSecond}>
          <MainText size={5} color="danger">
            ЗАЩИЩЕНО RICOCHET ANTI-CHEAT
          </MainText>
          <MainText size={6} color="light">
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

export default CallOfDuty;
