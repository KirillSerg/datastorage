import { createContext, useContext } from "react"

export const initialState = {
  northAmerica: {
    group: 0,
    devices: 0,
    mainServer: false,
    additionalserver: false
  },
  southAmerica: {
    group: 0,
    devices: 0,
    mainServer: false,
    additionalserver: false
  },
  europe: {
    group: 0,
    devices: 0,
    mainServer: false,
    additionalserver: false
  },
  asia: {
    group: 0,
    devices: 0,
    mainServer: false,
    additionalserver: false
  },
  australia: {
    group: 0,
    devices: 0,
    mainServer: false,
    additionalserver: false
  },
}

export const RegionContext = createContext({
  regionData: initialState,
  setRegionData: () => { },
  groupSelection: { isSelectedPeple: false, isSelectedServers: false },
  setGroupSelection: () => { },
  setMessage: () => {},
})

export const useGlobalContext = () => useContext(RegionContext)