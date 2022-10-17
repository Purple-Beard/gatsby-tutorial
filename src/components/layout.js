import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/layout.css'
import styled from 'styled-components'

const Navbar = styled.nav`
  background-color: #F6F7F1;
  z-index: 10;
  top: 0;
  position: fixed;
  min-width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  -webkit-box-shadow: 0px 2.98px 7.46px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2.98px 7.46px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2.98px 7.46px 0px rgba(0, 0, 0, 0.1);

  ul {
    display: flex;
    list-style: none;
    gap: 25px;
  }
`

const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

const Section = styled.section`
  background-color: #01B282;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 40vh;
    border-radius: 25px;
  }
`

const Layout = ({pageTitle, pageSummary, children}) => {
  return (
    <div>
      <Navbar>
        <Link to='/'><span className='logo'>Sample.</span></Link>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </Navbar>
      <Main>
        <h1>{pageTitle}</h1>
        <p>{pageSummary}</p>
      </Main>
      <Section>
        {children}
      </Section>
    </div>
  )
}

export default Layout