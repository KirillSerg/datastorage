import { useMemo } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../contexts/GlobalContext";

const MainTableWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightgreen;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%;
`;

const WrapResultTable = styled.div`
  background-color: lightgreen;
  width: 30%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledTable = styled.table`
  width: 100%;
  margin-top: 1%;
  background-color: #96D4D4;
  text-align: center;
  border-collapse: collapse;

  tbody td {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
  };
`;

const ResultTable = () => {

  const { regionGroup } = useGlobalContext()
  
  const distanceTo = useMemo(() => {
    const distanceConnectTo = []
    for (const key in regionGroup) {
      if (regionGroup[key] > 0) {
        distanceConnectTo.push(key)
      }
    }
    return distanceConnectTo
  }, [regionGroup])

  return (
    <MainTableWrap>
      <WrapResultTable>
        <div><strong>ByteCloud</strong></div>
        {distanceTo.map((destination, ind) => (
          <StyledTable key={ind}>
            <thead>
              <tr>
                <th colSpan="2">{destination}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Latency: { }</td>
                <td>Time: { }</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">Video streaming: </td>
              </tr>
            </tfoot>
          </StyledTable>
        ))}
      </WrapResultTable>

      <WrapResultTable>
        <div><strong>Object storage</strong></div>
        {distanceTo.map((destination, ind) => (
          <StyledTable key={ind}>
            <thead>
              <tr>
                <th colSpan="2">{destination}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Latency: { }</td>
                <td>Time: { }</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">Video streaming: </td>
              </tr>
            </tfoot>
          </StyledTable>
        ))}
      </WrapResultTable>
    </MainTableWrap>
  );
}

export default ResultTable;