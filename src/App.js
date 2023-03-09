import { useState } from "react";
import { initialState, RegionContext } from "./contexts/GlobalContext";
import styled from "styled-components";
import mapImg from "./img/map.png";
import PeopleGroup from "./components/PeopleGroup";

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
        <PeopleGroup
          region="northAmerica"
          left="12%"
          top="33%"
        />
        <PeopleGroup
          region="europ"
          left="45%"
          top="30%"
        />
      </MainWrap>
    </RegionContext.Provider>
  );
}

export default App;
