import { Typography, Link } from "@mui/material";
import React from "react";

const Footer = () => (
  <footer>
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Play Chess Online
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  </footer>
);

export default Footer;
