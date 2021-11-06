import styled from 'styled-components'

export const SectionCardTaxi = styled.section`
    
    height:125vh;
    display:flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items: center;
    background-color: #161c1e;
`
export const TitleCardTaxi = styled.div`
    width: 100%;
    height: 35vh;
    font-size:4vw;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-weight:bolder;
    color:white;
`
export const BoxCard = styled.section`
    width: 93%;
    height:100%;
    display:flex;
    justify-content:space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
`
export const Card = styled.div`
    position: relative;
    width: 29.5%;
    height: 69%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    background-color:white;
    color: #2b3436;
`
export const Circle = styled.div`
    display:flex;
    justify-content:center;
    position:absolute;
    width: 50px;
    height:50px;
    font-weight:bolder;
    align-items:center;
    top:-7.7%;
    font-size:1.8vw;
    color:#DCDCDC;
    background-color:#FFB90F;
    border-radius:50%;
`
export const ImgCar = styled.img`
    width: 80%;
`
export const SectionTextTaxi = styled.section`
    width:85%;
    height:240vh;
    display: flex;
    align-items: center;
    justify-content:space-around;
    flex-direction: column;
    margin: auto;
`
export const TitleTextTaxi = styled.div`
    height: 10vh;
    font-weight: lighter;
    font-size:2.7vw;
    margin: 50px 0;
`
export const BoxAd = styled.div`
    width: 100%;
    height:50vh;
    display:flex;
    align-items: center;
`
export const BoxAdReverse = styled.div`
    width: 100%;
    height:50vh;
    display:flex;
    align-items: center;
    flex-direction: row-reverse;
`
export const ImgAd = styled.img`
    width: 25vw;
`
export const TextAd = styled.div`
    width: 65%;
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    margin-left: 45px;
    font-size:1.4vw;
`
export const TextAdReverse = styled.div`
    width: 65%;
    height: 100%;
    display:flex;
    flex-direction:column;
    align-items: flex-end;
    justify-content:space-evenly;
    margin-right: 45px;
    text-align: right;
    font-size:1.4vw;
`
export const ParagraphAd = styled.p`
    width: 100%;
`
export const BtnBookNow = styled.div`
    width:12vw;
    height:9.5vh;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:lighter;
    background-color:#FFC125;
    color:white;
    &:hover {
        background-color:black;
        cursor:pointer;
    }
`


export const SectionBackground = styled.section`
    min-width: 98.9vw;
    max-height: 120vh;
    margin-bottom: 20px;
    position: relative;
`
export const Background = styled.img`
    width: 100%;
`
export const DivPai = styled.div`
    width: 100%;
    position: absolute;
    top: 15%;
    right: 0;
`
export const BoxTitle = styled.div`
    width:34vw;
    max-height: 30vh;
    position: absolute;
    top: 15%;
    right: 25%;
`
export const TextDownload = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    line-height: 1.80857;
    font-weight: normal;
`
export const TitleDown = styled.p`
    color: #24292b;  
    font-size: 3.7vw;
`
export const TitleApp = styled.p`
    color: #fffcf4;
    font-size: 3.7vw;
    font-weight: 400;
`
export const BoxCellPhone = styled.div`
    width: 24.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 13%;
    right: 1%;
`
export const CellPhone = styled.img`
    width: 85%;
`