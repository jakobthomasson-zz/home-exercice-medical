import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import Types from "Types";
import styled from "@emotion/styled";
import Text from "components/ui/Text";
import { patientSelectors } from "store/patient";
import { HEADER_COLUMNS } from "./index";
import { Row, Column } from "components/ui/Row";
const mapStateToProps = (state: Types.RootState, { patientId }: OwnProps) => ({
  patient: patientSelectors.item(state, { patientId }),
});

type StateProps = ReturnType<typeof mapStateToProps>;
type OwnProps = { patientId: string };

type Props = StateProps & OwnProps;

const Patient: FunctionComponent<Props> = (props) => {
  const { patient } = props;

  return (
    <Row columns={HEADER_COLUMNS.map((column) => column.fr)}>
      <Column align={HEADER_COLUMNS[0] && HEADER_COLUMNS[0].align}>
        <Text text={patient.id} />
      </Column>
      <Column align={HEADER_COLUMNS[1] && HEADER_COLUMNS[1].align}>
        <Text text={patient.name} />
      </Column>
      <Column align={HEADER_COLUMNS[2] && HEADER_COLUMNS[2].align}>
        <Text text={`${patient.testIds.length}`} />
      </Column>
    </Row>
  );
};

export default connect(mapStateToProps)(Patient);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;
