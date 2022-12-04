import React from 'react'
import { ProjectListScreen } from 'screens/project-list/'
import { useAuth } from 'context/auth-context'
import styled from '@emotion/styled'
// import styled from '@emotion/styled'
// import {Row} from 'antd'

export const AuthenticatedApp = () => {
  const { logout } = useAuth()
  return (
    <div>
      <PageHeader>
        <button onClick={logout}>退出</button>
      </PageHeader>
      <Main>
        <ProjectListScreen />
      </Main>
    </div>
  )
}

// // temporal dead zone(暂时性死区)
// const Container = styled.div`
//   display: grid;
//   grid-template-rows: 6rem 1fr;
//   height: 100vh;
// `;

// // grid-area 用来给grid子元素起名字
// const Header = styled(Row)`
//   padding: 3.2rem;
//   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
//   z-index: 1;
// `;
// const HeaderLeft = styled(Row)``;
// const HeaderRight = styled.div``;
// const Main = styled.main`
//   display: flex;
//   overflow: hidden;
// `;

const PageHeader = styled.header`
  /* background-color: green; */
  height: 6rem;
`

const Main = styled.main`
  height: calc(100vh - 6rem);
`
