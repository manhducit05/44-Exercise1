import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const WeatherChart = () => {
  const [data, setData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weather:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;

  // Hàm chuyển weatherCode thành trạng thái mây
  const getWeatherText = (code) => {
    switch (code) {
      case 0:
        return "Clear";
      case 1:
        return "Cloudy";
      case 2:
        return "Partly Cloudy";
      case 3:
        return "Overcast";
      default:
        return "Unknown";
    }
  };

  return (
    <div style={{ width: "100%", padding: 200, borderRadius: 10 }}>
      {/* Current Weather */}
      {currentWeather && (
        <div style={{ marginBottom: 20 }}>
          <h3>Current Weather</h3>
          <p style={{ fontSize: 24 }}>
            {getWeatherText(currentWeather.weathercode)} - {currentWeather.temperature}°C
          </p>
          <p>Time: {currentWeather.time.slice(11, 16)}</p>
        </div>
      )}

      {/* Activities Nearby */}
      <div style={{ marginBottom: 20 }}>
        <h3>Activities in your area</h3>
        <div style={{ display: "flex", gap: 10 }}>
          <img src="/activities/activity1.jpg" alt="Activity 1" width={120} height={80} />
          <img src="/activities/activity2.jpg" alt="Activity 2" width={120} height={80} />
          <img src="/activities/activity3.jpg" alt="Activity 3" width={120} height={80} />
          <img src="/activities/activity4.jpg" alt="Activity 4" width={120} height={80} />
        </div>
      </div>

      {/* Air Conditions */}
      <div style={{ marginBottom: 20 }}>
        <h3>Air Conditions</h3>
        {data.length > 0 && (
          <ul>
            <li>Real Feel: {data[0].temperature}°C</li>
            <li>Wind: {data[0].windspeed} km/h</li>
            <li>Humidity: {data[0].humidity}%</li>
          </ul>
        )}
      </div>

      {/* Temperature Chart */}
      <div style={{ width: "100%", height: 400 }}>
        <h3 style={{ textAlign: "center", marginBottom: 20 }}>Biểu đồ Nhiệt độ trong ngày</h3>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis dataKey="time" />
            <YAxis unit="°C" domain={["auto", "auto"]} />
            <Tooltip formatter={(val) => [`${val}°C`, "Nhiệt độ"]} />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#ff7300"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeatherChart;
