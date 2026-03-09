import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { orange } from "../../constants/color";
import {
  ManageAccounts as ManageAccountsIcon,
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleMobile = () => {
    console.log("mobile");
  };

  const handleOpenSearchDialog = () => {
    console.log("open search dialog");
  };

  const handleOpenNewGroup = () => {
    console.log("open new group dialog");
  };

  const navigateToGroup = () => {
    navigate("/groups");
  };

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <Box sx={{ flexGrow: 1, height: "4rem" }}>
      <AppBar position="static" sx={{ bgcolor: orange }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Power Chat
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton color="inherit" onClick={handleMobile}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Push icons to right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Action Icons */}
          <Box>
            <IconBtn
              title="Search"
              icon={<SearchIcon />}
              onClick={handleOpenSearchDialog}
            />
            <IconBtn
              title="New Group"
              icon={<AddIcon />}
              onClick={handleOpenNewGroup}
            />
            <IconBtn
              title="Manage Groups"
              icon={<ManageAccountsIcon />}
              onClick={navigateToGroup}
            />
            <IconBtn
              title="Logout"
              icon={<LogoutIcon />}
              onClick={handleLogout}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
