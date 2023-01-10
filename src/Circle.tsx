import styled from "styled-components";
import { useState } from "react";
const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border-color: ;
`;
//부모로부터 props로 전달받을 타입을 정의하는 과정
//object shape(객체모양)을 typescript에게 설명해주고 싶음
//->이걸 interface라고 함
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string; //optional props : 얘가 입력되는게 필수는 아니라서 undefined|string
}
//이 bgColor의 타입은 CircleProps의 object라고 말해줌
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  const [value, setValue] = useState<number | string>(0);
  //위처럼 state의 형을 변환하는 일은 잘 없을것, state를 만들면 보통 같은 타입으로 쭉감
  setValue(2);
  setValue("hello");
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
