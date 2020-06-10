import React from 'react';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components'
import bg from './images/band-bg.jpg'
import logo from './images/logobj.png'
import RegistrationForm from './registrationform'
import './App.css';


const Text500 = styled.div
`  
	font-size:5.0rem;
	margin-bottom:20px;
`

const Text400 = styled.div
`  
	font-size:4.0rem;
	margin-bottom:20px;
`
const Text250 = styled.div
`  
	font-size:3.3rem;
	margin-bottom:20px;
`
const Text150 = styled.div
`  
	font-size:2.5rem;
	margin-bottom:20px;
`

const DivWithBackground = styled.div
`
  background-image: url(${bg});
  color: white;
  background-size: cover;
  padding:20px;

`

const App = () => (
    <Container style={{fontFamily:"Muli",maxWidth:"90%",textAlign:"center",color:"white"}}>
      <img src={logo} style={{width:"20%"}} />
      <Text500>Let's face it.</Text500>
      <Text250>
        <span className="glyphicon glyphicon-music"></span>&nbsp;
        Musical relationships can be as intense<br />and all-consuming as romantic ones.&nbsp;
        <span className="glyphicon glyphicon-heart" style={{color:"red"}}></span>
      </Text250>
      <Jumbotron>
        <DivWithBackground>
          <Text150>
            There are fights, hurt feelings, storming out of the room, and the occasional "silent treatment". But also times of
            unbridled bliss and harmony that you wouldn't trade for the world.
            <br /><br />
            Wouldn't it be <strong>great</strong> if we handled relationships between musicians in the same way we handle romantic ones online?
            With thoughtful consideration of a musician's <em>likes and dislikes, aspirations, personal style, preferences, and skills</em> and how those match up (or not) with another individual?
          </Text150>
          <br /><br />
          <Text250>
            The answer is coming soon. Throw us your email and zip code and we'll keep you in the loop as we prepare to launch BandJoin.com!
          </Text250>        
          <RegistrationForm></RegistrationForm>
        </DivWithBackground>
      </Jumbotron>
      <Text400>What is the Musician Compatibility Engine ™?</Text400>
      <Text250>Glad you asked! The MCE is a tool that allows an artist to find similar (or disimilar) artists based on several weighted comparison algorithms - exclusive to BandJoin.</Text250>
      <Text250>We give you a definitive compatibility rating based on the information in your profile to find your musical soul mate.</Text250>
    </Container>
)

export default App;
