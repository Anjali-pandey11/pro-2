function TimeDisplay(){

  let time = new Date();
  return <p className="leadb">
    This is the current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
}

export default TimeDisplay;

