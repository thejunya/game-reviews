import { Container, Button } from "reactstrap";
import { Fade } from "react-awesome-reveal";
import { IHeader } from "../interfaces/IHeader";

function Header(props: IHeader) {
  return (
    <header
      style={{
        minHeight: "calc(100vh - 56px)",
        backgroundImage: "url(" + props.background + ")",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}>
      <Container className="d-flex align-items-end" style={{ minHeight: "calc(100vh - 56px)" }}>
        <div className="pb-5">
          <Fade direction="up" delay={500} triggerOnce={true}>
            <p className="text-light display-1">{props.title}</p>
            <p className="text-light display-5">{props.description}</p>
            <Button className="my-3" type="button" color="danger" size="lg" href={props.websiteLink}>
              Посетить официальный сайт
            </Button>
            <Button className="my-3" type="button" color="danger" size="lg" href={props.trailerLink}>
              Посмотреть трейлер
            </Button>
          </Fade>
        </div>
      </Container>
    </header>
  );
}

export default Header;
