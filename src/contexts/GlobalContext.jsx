import { createContext, useContext } from "react"

export const initialState = {
  northAmerica: {
    group: "",
    devices: 0,
    mainServer: false,
    additionalserver: false
  },
  europ: {
    group: "",
    devices: 0,
    mainServer: false,
    additionalserver: false
  },
}

export const RegionContext = createContext({
  regionData: initialState,
  setRegionData: () => {},
})

export const useGlobalContext = () => useContext(RegionContext)