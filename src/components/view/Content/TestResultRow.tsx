import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import Types from "Types";
import { testResultSelectors } from "store/testResult";
import { Row, Column } from "components/ui/Row";
import Text from "components/ui/Text";
import { HEADER_COLUMNS } from "./index";
const mapStateToProps = (
  state: Types.RootState,
  { testResultId }: OwnProps
) => ({
  testResult: testResultSelectors.item(state, { testResultId }),
});

type StateProps = ReturnType<typeof mapStateToProps>;
type OwnProps = { testResultId: string };

type Props = StateProps & OwnProps;

const TestResultRow: FunctionComponent<Props> = (props) => {
  const { testResult } = props;
  return (
    <Row columns={HEADER_COLUMNS.map((column) => column.fr)}>
      <Column align={HEADER_COLUMNS[0] && HEADER_COLUMNS[0].align}>
        <Text text={testResult.collected} />
      </Column>
      <Column align={HEADER_COLUMNS[1] && HEADER_COLUMNS[1].align}>
        <Text text={`${testResult.barcode}`} />
      </Column>
      <Column align={HEADER_COLUMNS[2] && HEADER_COLUMNS[2].align}>
        <Text text={`${testResult.testCode}, ${testResult.testName}`} />
      </Column>
      <Column align={HEADER_COLUMNS[3] && HEADER_COLUMNS[3].align}>
        <Text text={`${testResult.result}`} />
      </Column>
    </Row>
  );
};

export default connect(mapStateToProps)(TestResultRow);
