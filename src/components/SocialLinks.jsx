import React from "react";
import data from "../data";
function SocialLinks() {
  return (
    <div>
      {data.links.map((item) => (
        <a href={item.url} style={{ textDecoration: "none" }}>
          {item.name} |{" "}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
