import { Container, Card, CardBody, CardImg, CardTitle, CardText, Button } from "reactstrap";
import { Fade } from "react-awesome-reveal";
import { home_background as background, cod_mw_2_card, gta_5_card, rainbow_6_siege_card } from "../assets/";
import { IGameCard } from "../interfaces/";

const gameCards: IGameCard[] = [
  {
    image: cod_mw_2_card,
    title: "Call of Duty II: Modern Warfare (2022)",
    description:
      "Компьютерная игра в жанре шутера от первого лица, разработанная компанией Infinity Ward, издателем игры выступила Activision. Это сиквел Call of Duty: Modern Warfare 2019 года, а также девятнадцатая часть в серии. Игра выпущена 28 октября 2022 года для персональных компьютеров, PlayStation 4, Xbox One, PlayStation 5 и Xbox Series X/S.",
    publishedOn: "01.01.2022",
    route: "/call-of-duty-modern-warfare-2/",
  },
  {
    image: gta_5_card,
    title: "Grand Theft Auto: V",
    description:
      "Мультиплатформенная компьютерная игра в жанре action-adventure с открытым миром, разработанная компанией Rockstar North и изданная компанией Rockstar Games. Изначально игра была выпущена для игровых консолей PlayStation 3 и Xbox 360 в 2013 году, в 2014 году переиздана для PlayStation 4 и Xbox One, в 2015 году для Windows и в 2022 году для PlayStation 5 и Xbox Series X/S. Является пятнадцатой по счёту игрой серии Grand Theft Auto и следующей крупной игрой после Grand Theft Auto IV, выпущенной в 2008 году. В России и СНГ издателем Grand Theft Auto V выступает компания 1С-СофтКлаб.",
    publishedOn: "01.01.2022",
    route: "/grand-theft-auto-5/",
  },
  {
    image: rainbow_6_siege_card,
    title: "Tom Clancy's Rainbow Six: Siege",
    description:
      "Тактический шутер от первого лица, разработанный Ubisoft для Windows, Xbox One и PlayStation 4. Игра была анонсирована Ubisoft 9 июня 2014 года на E3 и выпущена 1 декабря 2015 года, а ровно через пять лет, 1 декабря 2020 года, игра вышла для PlayStation 5 и Xbox Series X/S. Проект стал преемником закрытого Patriots. В геймплее сделан упор на разрушаемость окружающей обстановки и тактическое взаимодействие игроков.",
    publishedOn: "01.01.2022",
    route: "/tom-clancys-rainbow-six-siege/",
  },
];

const styles = {
  backgroundImage: "url(" + background + ")",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
};

function Home() {
  return (
    <div style={styles}>
      <Container className="py-5" style={{ maxWidth: "1024px" }}>
        <Fade delay={500} triggerOnce={true}>
          {gameCards.map((gameCard, idx) => (
            <Card className="mb-5" key={idx}>
              <CardImg alt="Card image" src={gameCard.image} top />
              <CardBody>
                <CardTitle tag="h1">{gameCard.title}</CardTitle>
                <CardText tag="h5">{gameCard.description}</CardText>
                <CardText tag="small" className="text-muted">
                  Статья выложена: {gameCard.publishedOn}
                </CardText>
              </CardBody>
              <Button type="button" color="danger" href={gameCard.route} size="lg">
                Перейти к статье
              </Button>
            </Card>
          ))}
        </Fade>
      </Container>
    </div>
  );
}

export default Home;
