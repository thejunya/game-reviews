import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function NavbarSection(args: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar {...args}>
      <NavbarBrand href="/">Game Articles</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/">Главная</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about/">О нас</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Ссылки
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem href="https://github.com/">Github</DropdownItem>
              <DropdownItem href="https://vercel.com/">Vercel</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Закрыть</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>Проект студентов МАДИ</NavbarText>
      </Collapse>
    </Navbar>
  );
}

export default NavbarSection;
