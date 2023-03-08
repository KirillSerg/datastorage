import { useState } from "react";
import styled from "styled-components";
import map from "./img/map.png";
import peopleNotActive from "./img/People_not active.png";
import peopleActive from "./img/People_active.png";

const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const BgIcon = styled.img`
width: 100%}
height: 100%;
`;

const IconPeople = styled.img`
  width: ${props => props.width || "33%"};
  margin-left: -2vw;
  mix-blend-mode: multiply;
`;

const WrapIconPeople = styled.div`
  width: 15%;
  top: 30%;
  left: 16%;
  position: absolute;
`;


const PeopleRegion = () => {
  const [hoveredGroup, setHoveredGroup] = useState ("")

  return (
    <MainWrap>
      <BgIcon src={map} />
      <WrapIconPeople>
        <IconPeople
          width="30%"
          src={
            hoveredGroup === "small" ||
            hoveredGroup === "medium" ||
            hoveredGroup === "big" ?
            peopleActive :
            peopleNotActive
          }
          onMouseEnter={() => setHoveredGroup("small")}
          onPointerOut={() => setHoveredGroup("")}
        />
        <IconPeople
          width="35%"
          src={
            hoveredGroup === "medium" ||
            hoveredGroup === "big" ?
            peopleActive :
            peopleNotActive
          }
          onMouseEnter={() => setHoveredGroup("medium")}
          onPointerOut={() => setHoveredGroup("")}
        />
        <IconPeople
          width="40%"
          src={hoveredGroup === "big" ? peopleActive : peopleNotActive}
          onMouseEnter={() => setHoveredGroup("big")}
          onPointerOut={() => setHoveredGroup("")}
        />
      </WrapIconPeople>
    </MainWrap>
  );
}

export default PeopleRegion;
