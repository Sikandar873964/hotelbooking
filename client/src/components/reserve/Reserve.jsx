import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);

  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      console.log("AAAAAAAAAAAAAAAAA", user);

      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`${process.env.REACT_APP__BACKEND_URL}/rooms/availability/${roomId}`, {
            dates: alldates,
          });

          return res.data;
        })
      );

      setOpen(false);
      const res = await axios.post("https://hotelbooking-t6c1.onrender.com/api/send-email", {
        userEmail: user.email,
        selectedRooms,
      });
      console.log(res.data.message);
      navigate("/");
    } catch (err) {}
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data?.length === 0 ? (
          <p>Sorry, no rooms are present.</p>
        ) : (
          data.map((item) => (
            <div className="rItem" key={item?._id}>
              <div className="rItemInfo">
                <div className="rTitle">{item?.title}</div>
                <div className="rDesc">{item?.desc}</div>
                <div className="rMax">
                  Max people: <b>{item?.maxPeople}</b>
                </div>
                <div className="rPrice">{item?.price}</div>
              </div>
              <div className="rSelectRooms">
                {item?.roomNumbers?.map((roomNumber) => (
                  <div className="room" key={roomNumber?._id}>
                    <label>{roomNumber?.number}</label>
                    <input
                      type="checkbox"
                      value={roomNumber?._id}
                      onChange={handleSelect}
                      disabled={!isAvailable(roomNumber)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))
        )}

        {data?.length > 0 && (
          <button onClick={handleClick} className="rButton">
            Reserve Now!
          </button>
        )}
      </div>
    </div>
  );
};

export default Reserve;
