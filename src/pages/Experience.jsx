import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import data from "../data";

function Experience() {
  return (
    <div>
      <Title name="Experience" />
      <p>
        {data.experience.map((item) => (
          <div>
            <h3>{item.post}</h3>
            <h4>{item.company}</h4>
            <p>{item.summary}</p>
          </div>
        ))}
      </p>
    </div>
  );
}

export default Experience;
