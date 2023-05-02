import React from 'react';
import background from "../assets/login.jpeg";
import styled from 'styled-components';
export default function Backgroundimage() {
  return (
    <Container>
        <img src={background} alt="background" />
    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
    width: 100vh;
    img{
        height: 100vh;
        width: 100vh;
    }
    `;

