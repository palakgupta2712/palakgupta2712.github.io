import React from "react";
import styled from "styled-components";
import data from "../data";

function Introduction() {
  return <Intro>{data.bio}</Intro>;
}

export default Introduction;

const Intro = styled.p`
  padding: 1rem 0;
  font-size: 2.5rem;
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
