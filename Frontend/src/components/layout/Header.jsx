import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, useState } from "react";
import { orange } from "../../constants/color";
import {
  ManageAccounts as ManageAccountsIcon,
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Logout as LogoutIcon,
  Notifications as NotifiactionsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Search = React.lazy(() => import("../specific/Search"));
const Notification = React.lazy(() => import("../specific/Notifications"));
const NewGroup = React.lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };

  const handleOpenSearchDialog = () => {
    setIsSearch((prev) => !prev);
  };

  const handleOpenNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };

  const handleOpenNotification = () => {
    setIsNotification((prev) => !prev);
  };

  const navigateToGroup = () => {
    navigate("/groups");
  };

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <>
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
                title="Notifiactions"
                icon={<NotifiactionsIcon />}
                onClick={handleOpenNotification}
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

      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <Search />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <Notification />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroup />
        </Suspense>
      )}
    </>
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
