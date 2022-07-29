import * as React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <Container>
      <NavbarLinks>
        <NavbarLinksLogo>
          <a href="/">Nemi Amin</a>
        </NavbarLinksLogo>
      </NavbarLinks>
      <NavbarLinkContainer>
        <p>
          <a href="/">Home</a>
        </p>
        <p>
          <a href="/">Work</a>
        </p>
        <p>
          <a href="/">About</a>
        </p>
      </NavbarLinkContainer>
      <NavbarHireMe>
        <button>Hire Me!</button>
      </NavbarHireMe>
      <NavbarMenu>
        <MenuIcon onClick={() => setToggleMenu(!toggleMenu)} />
        {toggleMenu && (
          <NavbarMenuContainer>
            <div>
              <p>
                <a href="/">Home</a>
              </p>
              <p>
                <a href="/">Work</a>
              </p>
              <p>
                <a href="/">About</a>
              </p>
            </div>
            <NavbarMenuContainerHireMe>
              <p>Hire Me!</p>
            </NavbarMenuContainerHireMe>
          </NavbarMenuContainer>
        )}
      </NavbarMenu>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;
  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

const NavbarLinks = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavbarLinksLogo = styled.div`
  margin-right: 2rem;
  a {
    font-family: "Allura", sans-serif;
    font-size: 28px;
  }
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  p {
    color: #000;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;
    margin: 0 1rem;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarHireMe = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 20px;
  button {
    padding: 0.5rem 1rem;
    color: rgba(0, 0, 0, 0.6);
    background: transparent;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    border: 2px solid rgba(0, 0, 0, 0.6);
    outline: none;
    cursor: pointer;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarMenu = styled.div`
  margin-left: 1rem;
  display: none;
  position: relative;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavbarMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  text-align: end;
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 15px;
  margin-top: 1rem;
  min-width: 25vw;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  p {
    padding-top: 10px;
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;
    margin: 0 1rem;
    cursor: pointer;
  }
  @media (max-width: 767px) {
    p {
      font-size: 14px;
    }
  }
`;

const NavbarMenuContainerHireMe = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
