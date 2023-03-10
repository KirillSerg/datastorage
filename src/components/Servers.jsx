import styled from "styled-components";
// import { useGlobalContext } from "../contexts/GlobalContext";

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

// const IconPeople = styled.div`
//   margin-left: -10%;
//   width: ${props => props.width || "33%"};
//   height: ${props => props.height || "100%"};
//   background-image: url(${peopleNotActiveImg});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: contain;
//   mix-blend-mode: multiply;

//   &&: hover {
//     background-image: url(${peopleActiveImg});

//   };

//   &&: hover ~ div {
//     background-image: url(${peopleActiveImg});

//   };
// `;

const Servers = ({ region, left, top }) => {

  // const { regionData, setRegionData, setScreenSelection } = useGlobalContext()

  // const handlerClickGroup = (selectedGroup) => {
  //   setRegionData({
  //     ...regionData, [region]: {
  //       ...regionData[region], group: selectedGroup
  //     }
  //   })
  //   setScreenSelection(prev => {
  //     return {...prev, selectedPeopleGroup: prev.selectedPeopleGroup+1}
  //   })
  // }

  return (
    <WrapIconPeople left={left} top={top}>
      server here
      {/* <IconPeople
        width="35%"
        height="110%"
        onClick={() => { handlerClickGroup(3) }}
      />
      <IconPeople
        width="30%"
        height="90%"
        onClick={() => { handlerClickGroup(2) }}
      />
      <IconPeople
        width="25%"
        height="70%"
        onClick={() => { handlerClickGroup(1) }}
      /> */}
    </WrapIconPeople>
  );
}

export default Servers;
