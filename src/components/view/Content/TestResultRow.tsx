import React, { FunctionComponent, useMemo } from "react";
import { connect } from "react-redux";
import Types from "Types";
import { testResultSelectors } from "store/testResult";
import { Row, Column } from "components/ui/Row";
import Text from "components/ui/Text";
import Icon from "components/ui/Icon";
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
  const {
    testResult: {
      collected,
      testCode,
      testName,
      result,
      unit,
      barcode,
      refrangeHigh,
      refrangeLow,
    },
  } = props;

  const diagnoseColumnm = useMemo(() => {
    // range exists
    if (refrangeLow && refrangeHigh) {
      return result >= refrangeLow && result <= refrangeHigh ? (
        <Icon type="happy-face" size="small" />
      ) : (
        <Icon type="sad-face" size="small" />
      );
    }
    // higher limit exists
    if (refrangeHigh && !refrangeLow) {
      return result <= refrangeHigh ? (
        <Icon type="happy-face" size="small" />
      ) : (
        <Icon type="sad-face" size="small" />
      );
    }
    // lower limit exists
    if (refrangeLow && !refrangeHigh) {
      return result >= refrangeLow ? (
        <Icon type="happy-face" size="small" />
      ) : (
        <Icon type="sad-face" size="small" />
      );
    }
    return <Text text="-" />;
  }, [refrangeHigh, refrangeLow, result]);

  const rangeValue = useMemo(() => {
    if (!refrangeHigh && refrangeLow) return `>= ${refrangeLow} ${unit}`;
    if (!refrangeLow && refrangeHigh) return `<= ${refrangeHigh} ${unit}`;
    if (refrangeLow && refrangeHigh)
      return `${refrangeLow}-${refrangeHigh} ${unit}`;

    return "-";
  }, [refrangeHigh, refrangeLow, unit]);
  return (
    <Row columns={HEADER_COLUMNS.map((column) => column.fr)}>
      <Column align={HEADER_COLUMNS[0] && HEADER_COLUMNS[0].align}>
        <Text text={collected} />
      </Column>
      <Column align={HEADER_COLUMNS[1] && HEADER_COLUMNS[1].align}>
        <Text text={`${barcode}`} />
      </Column>
      <Column align={HEADER_COLUMNS[2] && HEADER_COLUMNS[2].align}>
        <Text text={`${testCode}, ${testName}`} />
      </Column>
      <Column align={HEADER_COLUMNS[3] && HEADER_COLUMNS[3].align}>
        {result === "Pending" ? (
          <Text text={result} variation={{ italic: true }} />
        ) : (
          <Text text={`${result} ${unit || ""}`} />
        )}
      </Column>
      <Column align={HEADER_COLUMNS[4] && HEADER_COLUMNS[4].align}>
        <Text text={rangeValue} variation={{ italic: true }} />
      </Column>
      <Column align={HEADER_COLUMNS[5] && HEADER_COLUMNS[5].align}>
        {diagnoseColumnm}
      </Column>
    </Row>
  );
};

export default connect(mapStateToProps)(TestResultRow);
