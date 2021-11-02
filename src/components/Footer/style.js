import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1240px;
    margin: auto;
    height: 80vh;
    background-color: #292828;
    color: white;
`
export const Section = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
`
export const Card = styled.div`
    width: 22%;
`
export const Navegation = styled.div`
    display: flex;
    flex-direction: column;
`
export const BoxSocial = styled.div`
    display: flex;
    align-items: center;
    width: 100px;
    height: 30px;
`
export const Item = styled.li`
    list-style-image: url("../../media/examples/rocket.svg");
`
export const Media = styled.p`
    margin-left: 20px;
    font-size: 18px;
`
export const Title = styled.h3`
    font-size: 2rem;
`
export const Input = styled.input`
    width: 80%;
    padding: 10px;
    border-radius: 5px;
    border: 0px;
`
export const Btn = styled.button`
    width: 60%;
    font-size: 16pt;
    color: #eceaea;
    background-color: #fecf3d;
    border: none;
    border-radius: 4px;
    text-align: center;
    padding: 10px 0px;
    cursor: pointer;
`
export const BoxInfo = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const Copy = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background-color: white;
`