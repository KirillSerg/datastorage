import styled from "styled-components";
import { useGlobalContext } from "../contexts/GlobalContext";
import peopleNotActiveImg from "../img/People_not_active.png";
import peopleActiveImg from "../img/People_active.png";

const WrapIconPeople = styled.div`
  display: flex;
  align-items: end;
  flex-direction: row-reverse;
  width: 15%;
  height: 10%;
  top: ${props => props.top || "50%"};
  left: ${props => props.left || "50%"};
  position: absolute;
`;

const IconPeople = styled.div`
  margin-left: -10%;
  width: ${props => props.width || "33%"};
  height: ${props => props.height || "100%"};
  background-image: url(${peopleNotActiveImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  mix-blend-mode: multiply;

  &&: hover {
    background-image: url(${peopleActiveImg});

  };

  &&: hover ~ div {
    background-image: url(${peopleActiveImg});

  };
`;

const PeopleGroup = ({ region, left, top }) => {

  const { regionData, setRegionData } = useGlobalContext()

  const handlerClickGroup = (selectedGroup) => {
    setRegionData({
      ...regionData, [region]: {
        ...regionData[region], group: selectedGroup
      }
    })
  }

  return (
      <WrapIconPeople left={left} top={top}>
        <IconPeople
          width="40%"
          height="120%"
          onClick={() => { handlerClickGroup("big") }}
        />
        <IconPeople
          width="35%"
          height="100%"
          onClick={() => { handlerClickGroup("medium") }}
        />
        <IconPeople
          width="30%"
          height="80%"
          onClick={() => { handlerClickGroup("small") }}
        />
      </WrapIconPeople>
  );
}

export default PeopleGroup;
