import * as React from 'react';
import Box from '@cloudscape-design/components/box';
import ColumnLayout from '@cloudscape-design/components/column-layout';
import TopHeader from '../layouts/navigator';
import RealTimeUserInformation from '../componets/RealTimeUserInformation';
import Notice from '../componets/Notice';
import Whitelist from '../componets/Whitelist';

export default function App() {
  return (
    <>
      <TopHeader />
      <Box margin="xs">
        <RealTimeUserInformation />
      </Box>
      <Box margin="xs">
        <ColumnLayout columns={2}>
          <Notice />
          <Whitelist />
        </ColumnLayout>
      </Box>
    </>
  );
}
