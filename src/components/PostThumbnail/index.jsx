import React from "react";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { TbNetwork, TbMathSymbols } from "react-icons/tb";
import { Wrapper } from "./style";

const thumbnailObject = [
  { name: "react", icon: <FaReact />, color: "#61DAFB" },
  { name: "javascript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "web", icon: <CgWebsite />, color: "#E95420" },
  { name: "network", icon: <TbNetwork />, color: "#009639" },
  { name: "algorithm", icon: <TbMathSymbols />, color: "#C4D600" },
];

const PostThumbnail = ({ category }) => {
  const thumbnailInfo = thumbnailObject.find((t) => {
    return t.name === category;
  });

  return <Wrapper color={thumbnailInfo.color}>{thumbnailInfo.icon}</Wrapper>;
};

export default PostThumbnail;
