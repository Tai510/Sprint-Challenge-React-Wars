import React, {useState , useEffect} from 'react';
import axios from 'axios';
import './App.css';
import TheForce from './components/TheForce';
import styled, { css } from 'styled-components'
// import StarwarsChar from './components/StarWarsChar'
// import StarWarsCard from './components/StarWarsCard';

const AppDiv = styled.div`
text-align: center;
background-image: url('https://i.imgur.com/OuSizUw.jpg');
background-repeat: no-repeat;
background-size: cover;
`

const Header = styled.h1`
color: white;
text-shadow: 1px 1px 5px black;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starWarsChars, setStarWarsChars] = useState([{}])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then((res) => {
      const data = res.data.results
        setStarWarsChars(data)
        return res;  
    })
    .then((res) => {
        console.log('data', res.data)
    })
    .catch(err => {
        console.log('Cant find StarWars Data' , err)
    })
}, [])

  return (
    <AppDiv>
        <Header>React Wars</Header>
          <TheForce starWarsChars={starWarsChars} />
    </AppDiv>
  );
}

export default App;
