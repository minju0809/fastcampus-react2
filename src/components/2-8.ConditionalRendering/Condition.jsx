import React from "react";

function UserGreeting(props) {
  return (
    <h1>
      {props.name && `${props.name},`} Welcome {props.count ? `It's ${props.count} times` : null}
    </h1>
  );
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  // if (props.isLoggedIn) {
  //   return <UserGreeting name="minju" count={0} />;
  // }
  // return <GuestGreeting />;
  return props.isLoggedIn ? <UserGreeting name='minju' count={0} /> : <GuestGreeting />;
  // name을 없앨 경우, count가 0이거나 없을 경우, 
}

export default function Condition() {
  const isLoggedIn = false;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}

// if : if(condition) {return A} else {return B}
// && : condition && A, salsy 주의
// 삼항연산자 : condition ? A : B or null
// 아예 안 그리고 싶은 경우 : return null;