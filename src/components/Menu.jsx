import React from "react";
import logo from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieIcon from "@mui/icons-material/Movie";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const darkModeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="sticky top-0 w-1/6 bg-[#020202] text-white py-[18px] px-[26px] flex flex-col gap-5 dark:bg-white dark:text-black">
      <Link to="/" className="no-underline">
        <div className="flex items-center gap-5">
          <img src={logo} alt="logo" className="h-[25px]" />
          <span className="font-bold text-[14px]">Youtube</span>
        </div>
      </Link>
      {/* <div className="flex flex-col gap-1.5"> */}
      <div className="flex flex-col">
        <div className="item">
          <HomeIcon /> <span> Home</span>
        </div>
        <div className="item">
          <ExploreIcon /> <span> Explore</span>
        </div>
        <div className="item">
          <SubscriptionsIcon /> <span> Subscription</span>
        </div>
        <div className="my-[15px] border-[1px] border-[#373737]" />
        <div className="item">
          <VideoLibraryIcon /> <span> Library</span>
        </div>
        <div className="item">
          <HistoryIcon /> <span> History</span>
        </div>
        <div className="my-[15px] border-[1px] border-[#373737]" />
        <p className="text-[14px] text-[#aaa]">
          Sign in to like videos, comment and subscribe channels
        </p>
        <div className="">
          <button className="py-[5px] px-[15px] bg-transparent border-[1px] border-[#3ea6ff] rounded-[3px] font-medium mt-[10px] cursor-pointer text-[#3ea6ff] flex gap-2 items-center">
            <AccountCircleIcon />
            <span>Sign In</span>
          </button>
        </div>
        <div className="my-[15px] border-[1px] border-[#373737]" />
        <div className="mb-[20px]">
          <h4 className="text-[#aaa]">BEST OF YOUTUBE</h4>
        </div>
        <div className="item">
          <LibraryMusicIcon /> <span> Music</span>
        </div>
        <div className="item">
          <SportsBasketballIcon /> <span> Sports</span>
        </div>
        <div className="item">
          <SportsEsportsIcon /> <span> Gaming</span>
        </div>
        <div className="item">
          <MovieIcon /> <span> Movies</span>
        </div>
        <div className="item">
          <NewspaperIcon /> <span> News</span>
        </div>
        <div className="item">
          <LiveTvIcon /> <span> Live</span>
        </div>
        <div className="my-[15px] border-[1px] border-[#373737]" />
        <div className="item">
          <SettingsIcon /> <span> Settings</span>
        </div>
        <div className="item">
          <FlagIcon /> <span> Report</span>
        </div>
        <div className="item">
          <HelpIcon /> <span> Help</span>
        </div>
        <div className="item" onClick={darkModeHandler}>
          <SettingsBrightnessIcon />{" "}
          <span> {theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
