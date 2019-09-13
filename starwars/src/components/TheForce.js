import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components'

const Name = styled.div`
color: white;
text-shadow: 1px 1px 5px black;
font-size: 25px;
`
const MainDiv = styled.div`
`

const Attr = styled.div`
border: 2px solid black;
width: 400px;
margin-left: 521px;
background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIM80gdMv6yDhb2AjnKX8oFu5sTxuz2RezX4oYYg2oEmoKjaf');
background-size: cover;
color: white;
border-radius: 20px;
text-align: center;
`



export default function CharacterCard() {
    const [ chars, setChars ] = useState([{}]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
            .then((res) => {
                const data = res.data.results;
                setChars(data);
            })
    }, [])

    return (
        <div className='main-div'>
            {chars.map(char => {
                return (
                <MainDiv>
                    <Name>
                        <strong><p>{char.name}</p></strong>
                    </Name>

                     <Attr>
                        <p>Height: {char.height}</p>
                        <p>Mass: {char.mass}</p>
                        <p>Hair Color: {char.hair_color}</p>
                        <p>Skin Color: {char.skin_color} </p>
                        <p>Eye Color: {char.eye_color} </p>
                        <p>Birth Year: {char.birth_year} </p>
                        <p>Gender: {char.gender} </p>
                    </Attr> {/* attr end */}
                </MainDiv>
                )
            })}
        </div> /* main-div end */
    )
}