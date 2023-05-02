import React from 'react'
import styled from 'styled-components'
import logo from "../assets/logo.png"
export default function Navbar(isScrolled) {
    const links=[
        { name:"Home", link: "/"},
        { name:"Tv Shows", link: "/tv"},
        { name:"Movies", link: "/movies"},
        { name:"My List", link: "/mylist"},
    ];
  return  <Container>
    <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
        <div className="left flex a-center"></div>
            <div className="brand flex a-center j-center"></div>
                <img src={logo} alt="logo" />
    </nav>
  </Container>

}
   



const Container = styled.div``;