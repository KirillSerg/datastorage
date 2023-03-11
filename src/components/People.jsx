import styled, { keyframes } from "styled-components";
import { useGlobalContext } from "../contexts/GlobalContext";
import peopleNotActiveImg from "../img/People_not_active.png";
import peopleActiveImg from "../img/People_active.png";

// const peopleAnimation = keyframes`
//   0% {opacity: 1;}
//   100% {opacity: 0;}
// `;

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
  // animation: ${peopleAnimation} linear 1;
  // animation-duration: ${props => props.isSelected ? "2s" : "0s"};

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
    cursor: pointer;
  };

  &&: hover ~ div {
    background-image: url(${peopleActiveImg});
  };
`;

const People = ({ region, left, top }) => {
  const { regionGroup, setRegionGroup, setGroupSelection, setMessage } = useGlobalContext()

  const handlerClickGroup = (selectedGroup) => {
    setRegionGroup({...regionGroup, [region]: selectedGroup})
    setGroupSelection(prev => ({ ...prev, selectedGroup: prev.selectedGroup + 1 }))
    setMessage(prev =>  ({ ...prev, messageAction: " Next" }))
  }

  return (
    <WrapIconPeople isSelected={regionGroup[region] && true} left={left} top={top}>
      <IconPeople
        width="35%"
        height="110%"
        onClick={() => handlerClickGroup(3)}
      />
      <IconPeople
        width="30%"
        height="90%"
        onClick={() => handlerClickGroup(2)}
      />
      <IconPeople
        width="25%"
        height="70%"
        onClick={() => handlerClickGroup(1)}
      />
    </WrapIconPeople>
  );
}

export default People;
