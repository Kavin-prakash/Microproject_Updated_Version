import React from 'react';
import './Loading.css'; // Import your CSS file
// import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
// import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import ReactLoading from "https://cdn.skypack.dev/react-loading@2.0.3";

function Loading() {

 
  return (
    <div className="loading-app">
      <div className="loading-container">
        {/* <div className="spinner"> */}
        </div>
        <ReactLoading type={"bars"} color={"#03fc4e"} height={100} width={100} />

        <p style={{ color: 'white' }}>Loading...</p>
        <div className='loadingmessage'>
          {/* <p>oops!!{<SentimentVeryDissatisfiedIcon />}Please Wait for a Moment{<HourglassBottomIcon />}.</p> */}
        </div>
      </div>

    // </div>
  );
}


export default Loading;