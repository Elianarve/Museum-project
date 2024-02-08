import Footer from '../components/Footer';
import Body from '../components/Body';
import styled from 'styled-components';

const HomeContainer = styled.body `
background-color: #EEF0E5;
margin: 0px;
padding: 0px;
font-family: Roboto, sans-serif;
`

const Home = () => {
  return (
    <HomeContainer>
        <Body />
        <Footer />
    </HomeContainer>
  )
}

export default Home