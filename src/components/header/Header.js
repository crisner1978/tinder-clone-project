import React from "react";
import "./Header.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PersonIcon from "@mui/icons-material/Person";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ForumIcon from "@mui/icons-material/Forum";
import { IconButton } from "@mui/material";
import { Link, useHistory } from "react-router-dom";

const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" />
        </IconButton>
      )}

      <Link to="/" exact>
        <IconButton>
          <WhatshotIcon color="error" fontSize="large" />
        </IconButton>
      </Link>
      <Link to="/chats">
        <IconButton>
          <ForumIcon fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
