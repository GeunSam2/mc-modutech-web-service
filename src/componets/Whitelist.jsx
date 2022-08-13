import { useState } from 'react';
import Input from '@cloudscape-design/components/input';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Table from '@cloudscape-design/components/table';
import DatePicker from '@cloudscape-design/components/date-picker';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import Icon from '@cloudscape-design/components/icon';

function Notice() {
  const [birthDay, setBirthDay] = useState('');
  const [userName, setUserName] = useState('');

  return (
    <Container
      header={(
        <Header
          variant="h2"
          description="서버 접속을 위한 화이트 리스트 신청 장소 입니다. 나이 정보는 운영자에게만 전달되는 정보이니 안심하고 입력해주세요."
        >
          화이트리스트 신청
        </Header>
      )}
    >
      <div style={{ height: '350px' }}>
        <Box margin={{ bottom: 's' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
            <Input
              onChange={({ detail }) => setUserName(detail.value)}
              value={userName}
              placeholder="유저 이름"
            />
            <DatePicker
              onChange={({ detail }) => setBirthDay(detail.value)}
              value={birthDay}
              openCalendarAriaLabel={(selectedDate) => `Choose Date${
                selectedDate
                  ? `, selected date is ${selectedDate}`
                  : ''}`}
              nextMonthAriaLabel="Next month"
              placeholder="YYYY/MM/DD (생년/월/일)"
              previousMonthAriaLabel="Previous month"
              todayAriaLabel="Today"
            />
            <Button variant="primary">신청</Button>
          </div>
        </Box>
        <Table
          columnDefinitions={[
            {
              id: 'date',
              header: '신청 일시',
              cell: (item) => item.date || '-',
            },
            {
              id: 'user',
              header: '마인크래프트 유저 명',
              cell: (item) => item.user_name || '-',
            },
            {
              id: 'state',
              header: '승인 상태',
              cell: (item) => item.state || '-',
            },
          ]}
          items={[
            {
              date: '2022-08-13:11:54',
              user_name: 'GeunSam2',
              state: (
                <div>
                  <Icon variant="subtle" name="status-pending" />
                &nbsp;승인 대기
                </div>
              ),
            },
            {
              date: '2022-08-12:10:00',
              user_name: 'asdf',
              state: (
                <div>
                  <Icon variant="success" name="status-positive" />
                  &nbsp;승인완료
                </div>
              ),
            },
            {
              date: '2022-08-12:10:00',
              user_name: 'asdf',
              state: (
                <div>
                  <Icon variant="success" name="status-positive" />
                  &nbsp;승인완료
                </div>
              ),
            },
            {
              date: '2022-08-12:10:00',
              user_name: 'asdf',
              state: (
                <div>
                  <Icon variant="success" name="status-positive" />
                  &nbsp;승인완료
                </div>
              ),
            },
            {
              date: '2022-08-12:10:00',
              user_name: 'asdf',
              state: (
                <div>
                  <Icon variant="success" name="status-positive" />
                  &nbsp;승인완료
                </div>
              ),
            },
            {
              date: '...',
              user_name: '...',
              state: '...',
            },
          ]}
        />
      </div>
    </Container>
  );
}

export default Notice;
