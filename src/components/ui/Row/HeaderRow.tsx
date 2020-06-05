import React, { FunctionComponent } from "react";
import Row from "./Row";
import Column from "./Column";
import Text from "components/ui/Text";

type Props = { headerColumns: System.HeaderColumn[] };
const HeaderRow: FunctionComponent<Props> = (props) => {
  const { headerColumns } = props;

  return (
    <Row columns={headerColumns.map((headerColum) => headerColum.fr)}>
      {headerColumns.map(({ title, align }, index) => (
        <Column key={index} align={align}>
          <Text text={title} variation={{ bold: true }} />
        </Column>
      ))}
    </Row>
  );
};

export default HeaderRow;
