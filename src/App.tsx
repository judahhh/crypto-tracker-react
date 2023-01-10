import { createGlobalStyle } from "styled-components";
import Router from "./routes/Router";
//styled-components에서 가져온 스타일 컴포넌트
const GlobalStyle = createGlobalStyle`


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body{
 
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor}
}
*{
  box-sizing:border-box
}
a{
  text-decoration:none
}
`;
//위는 스타일의 기본값을 제거함
function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}
export default App;

// import React from "react";
// import styled from "styled-components";
// import { useState } from "react";
// import "./App.css";

// const Container = styled.div`
//   background-color: ${(props) => props.theme.bgColor};
// `;
// const H1 = styled.div`
//   color: ${(props) => props.theme.textColor};
// `;

// function App() {
//   const [value, setValue] = useState("");
//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     console.log(e.currentTarget.value);
//     const {
//       currentTarget: { value },
//     } = e;
//     setValue(value);
//   };
//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("hello", value);
//   };
//   return (
//     // <div>
//     //   {/* <Circle borderColor="yellow" bgColor={"teal"}></Circle>
//     //   <Circle text="hi" bgColor={"tomato"}></Circle> */}
//     //   <form onSubmit={onSubmit}>
//     //     <input
//     //       value={value}
//     //       onChange={onChange}
//     //       type="text"
//     //       placeholder="username"
//     //     />
//     //     <button>Log in</button>
//     //   </form>
//     // </div>

//     <Container>
//       <H1>protected</H1>
//     </Container>
//   );
// }

// export default App;
