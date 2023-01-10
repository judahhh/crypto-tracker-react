import React from "react";
import styled from "styled-components";
import { useState } from "react";
import "./App.css";
// import Circle from "./Circle";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.div`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  const [value, setValue] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello", value);
  };
  return (
    // <div>
    //   {/* <Circle borderColor="yellow" bgColor={"teal"}></Circle>
    //   <Circle text="hi" bgColor={"tomato"}></Circle> */}
    //   <form onSubmit={onSubmit}>
    //     <input
    //       value={value}
    //       onChange={onChange}
    //       type="text"
    //       placeholder="username"
    //     />
    //     <button>Log in</button>
    //   </form>
    // </div>

    <Container>
      <H1>protected</H1>
    </Container>
  );
}

export default App;