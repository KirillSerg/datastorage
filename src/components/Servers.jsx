import styled, { keyframes } from "styled-components";
import { stepMessage3 } from "../App";
import { useGlobalContext } from "../contexts/GlobalContext";
import cloud_1Img from "../img/Cloud_1.png";
import cloud_2Img from "../img/Cloud_2.png";
import cloud_hoverImg from "../img/Cloud_hover.png";
import servers_blue_Img from "../img/Servers_blue.png";
import servers_blue_and_red_Img from "../img/Servers_blue_and_red.png";

const cloudAnimation = keyframes`
  0% {
    background-image: url(${props => props.bg});
  }
  50% {
    background-image: url(${cloud_2Img});
  }
  100% {
    background-image: url(${props => props.bg});
  }
`;

const IconServer = styled.div`
  width: 7%;
  height: 10%;
  top: ${props => props.top || "50%"};
  left: ${props => props.left || "50%"};
  background-image: url(${props => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  mix-blend-mode: multiply;
  position: absolute;
  animation: ${cloudAnimation} linear infinite;
  animation-duration: ${props => props.bg === cloud_1Img ? "2s" : "0s"};

  &&: hover {
    background-image: url(${props => props.bg === cloud_1Img ? cloud_hoverImg : props.bg});
    animation-duration: 0s;
  };
`;

const Servers = ({ serverRegion, left, top }) => {

  const { servers, setServers, mainServer, setMainServer, setMessage, screenSelected, setGroupSelection } = useGlobalContext()



  let bgServer = cloud_1Img

  if (mainServer === serverRegion) {
    bgServer = servers_blue_and_red_Img
  } else if (servers[serverRegion]) {
    bgServer = servers_blue_Img
  } else if (!servers[serverRegion] && screenSelected.isServersSelect) {
    bgServer = ""
  }

  const handlerClickServer = () => {
    setServers(prev => ({ ...prev, [serverRegion]: true }))
    if (!mainServer) {
      setMainServer(serverRegion)
      setMessage({messageText: stepMessage3, messageAction: " Start" })
    }
    setGroupSelection(prev => ({ ...prev, selectedServers: prev.selectedServers + 1 }))
  }

  return (
    <IconServer bg={bgServer} left={left} top={top} onClick={() => { handlerClickServer() }} />
  );
}

export default Servers;
