import { useState } from 'react';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Table from '@cloudscape-design/components/table';
import Pagination from '@cloudscape-design/components/pagination';
import Link from '@cloudscape-design/components/link';

function Notice() {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  return (
    <Container
      header={(
        <Header
          variant="h2"
          description="필독! 공지사항을 참고하여 불이익이 없도록 해주세요."
        >
          서버 공지사항
        </Header>
      )}
    >
      <div style={{ height: '350px' }}>

        <Table
          columnDefinitions={[
            {
              id: 'title',
              header: '공지명',
              cell: (item) => item.title || '-',
            },
            {
              id: 'description',
              header: '세부 내용',
              cell: (item) => item.description || '-',
            },
          ]}
          items={[
            {
              title: '인간성 상실 금지',
              description: '인류애를 잃고 테러행위를 하는 반동분자 같은 행동을 하지 맙시다. 걸리면 경고 없이 밴입니다 ^^.',
            },
            {
              title: '화이트리스트 신청',
              description: '서버는 화이트리스트 제도로 운영됩니다. 오른쪽에서 화이트리스트 신청을 해주세요.',
            },
            {
              title: '서버 접속 정보',
              description: '서버 주소 : mc.modutech.win | 접속 가능 버전 : 1.19.1 / 1.19.2',
            },
            {
              title: '디스코드 활용',
              description: (
                <p style={{ margin: '0' }}>
                  서버 디스코드에 와서 함께 대화하며 소통해요.&nbsp;&nbsp;
                  <Link href="https://discord.gg/PNqV4r2jvF">[디스코드 바로가기]</Link>
                </p>),
            },
            {},
            {},
          ]}
        />
        <div style={{
          position: 'absolute', bottom: '24px', left: '50%', transform: 'translate(-50%,0)',
        }}
        >
          <Pagination
            ariaLabels={{
              nextPageLabel: 'Next page',
              previousPageLabel: 'Previous page',
              pageLabel: (pageNumber) => `Page ${pageNumber} of all pages`,
            }}
            currentPageIndex={currentPageIndex}
            onChange={({ detail }) => setCurrentPageIndex(detail.currentPageIndex)}
            openEnd
            pagesCount={5}
          />
        </div>
      </div>
    </Container>
  );
}

export default Notice;
