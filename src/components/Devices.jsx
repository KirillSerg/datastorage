import styled from "styled-components";
import { useGlobalContext } from "../contexts/GlobalContext";
import display from "../img/display.png";
import laptop from "../img/laptop.png";
import phone from "../img/phone.png";

const WrapIconDevices = styled.div`
  display: flex;
  align-items: end;
  flex-direction: row-reverse;
  width: 15%;
  height: 10%;
  top: ${props => props.top || "50%"};
  left: ${props => props.left || "50%"};
  position: absolute;
`;

const IconDevices = styled.div`
  width: 33%;
  height: 100%;
  background-image: url(${props => props.bg || {display}});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  mix-blend-mode: multiply;
`;

const Devices = ({ region, left, top }) => {

  const devicesGroup = [display, phone, laptop]
  const { regionData} = useGlobalContext()

  // const handlerClickGroup = (selectedGroup) => {
  //   setRegionData({
  //     ...regionData, [region]: {
  //       ...regionData[region], group: selectedGroup
  //     }
  //   })
  // }

  return (
    <WrapIconDevices left={left} top={top}>
      {devicesGroup.map((device, index) => (
        index < regionData[region].group ? (<IconDevices key={index} bg={device} />) : null
      ))}
    </WrapIconDevices>
  );
}

export default Devices;
