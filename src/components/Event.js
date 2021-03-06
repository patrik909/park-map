import React from 'react';

function Event(){
  return(
    <a href="http://kulturhusetstadsteatern.se/parkteatern/" target="_blank" rel="noopener noreferrer">
      <li className="event">
        <div className="date-box">
          <p className="date">11</p>
          <p className="month">Juni</p>
        </div>
        <div className="text">
          <h4>Parkteatern</h4>
          <p>Parkteatern gör en modern tolkning på Shakespeares klassiker Kung Lear</p>
        </div>
        <img src="" className="event-image" alt="" />
      </li>
    </a>
  );
}

export default Event;
