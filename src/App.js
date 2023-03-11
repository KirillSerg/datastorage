import { useEffect, useState } from "react";
import { initialStateGroup, initialStateServers, RegionContext } from "./contexts/GlobalContext";
import styled from "styled-components";
import mapImg from "./img/map.png";
import People from "./components/People";
import Devices from "./components/Devices";
import Servers from "./components/Servers";

const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const MessageAction = styled.span`
  color: blue;
  cursor: pointer;
`;

const BgIcon = styled.img`
  width: 100%;
  height: 96.5%;
`;

const stepMessage1 = "Where are your users? Choose the number for every region."
const stepMessage2 = "Where is your data? Choose the one spot for Object Storage system."
export const stepMessage3 = "Choose minimum two additional spots for ByteCloud and press."

const App = () => {
  const [regionGroup, setRegionGroup] = useState(initialStateGroup)
  const [groupSelection, setGroupSelection] = useState({selectedGroup: 0, selectedServices: 0})
  const [screenSelected, setScreenSelected] = useState({ isGroupSelect: false, isServersSelect: false })
  const [message, setMessage] = useState({ messageText: stepMessage1, messageAction: "" })
  const [servers, setServers] = useState(initialStateServers)
  const [mainServer, setMainServer] =useState("")

  const handlerNextScreen = () => {
    if (!screenSelected.isGroupSelect) {
      setScreenSelected(prev => ({ ...prev, isGroupSelect: true }))
    }
    if (screenSelected.isGroupSelect && !screenSelected.isServersSelect) {
      setScreenSelected(prev => ({ ...prev, isServersSelect: true }))
      setMessage({ messageText: "", messageAction: "" })
    }

    
    if (!screenSelected.isGroupSelect) {
      setMessage({ messageText: stepMessage2, messageAction: "" })
    }
  }

  if (!screenSelected.isGroupSelect && groupSelection.selectedGroup === Object.keys(initialStateGroup).length) {
    setScreenSelected(prev => ({ ...prev, isGroupSelect: true }))
    setMessage({messageText: stepMessage2, messageAction: "" })
  }

// console.log(servers)
  useEffect(() => {
    console.log(screenSelected)
  },[screenSelected])
  
  return (
    <RegionContext.Provider value={{regionGroup, setRegionGroup, groupSelection, setGroupSelection, setMessage, servers, setServers, mainServer, setMainServer, screenSelected}}>
      <MainWrap>
        <div style={{height: "3.5%"}}>
          <label>{message.messageText}</label>
          <MessageAction href="#" onClick={() => handlerNextScreen()}>{message.messageAction}</MessageAction>
        </div>
        <BgIcon src={mapImg} />
        {!regionGroup.northAmerica && !screenSelected.isGroupSelect ?
          <People region="northAmerica" left="14%" top="33%" /> :
          <Devices region="northAmerica" left="14%" top="33%" />
        }
        {screenSelected.isGroupSelect &&
          <Servers serverRegion="northAmericaWest" left="10%" top="37%" />
        }
        {screenSelected.isGroupSelect &&
          <Servers serverRegion="northAmericaEast" left="27%" top="32%" />
        }
        {!regionGroup.southAmerica && !screenSelected.isGroupSelect ?
          <People region="southAmerica" left="22%" top="70%" /> :
          <Devices region="southAmerica" left="22%" top="70%" />
        }
        {!regionGroup.europe && !screenSelected.isGroupSelect ?
          <People region="europe" left="45%" top="34%" /> :
          <Devices region="europe" left="45%" top="34%" />
        }
        {screenSelected.isGroupSelect &&
          <Servers serverRegion="europe" left="52%" top="29%" />
        }
        {!regionGroup.asia && !screenSelected.isGroupSelect ?
          <People region="asia" left="65%" top="42%" /> :
          <Devices region="asia" left="65%" top="42%" />
        }
        {screenSelected.isGroupSelect &&
          <Servers serverRegion="asia" left="75%" top="57%" />
        }
        {!regionGroup.australia && !screenSelected.isGroupSelect ?
          <People region="australia" left="76%" top="78%" /> :
          <Devices region="australia" left="76%" top="78%" />
        }

      </MainWrap>
    </RegionContext.Provider>
  );
}

export default App;
