import { useState } from "react";
import { initialState, RegionContext } from "./contexts/GlobalContext";
import styled from "styled-components";
import mapImg from "./img/map.png";
import People from "./components/People";

const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const BgIcon = styled.img`
  width: 100%}
  height: 100%;
`;

const App = () => {
  const [regionData, setRegionData] = useState(initialState)
console.log(regionData)
  return (
    <RegionContext.Provider value={{regionData, setRegionData}}>
      <MainWrap>
        <BgIcon src={mapImg} />
        <People
          region="northAmerica"
          left="10%"
          top="33%"
        />
        <People
          region="southAmerica"
          left="21%"
          top="64%"
        />
        <People
          region="europe"
          left="42%"
          top="29%"
        />
        <People
          region="asia"
          left="65%"
          top="37%"
        />
        <People
          region="australia"
          left="75%"
          top="73%"
        />
      </MainWrap>
    </RegionContext.Provider>
  );
}

export default App;
