import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import TemporaryDrawer from "./Drawer";
import BasicPopover from "./Popover";
import NestedModal from '../Login/LoginModal';
import disney from '../adminTools/icons/disney.png';

//Main nav bar
const Movies = (
  <Link style={{ textDecoration: "none", color: "white"}} to="/movies">
    Movies
  </Link>
);
const About = (
  <Link style={{ textDecoration: "none", color: "white" }} to="/aboutus">
    About
  </Link>
);

const pages = [Movies, About, "Contact"];
const Login = <NestedModal />

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{bgcolor: "#006E99"}} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              DMDB<img src={disney} alt="Disney Castle" width="40px"/>
              {/* <a href="https://www.flaticon.com/free-icons/disney" title="disney icons">Disney icons created by Freepik - Flaticon</a> */}
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", },
              }}
            >
              {pages.map((page) => (
                <MenuItem style={{backgroundColor:"#006E99", color:"#fff", }} key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <img src={disney} alt="Disney Castle" width="40px" style={{ display: { xs: "flex", md: "none" }, mr: 1 }}/> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DMDB
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block", }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {Login}      
          <BasicPopover />
          <TemporaryDrawer />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
