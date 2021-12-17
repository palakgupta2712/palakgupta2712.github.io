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
      <SocialLinks>
        <Link href="mailto:palakgupta2712@gmail.com">
          <AiOutlineMail />
        </Link>
        <Link href="https://github.com/palakgupta2712" target="_blank">
          <AiOutlineGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/palakgupta2712/"
          target="_blank"
        >
          <AiFillLinkedin />
        </Link>
        <Link href="https://www.codepen.io/palakgupta27" target="_blank">
          <AiFillCodepenCircle />
        </Link>
      </SocialLinks>
      <Credits>Designed & Built by Palak Gupta</Credits>
    </Container>
  );
}

export default Footer;
const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 10px;
  font-size: 30px;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  transition: var(--transition);
  &:hover {
    transform: scale(1.3);
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Credits = styled.div`
  font-size: 12px;
`;
