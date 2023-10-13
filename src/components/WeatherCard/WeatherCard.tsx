import { FC, useEffect, useState } from "react";
import { IUser, IWeatherIcon } from "../../utils/interfaces";
import { getWeatherData } from "../../api/WeatherApi";
import { weatherIconsData } from "../../data/weatherIcons";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";
import { formatTime } from "../../utils/weatherData";
import { Spinner } from "../Spinner";
import styles from "./WeatherCard.module.scss";

interface WeatherCardProps {
    user: IUser;
}

export const WeatherCard: FC<WeatherCardProps> = ({user}) => {
    const [weatherData, setWeatherData] = useState<any>(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            if (user.location.coordinates) {
                const {latitude, longitude} = user.location.coordinates;
                const data = await getWeatherData(latitude, longitude);
                setWeatherData(data);
            }
        };
        fetchWeatherData();
    }, [user.location.coordinates]);

    if (!weatherData) return <Spinner/>;

    const { current_weather, hourly } = weatherData;
    const { temperature_2m, time } = hourly;
    const currentWeather = current_weather;
    const hourlyWeather = temperature_2m;
    const weatherCode = currentWeather.weathercode;
    const weather: IWeatherIcon = weatherIconsData[weatherCode];
    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    return (
        <div className={styles.weather_card}>
            <div className={styles.current_weather}>
                <div>
                    <h2 className={styles.current_weather__title}>
                        {user.location.country}, {user.location.city}
                    </h2>
                    <p className={styles.current_weather__temp}>{currentWeather.temperature}°C</p>
                </div>
                <img src={weather.day.image} width={150} height={150} alt={weather.day.description}/>
            </div>
            <div className={styles.temperature_value}>
                <p className={styles.temperature_value__min}>
                    <FaTemperatureArrowDown/>
                    {Math.min(...hourlyWeather)}°C
                </p>
                <p className={styles.temperature_value__max}>
                    <FaTemperatureArrowUp/>
                    {Math.max(...hourlyWeather)}°C
                </p>
            </div>
            <div className={styles.forecast}>
                {time.map((t: string, index: number) => {
                    const date = new Date(t);
                    if (date.getDate() === currentDay && date.getHours() % 3 === 0) {
                        return (
                            <div key={index} className={styles.forecast__item}>
                                <p>{formatTime(t)}</p>
                                <p>{hourlyWeather[index]}°C</p>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
};
