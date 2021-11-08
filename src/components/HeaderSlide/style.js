import styled from 'styled-components'

export const Container = styled.div`
width:100vw;
height:72vh;
position:relative;
background-color:#1C1C1C;
`

export const PhoneBox = styled.div`
display:flex;
width:32vw;
height:24vh;
flex-direction:column;
justify-content:center;
align-items:center;
font-size:1.6vw;
position:absolute;
color:white;
left:15%;
background-color:#FFC125;
justify-content:space-evenly;
`
export const Phone = styled.div`
color:black;

`
export const Car = styled.div`
position:absolute;
display:flex;
height:50vh;
width:36vw;
left:13%;
top:35%;

`
export const Book = styled.div`
position:absolute;
display:flex;
color:white;
font-size:1.2vw;
justify-content:center;
align-items:center;
height:10vh;
width:36vw;
left:55%;
top:20;
`
export const InputBox = styled.div`
height:42vh;
width:45.5vw;
position: absolute;
left:49%;
background-color:white;
top:13.5%;

`
export const InpTt = styled.div`
font-size:1.2vw;
display:flex;
padding-top:2%;
justify-content:center;
align-items:center;
`
export const BoxInput = styled.div`
font-size:1.2vw;
display:flex;
width:45.5vw;
height:20vh;
flex-direction:column;
justify-content:center;
align-items:center;

`
export const InputText = styled.input`
width:38vw;
height:4vh;
`
export const Btn = styled.div`
width:12vw;
display:flex;
left:66%;
color:white;
border-radius:13%;
font-size:1vw;
background-color:#1C1C1C;
top:73%;
justify-content:center;
align-items:center;
position:absolute;
height:6vh;
&:hover {
  background-color:#FFC125;
    cursor:pointer;
  }
`