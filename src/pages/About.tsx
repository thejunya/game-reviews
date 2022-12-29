import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row, Container, CardImg } from "reactstrap";
import background from "../assets/images/backgrounds/home-background.gif";
import { sergey, daniil, kirill, madi } from "../assets/images";
import { IPersonCard } from "../interfaces/IPersonCard";

const people: IPersonCard[] = [
  {
    title: "Сергей Кухарев",
    subtitle: "3бАСУ1",
    text: "Фронтэнд разработчик",
    link: "https://vk.com/osergeyk",
    image: sergey,
  },
  {
    title: "Даниил Тонких",
    subtitle: "3бАСУ1",
    text: "Фронтэнд разработчик",
    link: "https://vk.com/wildchair",
    image: daniil,
  },
  {
    title: "Кирилл Плетминцев",
    subtitle: "3бАСУ1",
    text: "Фронтэнд разработчик",
    link: "https://vk.com/kirillsanta",
    image: kirill,
  },
];

function About() {
  return (
    <div
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}>
      <Container className="pt-5">
        <Row>
          {people.map(person => (
            <Col className="mb-5">
              <Card
                className="mx-auto"
                style={{
                  width: "18rem",
                }}>
                <img alt="Sample" src={person.image} />
                <CardBody>
                  <CardTitle tag="h5">{person.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {person.subtitle}
                  </CardSubtitle>
                  <CardText>Фронтэнд разработчик</CardText>
                  <Button type="button" href={person.link}>
                    VK страница
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="pb-5">
        <Card className="my-2">
          <CardImg alt="Card image cap" src={madi} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Университет МАДИ</CardTitle>
            <CardText>
              Мы студенты 3-го курса, учимся в Московсков автомобильно-дорожном государственном техническом университете
              (МАДИ). Данный сайт был написан при помощи фреймворка React JS, в связке с дополнительным фреймворком
              стилизации Reactstrap.
            </CardText>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default About;
