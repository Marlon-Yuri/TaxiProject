import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height:14vh;
    display:flex;
    position:relative;
    align-items:center;
    position:fixed;
    background-color: black;
    z-index:999;


`
export const Nav = styled.nav`
    width: 40vw;
    display: flex;
    justify-content:space-evenly;
    position:absolute;
    left:51%;
`
export const ItemMenu = styled.p`
    color:white;
    font-size:1.5vw;
    &:hover {
        color:yellow;
        cursor:pointer;
    }
`
export const Img = styled.div`
    margin-left:9%;
`
export const HeaderTwo = styled.div`
padding-top:8%;


`