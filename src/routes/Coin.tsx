import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;
interface RouteParams {
  state: {
    // coinID: string;
    name: string;
    rank: number;
  };
}
function Coin() {
  const [loading, setLoading] = useState(false);
  const { coinID } = useParams();
  const { state } = useLocation() as RouteParams;
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});

  useEffect(() => {
    (async () => {
      const infoData = await fetch(
        `https://api.coinpaprika.com/v1/coins/${coinID}`
      );
      const json = await infoData.json();

      const priceData = await fetch(
        `https://api.coinpaprika.com/v1/tickers/${coinID}`
      );
      const json2 = await priceData.json();
      setInfo(infoData);
      setPriceInfo(priceData);
      console.log(infoData, priceData);
      //위 두줄을 한줄로 줄이기
      /* const reponse=await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinID}`
      ).json(); )*/
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>코인{state?.name || "Loading"}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
