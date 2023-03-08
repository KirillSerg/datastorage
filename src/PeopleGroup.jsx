import styled from "styled-components";
import peopleNotActive from "./img/People_not_active.png";
import peopleActive from "./img/People_active.png";

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
  background-image: url(${peopleNotActive});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  mix-blend-mode: multiply;

  &&: hover {
    background-image: url(${peopleActive});

  };

  &&: hover ~ div {
    background-image: url(${peopleActive});

  };
`;

const PeopleGroup = ({ goupRegion, selectedGroup, setSelectedGroup, left, top }) => {

  return (
      <WrapIconPeople left={left} top={top}>
        <IconPeople
          width="40%"
          height="120%"
          onClick={() => { setSelectedGroup({ ...selectedGroup, [goupRegion]: "big"})}}
        />
        <IconPeople
          width="35%"
          height="100%"
          onClick={()=>{setSelectedGroup({...selectedGroup, [goupRegion]: "medium"})}}
        />
        <IconPeople
          width="30%"
          height="80%"
          onClick={()=>{setSelectedGroup({...selectedGroup, [goupRegion]: "small"})}}
        />
      </WrapIconPeople>
  );
}

export default PeopleGroup;
