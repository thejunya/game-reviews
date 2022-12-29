import { Container, Card, CardBody, CardImg, CardTitle, CardText, Button } from "reactstrap";
import { Fade } from "react-awesome-reveal";
import { codmwCard, gta5Card, rainbow6Card } from "../assets/images/";
import { IPages } from "../interfaces/IPages";
import background from "../assets/images/backgrounds/home-background.gif";

const pages: IPages[] = [
  {
    image: codmwCard,
    title: "Call of Duty II: Modern Warfare (2022)",
    description:
      "Компьютерная игра в жанре шутера от первого лица, разработанная компанией Infinity Ward, издателем игры выступила Activision. Это сиквел Call of Duty: Modern Warfare 2019 года, а также девятнадцатая часть в серии. Игра выпущена 28 октября 2022 года для персональных компьютеров, PlayStation 4, Xbox One, PlayStation 5 и Xbox Series X/S.",
    publishedOn: "01.01.2022",
    route: "/call-of-duty-modern-warfare-2/",
  },
  {
    image: gta5Card,
    title: "Grand Theft Auto: V",
    description:
      "Мультиплатформенная компьютерная игра в жанре action-adventure с открытым миром, разработанная компанией Rockstar North и изданная компанией Rockstar Games. Изначально игра была выпущена для игровых консолей PlayStation 3 и Xbox 360 в 2013 году, в 2014 году переиздана для PlayStation 4 и Xbox One, в 2015 году для Windows и в 2022 году для PlayStation 5 и Xbox Series X/S. Является пятнадцатой по счёту игрой серии Grand Theft Auto и следующей крупной игрой после Grand Theft Auto IV, выпущенной в 2008 году. В России и СНГ издателем Grand Theft Auto V выступает компания 1С-СофтКлаб.",
    publishedOn: "01.01.2022",
    route: "/grand-theft-auto-5/",
  },
  {
    image: rainbow6Card,
    title: "Tom Clancy's Rainbow Six: Siege",
    description:
      "Тактический шутер от первого лица, разработанный Ubisoft для Windows, Xbox One и PlayStation 4. Игра была анонсирована Ubisoft 9 июня 2014 года на E3 и выпущена 1 декабря 2015 года, а ровно через пять лет, 1 декабря 2020 года, игра вышла для PlayStation 5 и Xbox Series X/S. Проект стал преемником закрытого Patriots. В геймплее сделан упор на разрушаемость окружающей обстановки и тактическое взаимодействие игроков.",
    publishedOn: "01.01.2022",
    route: "/tom-clancys-rainbow-six-siege/",
  },
];

function Home() {
  return (
    <div
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}>
      <Container className="py-5" style={{ maxWidth: "1024px" }}>
        <Fade delay={500} triggerOnce={true}>
          {pages.map((page, idx) => (
            <Card className="mb-5" key={idx}>
              <CardImg alt="Card image cap" src={page.image} top />
              <CardBody>
                <CardTitle tag="h1">{page.title}</CardTitle>
                <CardText tag="h5">{page.description}</CardText>
                <CardText tag="small" className="text-muted">
                  Статья выложена: {page.publishedOn}
                </CardText>
              </CardBody>
              <Button type="button" color="danger" href={page.route} size="lg">
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
