import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../components/logo";
import Subcontent from "../components/subcontent";
import Citydroplist from "../components/citydroplist";
import logo from "../assets/img/logo.png";
import objlogo from "../assets/img/logo1.png";
import "./home.scss";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const Home = ({ url, props }) => {
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    try {
      axios.get(url + "/users/city").then((res) => {
        let array = [];
        let result = res.data.result;

        for (let i = 0; i < result.length; i++) {
          let flag = false;
          for (let j = 0; j < array.length; j++) {
            if (array[j].state == result[i].state) {
              array[j].cities.push(result[i]);
              flag = true;
              break;
            }
          }
          if (flag == false) {
            let dd = { state: result[i].state, cities: [result[i]] };
            array = [...array, dd];
          }
        }

        setData(array);
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }, []);

  return (
    <>
      <div className="Home">
        <div className="header">
          <div className="logo">
            <h2>Your Planet Impact</h2>
            <div className="">
              <Logo src={logo} />
            </div>
          </div>
          <div className="title">
            <h1 className="text-center">
              How climate change will affect your city{" "}
            </h1>
          </div>
        </div>
        <div className="content">
          <div className="intro-content">
            <div className="impact d-flex">
              <Logo src={logo} />
              <Subcontent
                subtitle="The Impact"
                subtext="Climate change will affect temperatures, rainfalls, ocean levels, flooding, wildfires, storms, and other impacts that will affect quality of life. For each city, state and country we have compiled 10 different impacts that global warming and climate change will have."
              />
            </div>
            <div className="objective d-flex">
              <Subcontent
                subtitle="The Objective"
                subtext="The objective of this site is to give a simple and understandable snapshot of the risks of climate change that anyone can understand. It was built by consolidating climate change data and research data across cities globally."
              />
              <Logo src={objlogo} />
            </div>
          </div>
          <div className="main-content">
            <div className="cities">
              <h3 className="text-center">
                Find out how climate change will affect your city - click the
                countries, states or cities below.
              </h3>
              {data.map((item, index) => (
                <div className="" key={index}>
                  <Citydroplist
                    title={item.state}
                    cities={item.cities}
                    cityitem={item.city}
                    city_url={item.city_url}
                    state_url={item.state_url}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
