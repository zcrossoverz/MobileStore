import React from "react";
import Style from "./Header.module.css";
import TextField from "@mui/material/TextField";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

let Logo = () => {
  return <div className={Style.logo}>MOBILESTORE.</div>;
};

let SearchBar = () => {
  return (
    <div>
      <TextField
        className={Style.search}
        type="search"
        label="Search Something"
      />
    </div>
  );
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

let Account = () => {
  return (
    <div className={Style.account}>
      <div className={Style.signup_link}>SIGN UP</div>
      <div className={Style.signin_link}>SIGN IN</div>
      <div className={Style.cart_link}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </div>
    </div>
  );
};

export default function Header() {
  return (
    <div className={Style.container}>
      <Logo />
      <SearchBar />
      <Account />
    </div>
  );
}
