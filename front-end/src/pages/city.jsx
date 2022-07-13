import { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../components/logo";
import logo from "../assets/img/logo.png";
import Subcontent from "../components/subcontent";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ImpactList = [
  "Risk of increased temperatures (heat): ",
  "Risk of increased rainfall: ",
  "Risk of increased river flooding: ",
  "Risk of increased coastal flooding: ",
  "Risk of increased pluvial flooding: ",
  "Risk of increased wildfires: ",
  "Risk of increased water scarcity: ",
  "Risk of increased vector borne diseases: ",
  "Risk of increased freak storms: ",
  "Risk of increased infrastructure failures: ",
];

const highestArray = [
  "temperature rise",
  "increase in rainfall",
  "river flooding",
  "coastal flooding",
  "pluvial flooding",
  "wildfires",
  "water scarcity",
  "airborne diseases",
  "freak storms",
  "infrastructure failures"
]
const City = ({ url }) => {
  const [impactdata, setImpactData] = useState([]);
  const [msg, setMsg] = useState("");
  const cityInfo = useSelector((state) => state.city);
  const navigator = useNavigate();
  const [cityWeather, setCityWeather] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [highest, setHighest] = useState([])

  useEffect(() => {
    if (cityInfo.city === undefined) navigator("/");
    let data = [
      cityInfo.temp,
      cityInfo.rain,
      cityInfo.river,
      cityInfo.coast,
      cityInfo.pluvial,
      cityInfo.fire,
      cityInfo.water,
      cityInfo.disease,
      cityInfo.storm,
      cityInfo.infra,
    ]
    setCityWeather(data);
  }, []);

  useEffect(() => {
    let dataSort = [
      cityInfo.temp,
      cityInfo.rain,
      cityInfo.river,
      cityInfo.coast,
      cityInfo.pluvial,
      cityInfo.fire,
      cityInfo.water,
      cityInfo.disease,
      cityInfo.storm,
      cityInfo.infra,
    ]
    let v = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    dataSort = dataSort.sort().reverse()
    let data = [];
    console.log("dataSort", dataSort)
    for (let i=0; i<3; i++) {
      cityWeather.map((item, index) => {
        console.log("item", item);
        if (item == dataSort[i]){
          if (v[index] == 0) {
            console.log("index", index)
            v[index] = 1;
            data.push(highestArray[index])
            console.log("data", data)
          }
        }
      })
    }
    setHighest(data)
  }, [cityWeather])

  useEffect(() => {
    try {
      axios.get(url + "/users/impact").then((res) => {
        setImpactData(res.data.result);
        switch (cityInfo.temp) {
          case 0 || 1:
            setTemperature([res.data.result[0].text1, res.data.result[0].text2]);
            break;
          case 2 || 3 || 4:
            setTemperature([res.data.result[1].text1, res.data.result[1].text2]);
            break;
          case 5 || 6:
            setTemperature([res.data.result[2].text1, res.data.result[2].text2]);
            break;
          case 7 || 8:
            setTemperature([res.data.result[3].text1, res.data.result[3].text2]);
            break;
          case 9 || 10:
            setTemperature([res.data.result[4].text1, res.data.result[4].text2]);
            break;
        } 
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }, []);

  return (
    <div className="city">
      {/* {console.log(impactdata)} */}
      <div className="header">
        <div className="logo">
          <h2>Your Planet Impact</h2>
          <div className="">
            <Logo src={logo} />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="intro-content">
          <div className="impact d-flex">
            <Logo src={logo} />
            <Subcontent
              subtitle={`How will climate change effect ${cityInfo.city}, ${cityInfo.state}? `}
              subtext={`The 3 highest impacts that climate change will have on ${cityInfo.city} are ${highest[0]}, ${highest[1]} and ${highest[2]}. `}
            />
          </div>
          <div className="objective d-flex">
            <Subcontent
              subtext={`Climate change is a direct result of global warming. We have compiled 10 different impacts that global warming and climate change will have on ${cityInfo.city}. Ranked from 0 to 10, with 0 being no impact and 10 being the highest risk.`}
            />
          </div>
        </div>
        <div className="main-content">
          <div className="impact-table">
            <div className="table-title">
              <h2>{`Impacts of climate change on ${cityInfo.city}, ${cityInfo.state}`}</h2>
              <table>
                {ImpactList.map((item, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>{item}</td>
                      <td>{cityWeather[index]}/10</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <h3>
            {`How will the increase in temperatures affect ${cityInfo.city}?`}
          </h3>
          <div className="temp-result">
            {console.log(cityWeather[0])}
            {console.log(impactdata)}
            <p>
              {`As result of global warming, temperatures in ${cityInfo.city} are
                    forecasted to ${temperature[0]}. The risk of increased heat in
                    ${cityInfo.city} is currently ${temperature[1]}.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
