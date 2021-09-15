import React from "react";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import data from "../data";
import { HiOutlineLightBulb } from "react-icons/hi";
import styled from "styled-components";

function Skills() {
  return (
    <div>
      <Title name="Skills" />
      <div>
        <div>
          <TitleContainer>
            <HiOutlineLightBulb style={{ marginRight: "10px" }} />
            <SubTitle name="Development" />
          </TitleContainer>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data.skills.development.map((item) => (
              <Tag> {item} </Tag>
            ))}
          </div>
        </div>
        <div>
          <TitleContainer>
            <HiOutlineLightBulb style={{ marginRight: "10px" }} />
            <SubTitle
              name="Other technologies"
              style={{ marginRight: "10px" }}
            />
          </TitleContainer>
          <div style={{ display: "flex" }}>
            {data.skills.tools.map((item) => (
              <Tag> {item} </Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  /* font-size:   25px; */
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Tag = styled.p`
  /* font-size: 10px; */
  border: 1px solid #d53369;
  padding: 2px 10px;
  margin: 10px 10px;
  border-radius: 5px;
  color: #d53369;
`;
