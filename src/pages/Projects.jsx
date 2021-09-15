import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import data from "../data";
import { BiLinkExternal } from "react-icons/bi";
function Projects() {
  return (
    <div>
      <Title name="Projects" />
      <div>
        {data.projects.map((item) => (
          <Container>
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "space-between",
                margin: 0,
              }}
            >
              {item.name}
              <div>
                {item.live_url && <Link href={item.live_url}>Demo</Link>}
                {item.repo_url && <Link href={item.repo_url}>Github</Link>}
              </div>
            </h3>
            <p>{item.summary}</p>
            {item.tags.map((tag) => (
              <Tag> {tag} </Tag>
            ))}
          </Container>
        ))}
      </div>
    </div>
  );
}

export default Projects;
const Tag = styled.span`
  font-size: 10px;
  border: 1px solid #333;
  padding: 2px 7px;
  margin-right: 10px;
  border-radius: 5px;
  /* color: #606060; */
  background-color: #333;
  text-transform: uppercase;
`;
const Link = styled.a`
  font-size: 14px;
  border: 1px solid #d53369;
  padding: 2px 10px;
  margin-right: 10px;
  border-radius: 5px;
  color: #d53369;
  text-decoration: none;
  /* background-color: #333; */
`;
const Container = styled.div`
  border: 1px solid #d53369;
  margin: 15px 0;
  padding: 10px;
  border-radius: 5px;
`;
