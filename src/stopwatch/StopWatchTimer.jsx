import React from 'react';

export default function StopWatchTimer(props) {
  return (
    // <div>
    //   <p>test</p>
    // </div>
    <div className="stopwatch-timer">
      <span className="minutes">
        { ("0" + Math.floor((props.time / 60000) % 60)).slice(-2) } mins
      </span>
      <span> </span>
      <span className="seconds">
         { ("0" + Math.floor((props.time / 1000) % 60)).slice(-2) } secs
      </span>
    </div>
  )
}
