import { useState } from "react";
import { Container, Nav, NavItem, NavLink, UncontrolledCarousel } from "reactstrap";
import { Fade } from "react-awesome-reveal";
import { IMain, IMainText, IMainCarousel, IMainTitle } from "../interfaces/";
import { Minimum, Competitive, Recommended, Ultra4K } from ".";

export function Main({ children, background }: IMain) {
  const mainStyles = {
    backgroundImage: "url(" + background + ")",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };

  return <main style={mainStyles}>{children}</main>;
}

export function MainTitle({ children, color }: IMainTitle) {
  return (
    <Container className="py-4">
      <Fade delay={500} triggerOnce={true}>
        <p className={`display-1 text-${color} text-center`}>{children}</p>
      </Fade>
    </Container>
  );
}

export function MainText({ children, size, color }: IMainText) {
  return (
    <Fade delay={500} triggerOnce={true}>
      <p className={`display-${size} text-${color}`}>{children}</p>
    </Fade>
  );
}

export function MainCarousel({ children, items }: IMainCarousel) {
  return (
    <Container className="py-4">
      {children}
      <Fade delay={750} triggerOnce={true}>
        <UncontrolledCarousel items={items} />
      </Fade>
    </Container>
  );
}

export function MainSystemRequirements() {
  const [flag, setFlag] = useState(1);
  return (
    <Container className="py-4">
      <Nav className="mb-5" justified fill tabs vertical={window.innerWidth <= 992 ? true : false}>
        <NavItem>
          <NavLink href="#" active={flag === 1} onClick={() => setFlag(1)}>
            Минимальные требования
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" active={flag === 2} onClick={() => setFlag(2)}>
            Рекомендуемая конфигурация
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" active={flag === 3} onClick={() => setFlag(3)}>
            Мультиплеер
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" active={flag === 4} onClick={() => setFlag(4)}>
            Ультра 4К
          </NavLink>
        </NavItem>
      </Nav>
      {(flag === 1 && <Minimum />) ||
        (flag === 2 && <Recommended />) ||
        (flag === 3 && <Competitive />) ||
        (flag === 4 && <Ultra4K />)}
    </Container>
  );
}
