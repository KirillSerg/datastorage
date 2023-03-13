import { useMemo } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import ConnectTo from "./ConnectTo";

const Connections = () => {

  const { regionGroup, screenSelected } = useGlobalContext()

  const connectsTo = useMemo(() => {
    const regionConnectTo = []
    for (const key in regionGroup) {
      if (regionGroup[key] > 0) {
        regionConnectTo.push(key)
      }
    }
    return regionConnectTo
  }, [regionGroup])

  return (
    <>
      {screenSelected.isServersSelect &&
        connectsTo.map((connectTo, ind) => <ConnectTo key={ind} connectTo={connectTo} />)
      }
    </>
  );
}

export default Connections;