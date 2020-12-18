import { colors, Typography } from "@material-ui/core";
import { Block, CenterFocusStrong } from "@material-ui/icons";
import React from "react";

const Footer = () => {
  return (
    <footer style={footer}>
      <div style={copypara}>
        <p style={para}>Copyright &copy; 2020 Mzeet. All rights reserved.</p>
      </div>
    </footer>
  );
};
const footer = {
  display: "Block",
  backgroundColor: "black",
  width: "100%",
  height: "60px",
};
const copypara = {
  display: "flex",
  color: "white",
  alignContent: "center",
};
const para = {
  maxWidth: "90%",
  marginLeft: "5%",
};
export default Footer;
