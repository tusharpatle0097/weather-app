import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';
import EmojiSea from "./EmojiSea"

const Home = () => {
  const [data, setData] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    // We only want to fetch data when the search input is not empty
    if (searchInput !== '') {
      getData();
    }
  }, [searchInput]); // Run the effect whenever the searchInput changes

  const getData = () => {
    const linkUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=cf0e170fd30d49d2de4e730dd301c718&units=metric`;
    axios.get(linkUrl)
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleSearch = () => {
    getData();
  }

  return (

    <>
      <div className='weather-app'>
        <h1 className='app-title'>Weather App</h1>
        <div className='search-container'>
          <input
            type="text"
            placeholder='Enter City'
            className="search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className='search-button' onClick={handleSearch}><AiOutlineSearch /></button>
        </div>
        {data ? (
          <div className='weather-info'>
            <h2 className='city'>{data.name}, {data.sys.country}</h2>
            <p className='temperature'>{data.main.temp}°C</p>
            <p className='description'>{data.weather[0].description}</p>
            <p className='humidity'>Humidity: {data.main.humidity}%</p>
          </div>
        ) : (
          <p className='loading'>Loading...</p>
        )}
        <p className='mt-3'>Created By Tushar</p>
      </div>

      <EmojiSea dataName="Search Emojis"/>
    </>
  );


}

export default Home;
