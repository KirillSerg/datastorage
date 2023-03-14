import { useState } from "react";
import { initialStateGroup, initialStateServers, RegionContext } from "./contexts/GlobalContext";
import styled from "styled-components";
import mapImg from "./img/map.png";
import People from "./components/People";
import Devices from "./components/Devices";
import Servers from "./components/Servers";
import Connections from "./components/Connections";
import ResultTable from "./components/ResultTable";

const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const MessageAction = styled.span`
  color: blue;
  cursor: pointer;
  pointer-events: ${props => props.disbled};
  opacity: ${props => props.disbled === "none" ? "0.3" : "1"};
`;

const BgIcon = styled.img`
  width: 100%;
  height: 96.5%;
  // position: relative;
`;

const stepMessage1 = "Where are your users? Choose the number for every region."
const stepMessage2 = "Where is your data? Choose the one spot for Object Storage system."
export const stepMessage3 = "Choose minimum two additional spots for ByteCloud and press."

const App = () => {
  const [regionGroup, setRegionGroup] = useState(initialStateGroup)
  const [groupSelection, setGroupSelection] = useState({selectedGroup: 0, selectedServers: 0})
  const [screenSelected, setScreenSelected] = useState({ isGroupSelect: false, isServersSelect: false })
  const [message, setMessage] = useState({ messageText: stepMessage1, messageAction: "" })
  const [servers, setServers] = useState(initialStateServers)
  const [mainServer, setMainServer] = useState("")
  const [finishCalculate, setFinishCalculate] = useState({ isObjectCalc: false, isByteCloudCalc: false })

  // const calculate = (calc, time) => {
  //   setTimeout(() => {
  //     console.log(calc)
  //     setFinishCalculate(prev =>  ({ ...prev, calc: true }))
  //   }, time)
  // }

  if (screenSelected.isServersSelect && !finishCalculate.isObjectCalc) {
    setTimeout(() => {
      setFinishCalculate(prev =>  ({ ...prev, isObjectCalc: true }))
    }, 5000)
  }
  if (screenSelected.isServersSelect && finishCalculate.isObjectCalc && !finishCalculate.isByteCloudCalc) {
    setTimeout(() => {
      setFinishCalculate(prev =>  ({ ...prev, isByteCloudCalc: true }))
    }, 3000)
  }

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
  if (!screenSelected.isServersSelect && groupSelection.selectedServers === Object.keys(initialStateServers).length) {
    setScreenSelected(prev => ({ ...prev, isServersSelect: true }))
    setMessage({ messageText: "", messageAction: "" })
  }

  // useEffect(() => {
  //   console.log(groupSelection)
  // },[groupSelection])
  
  return (
    <RegionContext.Provider value={{regionGroup, setRegionGroup, groupSelection, setGroupSelection, setMessage, servers, setServers, mainServer, setMainServer, screenSelected}}>
      <MainWrap>
        {finishCalculate.isByteCloudCalc && <ResultTable />}
        <div style={{height: "3.5%"}}>
          <label>{message.messageText}</label>
          <MessageAction
            disbled={(screenSelected.isGroupSelect && groupSelection.selectedServers < 3) ? "none" : "all"}
            onClick={() => handlerNextScreen()}
          >
            {message.messageAction}
          </MessageAction>
        </div>
        <BgIcon src={mapImg} />
        {!regionGroup.northAmerica && !screenSelected.isGroupSelect ?
          <People region="northAmerica" left="14%" top="33%" /> :
          <Devices region="northAmerica" left="14%" top="33%" />
        }
        {!regionGroup.southAmerica && !screenSelected.isGroupSelect ?
          <People region="southAmerica" left="22%" top="70%" /> :
          <Devices region="southAmerica" left="22%" top="70%" />
        }
        {!regionGroup.europe && !screenSelected.isGroupSelect ?
          <People region="europe" left="45%" top="34%" /> :
          <Devices region="europe" left="45%" top="34%" />
        }
        
        {!regionGroup.asia && !screenSelected.isGroupSelect ?
          <People region="asia" left="65%" top="42%" /> :
          <Devices region="asia" left="65%" top="42%" />
        }
        
        {!regionGroup.australia && !screenSelected.isGroupSelect ?
          <People region="australia" left="76%" top="75%" /> :
          <Devices region="australia" left="76%" top="75%" />
        }

        <Servers serverRegion="northAmericaWest" left="10%" top="37%" />
        <Servers serverRegion="northAmericaEast" left="27%" top="32%" />
        <Servers serverRegion="europe" left="44%" top="27%" />
        <Servers serverRegion="asia" left="75%" top="57%" />

        <Connections />
      </MainWrap>
    </RegionContext.Provider>
  );
}

export default App;
