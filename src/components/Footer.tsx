import { Col, Container, Row } from "reactstrap";
import { IoLogoReact } from "react-icons/io5";
import { IFooterCopyright, IFooterLink, IFooterTitle } from "../interfaces/IFooter";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-danger text-light">
      <Container className="text-center text-md-start pt-1">
        <Row className="mt-3">
          <Col lg md className="mx-auto mb-sm-4 text-center">
            <FooterTitle>Группа: 3бАСУ</FooterTitle>
            <FooterTitle>Факультет: Управления</FooterTitle>
          </Col>
          <Col lg md className="mx-auto mb-sm-4 text-center">
            <FooterTitle>Фреймворки</FooterTitle>
            <FooterLink text="React" link="https://reactjs.org/">
              <IoLogoReact size={40} />
            </FooterLink>

            <FooterLink text="Reactstrap" link="https://reactstrap.github.io/">
              <IoLogoReact size={40} />
            </FooterLink>
          </Col>
        </Row>
      </Container>

      <FooterCopyright year={2022} websiteName="MADI.RU" link="https://www.madi.ru/" />
    </footer>
  );
}

function FooterLink({ text, children, link }: IFooterLink) {
  return (
    <Row>
      <p className="text-info fs-4">
        {text}{" "}
        <a href={link} target="_blank" rel="noreferrer" className="text-info">
          {children}
        </a>
      </p>
    </Row>
  );
}

function FooterTitle({ children }: IFooterTitle) {
  return (
    <Row>
      <p className="fs-4 fw-light">{children}</p>
    </Row>
  );
}

function FooterCopyright({ year, websiteName, link }: IFooterCopyright) {
  return (
    <div className="text-center py-2">
      <p className="fs-6">
        © {year} Copyright:{" "}
        <a className="text-reset fw-bold" href={link}>
          {websiteName}
        </a>
      </p>
    </div>
  );
}
