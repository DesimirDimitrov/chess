import { Toolbar, Typography, Link, Button } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import React from "react";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <RouterLink to="/">Play chess with friends</RouterLink>
          </Typography>

          <nav>
            <RouterLink to="/how-to-play">
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                How to play
              </Link>
            </RouterLink>
            <RouterLink to="/ranking">
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Ranking
              </Link>
            </RouterLink>
            <RouterLink to="/rules">
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Chess rules
              </Link>
            </RouterLink>
          </nav>
          <Button
            onClick={() => {
              navigate("/login");
            }}
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
