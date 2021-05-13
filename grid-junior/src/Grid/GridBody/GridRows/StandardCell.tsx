import styled from "styled-components";
import { ICell } from "../../Interfaces/GridBody/ICell";

const CellStyled = styled.div`
  @media (max-width: 30rem) {
    .prenume-cell {
      font-weight: 1000;
    }

    .nume-cell {
      font-weight: 700;
    }
  }
`;

const StandardCell = (props: ICell) => {
  return (
    <CellStyled>
      <div className={`cell ${props.standard_type}`}>{props.cell_content}</div>
    </CellStyled>
  );
};

export default StandardCell;
