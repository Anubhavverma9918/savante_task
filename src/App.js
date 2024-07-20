import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Influencers from './components/Influencers';
import Benefits from './components/Benefits';
import Brands from './components/Brands';
import How from './components/How';
import Intro from './components/IntroSection';
import Testimonials from './components/Testimonials';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0,100% 100%, 30% 98%, 0 100%);
`;

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Navbar/>
        <Body>
          <Intro/>
          <Wrapper>
            <Benefits/>
            <How/>
            <Influencers/>
          </Wrapper> 
          <Brands/> 
          <Wrapper>
            <Testimonials/>
          </Wrapper> 
          <Footer />     
        </Body>
      </Router>      
    </ThemeProvider>
  );
}

export default App;
