import { useEffect, useState } from "react";
import { initialState, RegionContext } from "./contexts/GlobalContext";
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

const MessageAction = styled.a`
  text-decoration: none;
  color: blue;
`;

const BgIcon = styled.img`
  width: 100%;
  height: 100%;
  padding: 1%;
`;

const App = () => {
  const [regionData, setRegionData] = useState(initialState)
  const [groupSelection, setGroupSelection] = useState({selectedGroup: 0, selectedServices: 0})
  const [screenSelected, setScreenSelected] = useState({ isGroupSelect: false, isServersSelect: false })
  const [message, setMessage] = useState({ messageText: "Where are your users? Choosethe number for every region.", messageAction: "" })

  const handlerNextScreen = () => {
    setScreenSelected(prev => ({ ...prev, isGroupSelect: true }))
    setMessage({messageText: "Where is your data? Choosethe one spot for Object Storage system.", messageAction: "" })
  }

  if (!screenSelected.isGroupSelect && groupSelection.selectedGroup === Object.keys(initialState).length) {
    setScreenSelected(prev => ({ ...prev, isGroupSelect: true }))
    setMessage({messageText: "Where is your data? Choosethe one spot for Object Storage system.", messageAction: "" })
  }

// console.log(screenSelected)
  // useEffect(() => {
  //   console.log(screenSelection)
  // },[screenSelection])
  
  return (
    <RegionContext.Provider value={{regionData, setRegionData, groupSelection, setGroupSelection, setMessage}}>
      <MainWrap>
        <label>{message.messageText}</label>
        <MessageAction href="#" onClick={() => handlerNextScreen()}>{message.messageAction}</MessageAction>
        <BgIcon src={mapImg} />
        {!regionData.northAmerica.group ?
          <People region="northAmerica" left="10%" top="33%" /> :
          <Devices region="northAmerica" left="10%" top="33%" />
        }
        {screenSelected.isGroupSelect &&
          <Servers region="northAmerica" left="10%" top="33%" />
        }
        {!regionData.southAmerica.group ?
          <People region="southAmerica" left="21%" top="64%" /> :
          <Devices region="southAmerica" left="21%" top="64%" />
        }

        {!regionData.europe.group ?
          <People region="europe" left="42%" top="29%" /> :
          <Devices region="europe" left="42%" top="29%" />
        }

        {!regionData.asia.group ?
          <People region="asia" left="65%" top="37%" /> :
          <Devices region="asia" left="65%" top="37%" />
        }

        {!regionData.australia.group ?
          <People region="australia" left="75%" top="73%" /> :
          <Devices region="australia" left="75%" top="73%" />
        }

      </MainWrap>
    </RegionContext.Provider>
  );
}

export default App;
