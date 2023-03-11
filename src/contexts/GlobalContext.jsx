import { createContext, useContext } from "react"

export const initialStateGroup = {
  northAmerica: 0,
  southAmerica: 0,
  europe: 0,
  asia: 0,
  australia: 0
}

export const initialStateServers = {
  northAmericaWest: false,
  southAmericaEast: false,
  europe: false,
  asia: false
}

export const RegionContext = createContext({
  regionGroup: initialStateGroup,
  setRegionGroup: () => { },
  groupSelection: { isSelectedPeple: false, isSelectedServers: false },
  setGroupSelection: () => { },
  setMessage: () => { },
  servers: initialStateServers,
  setServers: () => { },
  mainServer: false,
  setMainServer: () => { },
  screenSelected: { isGroupSelect: false, isServersSelect: false },
  setScreenSelected: () => { },
})

export const useGlobalContext = () => useContext(RegionContext)