import { useState } from "react";
import { Container, Nav, NavItem, NavLink, UncontrolledCarousel } from "reactstrap";
import { IMain, IMainText, IMainCarousel } from "../interfaces/IMain";
import { CompetitiveSR, MinimumSR, RecommendedSR, Ultra4KSR } from ".";
import { Fade } from "react-awesome-reveal";

export function Main({ children, background }: IMain) {
  return (
    <main
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}>
      <section style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)" }}>{children}</section>
    </main>
  );
}

export function MainTitle({ children }: IMainText) {
  return (
    <Container className="py-5">
      <Fade delay={500} triggerOnce={true}>
        <p className="display-1 text-light text-center">{children}</p>
      </Fade>
    </Container>
  );
}

export function MainTopic({ children }: IMainText) {
  return (
    <Fade delay={500} triggerOnce={true}>
      <p className="display-5 text-danger">{children}</p>
    </Fade>
  );
}

export function MainText({ children }: IMainText) {
  return (
    <Fade delay={500} triggerOnce={true}>
      <p className="display-6 text-light">{children}</p>
    </Fade>
  );
}

export function MainCarousel({ children, items }: IMainCarousel) {
  return (
    <Container className="pb-5">
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
    <Container className="pb-5">
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
      {(flag === 1 && <MinimumSR />) ||
        (flag === 2 && <RecommendedSR />) ||
        (flag === 3 && <CompetitiveSR />) ||
        (flag === 4 && <Ultra4KSR />)}
    </Container>
  );
}
