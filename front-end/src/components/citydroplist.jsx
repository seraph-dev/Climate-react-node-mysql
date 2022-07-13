import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { settingCity } from "../redux/actions";
import "./citydroplist.scss";

const Citydroplist = (props) => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  const navigator = useNavigate();

  const handleClick = (e) => {
    dispatch(settingCity(e));
    navigator(e.state_url + `/` + e.city_url);
  };

  return (
    <div className="city-droplist">
      <div
        className={`city-title ${isOpen ? "open" : ""}`}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <div>{props.title}</div>
      </div>
      <div className={`city-item ${!isOpen ? "collapsed" : ""}`}>
        {props.cities.map((city, index) => (
          <div className="city-content" key={index}>
            <p
              onClick={() => {
                handleClick(city);
              }}
            >
              {city.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Citydroplist;
