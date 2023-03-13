import styled, { keyframes } from "styled-components";
import { useGlobalContext } from "../contexts/GlobalContext";
import displayImg from "../img/display.png";
import laptopImg from "../img/laptop.png";
import phoneImg from "../img/phone.png";

const WrapIconDevices = styled.div`
  display: flex;
  align-items: end;
  flex-direction: row;
  width: 15%;
  height: 10%;
  top: ${props => props.top || "50%"};
  left: ${props => props.left || "50%"};
  position: absolute;
`;

const devicesAnimation = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

const IconDevices = styled.div`
  width: 33%;
  height: 100%;
  background-image: url(${props => props.bg || {displayImg}});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  mix-blend-mode: multiply;
  animation: ${devicesAnimation} 1s linear 1;
  // z-index: 2;
`;

const Devices = ({ region, left, top }) => {
  const devicesGroup = [laptopImg, displayImg, phoneImg]
  const {regionGroup} = useGlobalContext()

  return (
    <>
      {
        regionGroup[region] &&
        <WrapIconDevices left={left} top={top}>
          {devicesGroup.map((device, index) => (
            index < regionGroup[region] ? (<IconDevices key={index} bg={device} />) : null
          ))}
        </WrapIconDevices>
      }
    </>
    
  );
}

export default Devices;
