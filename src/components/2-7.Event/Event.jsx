import React from "react";

export default function Event() {
  const handleClickCapture = () => {
    console.log("handleClickCapture");
  };

  const handleClickCapture2 = () => {
    console.log("handleClickCapture2");
  };

  const handleClickBubble = () => {
    console.log("handleClickBubble");
  };

  const handleButtonClick = () => {
    console.log("handleButtonClick");
  };
  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick}>Button</button>
      </div>
    </div>
  );
}

// HTML
{/* <button onclick="activateLasers()">
  Activate Lasers</button> */}
// React
{/* <button onClick={activateLasers}>  Activate Lasers
</button> */}

// Capture > target > Bubble 

// 캡쳐링 : 부모에서부터 자식에게 이벤트가 있는지 알아보는 것

// 버블링 : 자식에서부터 부모로 올라가는 것

// return false > e.preventDefault() 해줘야 함