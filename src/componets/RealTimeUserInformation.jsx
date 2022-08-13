import * as React from 'react';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Box from '@cloudscape-design/components/box';
import ColumnLayout from '@cloudscape-design/components/column-layout';

function RealTimeUserInformation() {
  return (
    <Container
      header={(
        <Header
          variant="h2"
          description="현재 서버에 접속 중인 게이머들을 보여줍니다."
        >
          실시간 유저 정보
        </Header>
      )}
    >
      <ColumnLayout columns={2}>
        <Box>총 접속자 수 : 3</Box>
        <Box float="right">5/100</Box>
      </ColumnLayout>
    </Container>

  );
}

export default RealTimeUserInformation;
