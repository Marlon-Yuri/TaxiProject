import styled from 'styled-components'

export const Container = styled.section`
    width:100%;
    height:100vh;
    background-color:#1C1C1C;
    position:relative;
    display:flex;
    justify-content:center;
`

export const Div = styled.div`
font-size:4vw;
width:19vw;
height:12vh;
position:absolute;
top:10%;
font-weight:bolder;
color:white;
`

export const Card = styled.div`
color: gray;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
background-color:white;
`

export const Cards = styled.section`
display:flex;
position:relative;
top:30%;
width:68vw;
justify-content:space-between;
height: 60vh;
`
export const SectionBackground = styled.section`
    width: 98.9vw;
    height: 100vh;
    background-color: blue;
    position: relative;
`
export const Background = styled.img`
    width: 98.9vw;
`
export const BoxTitle = styled.div`
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: red;
    position: absolute;
    top: 100px;
    right: 500px;
`
export const TitleDown = styled.p`
    font-size: 2rem;
    font-weight: 900;
`
export const TitleApp = styled.p`
    font-size: 2rem;
    font-weight: 400;
`
export const CellPhone = styled.img`
    width: 20%;
    position: absolute;
    top: 100px;
    right: 50px;
`