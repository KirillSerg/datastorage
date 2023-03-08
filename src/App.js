import { useState } from "react";
import styled from "styled-components";
import map from "./img/map.png";
import PeopleGroup from "./PeopleGroup";

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
  const [selectedGroup, setSelectedGroup] = useState({northAmerica: "", europ: ""})
console.log(selectedGroup)
  return (
    <MainWrap>
      <BgIcon src={map} />
      <PeopleGroup
        goupRegion="northAmerica"
        setSelectedGroup={setSelectedGroup}
        selectedGroup={selectedGroup}
        left="12%"
        top="33%"
      />
      <PeopleGroup
        goupRegion="europ"
        setSelectedGroup={setSelectedGroup}
        selectedGroup={selectedGroup}
        left="45%"
        top="30%"
      />
    </MainWrap>
  );
}

export default App;
