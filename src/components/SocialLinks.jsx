import React from "react";
import styled from "styled-components";
import data from "../data";
function SocialLinks() {
  return (
    <Container>
      {data.links.map((item) => (
        <a href={item.url}> {item.name} | </a>
      ))}
    </Container>
  );
}

export default SocialLinks;
const Container = styled.div`
  background: linear-gradient(90deg, #d53369 0%, #daae51 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
