import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiFillCodepenCircle,
} from "react-icons/ai";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Link href="mailto:palakgupta2712@gmail.com">
        <AiOutlineMail />
      </Link>
      <Link href="https://github.com/palakgupta2712" target="_blank">
        <AiOutlineGithub />
      </Link>
      <Link href="https://www.linkedin.com/in/palakgupta2712/" target="_blank">
        <AiFillLinkedin />
      </Link>
      <Link href="https://www.codepen.io/palakgupta27" target="_blank">
        <AiFillCodepenCircle />
      </Link>
    </Container>
  );
}

export default Footer;
const Container = styled.div`
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 10px;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    transform: scale(1.5);
  }
`;
