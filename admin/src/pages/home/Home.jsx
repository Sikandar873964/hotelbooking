import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import useFetch from "../../hooks/useFetch";
import React, { useEffect, useState } from "react";
const Home = () => {
  const {
    data: userData,
    loading: userLoading,
    error: userError,
    reFetch: userReFetch,
  } = useFetch(`/users`);
  const {
    data: hotelData,
    loading: hotelLoading,
    error: hotelError,
    reFetch: hotelReFetch,
  } = useFetch(`/hotels`);
  const {
    data: roomData,
    loading: roomLoading,
    error: roomError,
    reFetch: roomReFetch,
  } = useFetch(`/rooms`);
  const [userCount, setUserCount] = useState(0);
  const [hotelCount, setHotelCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);

  useEffect(() => {
    setUserCount(userData?.length);
    setHotelCount(hotelData?.length);
    setRoomCount(roomData?.length);
    console.log("Users data:", userData);
    console.log("Hotels data:", hotelData);
    console.log("room data:", roomData);
  }, [userData, hotelData, roomData]);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h1 style={{ textAlign: "center", color: "#6439FF" }}>
          Welcome to Admin Dashboard
        </h1>
        <div className="widgets">
          <Widget type="user" value={userCount} />

          <Widget type="earning" value={hotelCount} />

          <Widget type="balance" value={roomCount} />

          {/* <Widget type="order" value={10} /> */}
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
