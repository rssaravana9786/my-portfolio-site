import { useState, useEffect } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding:0px 0px 20px 0px; /* Increased right padding */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ scrolled }) => (scrolled ? "#000" : "transparent")};
  color: white;
  box-shadow: ${({ scrolled }) => (scrolled ? "0px 4px 10px rgba(0,0,0,0.3)" : "none")};
  transition: background 0.3s ease, box-shadow 0.3s ease;
  z-index: 1000;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #00c3ff;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #000;
    flex-direction: column;
    align-items: center;
    display: ${({ open }) => (open ? "flex" : "none")};
    padding: 15px 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <h1>Portfolio</h1>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>☰</MenuButton>
      <NavLinks open={menuOpen}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
