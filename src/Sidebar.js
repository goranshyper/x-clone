import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material";

function Sidebar() {
    return (
        <div className="sidebar">
            {/* X ikona */}
            <TwitterIcon />

            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Search" />
            <SidebarOption Icon={NotificationsIcon} text="Notification" />
            <SidebarOption Icon={MailIcon} text="Messages" />
            <SidebarOption Icon={BookmarkIcon} text="Saved" />
            <SidebarOption Icon={ListIcon} text="List" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            {/* Button -> Tweet */}
            <Button variant="outlined" className="sidebarTweet" fullWidth >
                Tweet
            </Button>
        </div>
    )
}

export default Sidebar;