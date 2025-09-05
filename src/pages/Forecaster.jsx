import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Spin } from "antd";
import "../styles/Forecaster.css";

const WeatherChart = () => {
  const { t } = useTranslation("forecaster"); // namespace forecaster
  const [data, setData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timezone, setTimezone] = useState("");

  const API =
    "https://api.opensearch.vn/v1/weather/forecast/hourly?latitude=21.0255613&longitude=105.7857475";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        const chartData = json.data.values
          .filter(
            (item) =>
              item.temperature?.temperature_2m !== undefined &&
              item.temperature?.temperature_2m !== null
          )
          .map((item) => ({
            time: item.time.slice(11, 16),
            temperature: item.temperature.temperature_2m,
            windspeed: item.wind?.windspeed?.windspeed_10m,
            humidity: item.rain?.relativehumidity_2m,
            weatherCode: item.weatherCode,
          }));

        setData(chartData);
        setCurrentWeather(json.data.current_weather);
        setTimezone(json.data.timezone);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weather:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "200px 0" }}>
        <Spin size="large" tip={t("loading")} />
      </div>
    );
  }
  const getWeatherText = (code) => {
    return t(`weatherCodes.${code}`, { defaultValue: t("weatherCodes.default") });
  };

  return (
    <div className="weather-dashboard">
      <div className="custom-container">
        {/* Current Weather */}
        {currentWeather && (
          <div className="current-weather" style={{ marginBottom: 20 }}>
            <div className="position">
              <img src="/images/position.svg" alt="position" />
              {t("currentWeather.timezone")}: {timezone}
            </div>
            <div className="weather-status">
              {getWeatherText(currentWeather.weathercode)}
            </div>
            <div className="temp" style={{ marginTop: 50 }}>
              {t("currentWeather.temperature")}: {currentWeather.temperature}°C
            </div>
            <div className="time">
              {t("currentWeather.time")}:{" "}
              {new Date(currentWeather.time).toLocaleString("vi-VN", {
                timeZone: timezone,
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        )}

        {/* Activities Nearby */}
        <div className="activities" style={{ marginBottom: 20 }}>
          <div className="activities-title">{t("activities.title")}</div>
          <div className="act-gallery">
            <img className="act" src="/images/act1.jfif" alt="Activity 1" />
            <img className="act" src="/images/act2.jfif" alt="Activity 2" />
            <img className="act" src="/images/act3.jfif" alt="Activity 3" />
            <img className="act" src="/images/act4.jfif" alt="Activity 4" />
          </div>
        </div>

        {/* Air Conditions */}
        <div className="air-conditions">
          <div className="conditions-title">{t("airConditions.title")}</div>
          {data.length > 0 && (
            <ul className="air-conditions-list">
              <li className="real-feel">
                {t("airConditions.realFeel")}: {data[0].temperature}°C
              </li>
              <li className="wind">
                {t("airConditions.wind")}: {data[0].windspeed} km/h
              </li>
              <li className="humidity">
                {t("airConditions.humidity")}: {data[0].humidity}%
              </li>
            </ul>
          )}
        </div>

        {/* Temperature Chart */}
        <div className="chart">
          <h3 style={{ textAlign: "center", marginBottom: 20 }}>
            {t("chart.title")}
          </h3>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
              <XAxis dataKey="time" stroke="#fff" />
              <YAxis unit="°C" domain={["auto", "auto"]} stroke="#fff" />
              <Tooltip formatter={(val) => [`${val}°C`, t("airConditions.realFeel")]} />
              <Line
                type="monotone"
                dataKey="temperature"
                stroke="#FFC355"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default WeatherChart;
