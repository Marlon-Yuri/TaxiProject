import styled from 'styled-components'


export const Container = styled.div`
    height: auto;
    padding: 60px 0px;
    margin-top: 90px;
    background-color: #292828;
    color: white;
`
export const Section = styled.div`
    max-width: 1240px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    
`
export const Card = styled.div`
    width: 20%;
    height: 55vh;
    padding-left: 25px;
`
export const Navegation = styled.div`
    
`
export const BoxNav = styled.div`
    display: flex;
    align-items: center;
    width: 150px;
    height: 30px;
`
export const Item = styled.p`
    margin-left: 20px;
    font-size: 1.3rem;
    cursor: pointer;
    &:hover{
        color: #f8ca11;
    }
`
export const Title = styled.h3`
    font-size: 2rem;
`
export const BoxInfo = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const BoxNews = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const Input = styled.input`
    width: 100%;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    border: 0px;
    font-size: 17.6px;
`
export const Btn = styled.button`
    width: 70%;
    font-weight: 900;
    font-size: 1.2rem;
    color: #eceaea;
    background-color: #fecf3d;
    border: none;
    border-radius: 4px;
    text-align: center;
    padding: 12px 0px;
    cursor: pointer;
`
export const Copy = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background-color: white;
`