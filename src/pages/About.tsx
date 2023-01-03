import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row, Container, CardImg } from "reactstrap";
import { home_background as background, sergey, daniil, kirill, madi } from "../assets";
import { IPersonCard } from "../interfaces/IPersonCard";

function About() {
  const personCards: IPersonCard[] = [
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

  const backgroundStyles = {
    backgroundImage: "url(" + background + ")",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };

  const cardStyles = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "20rem",
  };

  return (
    <div className="py-5" style={backgroundStyles}>
      <Container>
        <Row>
          {personCards.map(personCard => (
            <Col className="mb-5">
              <Card style={cardStyles}>
                <CardImg top width="100%" alt="Sample" src={personCard.image} />
                <CardBody>
                  <CardTitle tag="h5">{personCard.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {personCard.subtitle}
                  </CardSubtitle>
                  <CardText>Фронтэнд разработчик</CardText>
                  <Button type="button" color="danger" href={personCard.link}>
                    VK страница
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
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
