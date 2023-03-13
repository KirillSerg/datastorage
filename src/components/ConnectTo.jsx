import { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { useGlobalContext } from "../contexts/GlobalContext";
import s_de_asia_1_red from "../img/connections/from_europe/s_de-asia_1_red.png";
import s_de_asia_2_red from "../img/connections/from_europe/s_de-asia_2_red.png";
import s_de_asia_3_red from "../img/connections/from_europe/s_de-asia_3_red.png";
import s_de_au_1_red from "../img/connections/from_europe/s_de-au_1_red.png.png";
import s_de_au_2_red from "../img/connections/from_europe/s_de-au_2_red.png.png";
import s_de_au_3_red from "../img/connections/from_europe/s_de-au_3_red.png.png";
import s_de_us_1_red from "../img/connections/from_europe/s_de-us_1_red.png.png";
import s_de_us_2_red from "../img/connections/from_europe/s_de-us_2_red.png.png";
import s_de_us_3_red from "../img/connections/from_europe/s_de-us_3_red.png.png";
import s_de_SouthА_1_red from "../img/connections/from_europe/s_de-SouthА_1_red.png.png";
import s_de_SouthА_2_red from "../img/connections/from_europe/s_de-SouthА_2_red.png.png";
import s_de_SouthА_3_red from "../img/connections/from_europe/s_de-SouthА_3_red.png.png";
import s_de_de_1_red from "../img/connections/from_europe/s_de-de_1_red.png.png";
import s_de_de_2_red from "../img/connections/from_europe/s_de-de_2_red.png.png";
import s_de_de_3_red from "../img/connections/from_europe/s_de-de_3_red.png.png";

const cloudAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
`;

const IconConnect = styled.img`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  animation: ${cloudAnimation} 2s linear infinite;
  z-index: 1;
`;

const ConnectTo = ({connectTo}) => {

  const {regionGroup, mainServer} = useGlobalContext()

  const connects = useMemo(() => {
    return {
      europe: {
        europe: [
          {img: s_de_de_1_red},
          {img: s_de_de_2_red},
          {img: s_de_de_3_red},
        ],
        asia: [
          {img: s_de_asia_1_red},
          {img: s_de_asia_2_red},
          {img: s_de_asia_3_red},
        ],
        australia: [
          {img: s_de_au_1_red},
          {img: s_de_au_2_red},
          {img: s_de_au_3_red},
        ],
        northAmerica: [
          {img: s_de_us_1_red},
          {img: s_de_us_2_red},
          {img: s_de_us_3_red},
        ],
        southAmerica: [
          {img: s_de_SouthА_1_red},
          {img: s_de_SouthА_2_red},
          {img: s_de_SouthА_3_red},
        ],
      },
        
    }
  }, [])

  return (
    <>
      {
        connects[mainServer][connectTo].map((loc2, i) => i < regionGroup[connectTo] ?
            <IconConnect key={i} src={loc2.img} /> :
            null)
      }
    </>
  );
}

export default ConnectTo;