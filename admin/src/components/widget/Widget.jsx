// widget.jsx
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import useFetch from "../../hooks/useFetch";
import React, { useEffect, useState } from "react";
import HotelIcon from "@mui/icons-material/Hotel";
import SingleBedIcon from "@mui/icons-material/SingleBed";
const Widget = ({ type, value }) => {
  const { data, loading, error, reFetch } = useFetch(`/users`);
  const [list, setList] = useState(0);

  useEffect(() => {
    console.log("AAAAAAAAAAAAAAAA", data?.length);
    setList(data?.length);
  }, [data]);

  let values;

  const amount = value !== undefined ? value : 0;

  switch (type) {
    case "user":
      values = {
        title: "USERS",
        isMoney: false,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    // case "order":
    //   values = {
    // title: "ORDERS",
    // isMoney: false,
    // icon: (
    //   <ShoppingCartOutlinedIcon
    //     className="icon"
    //     style={{
    //       backgroundColor: "rgba(218, 165, 32, 0.2)",
    //       color: "goldenrod",
    //     }}
    //   />
    // ),
    // };
    // break;
    case "earning":
      values = {
        title: "Total Hotels",
        // isMoney: true,
        icon: (
          <HotelIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      values = {
        title: "Total Rooms",
        // isMoney: true,
        icon: (
          <SingleBedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{values.title}</span>
        <span className="counter">
          {values.isMoney && "$"} {amount}
        </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
        </div>
        {values.icon}
      </div>
    </div>
  );
};

export default Widget;
