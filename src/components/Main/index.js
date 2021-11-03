import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'

export function Main() {
    const data = useStaticQuery(graphql`
    query {
        alldata {
            mains {
                car1
                car2
                car3
                circle01
                circle02
                circle03
                cardtitle
                cardtext
                cardtaxi {
                  url
                }
                main2Title
              }
            }            
        }
            
`)
    const {cardtitle, circle01, circle02, circle03, cardtaxi, car1, car2, car3, cardtext} = data.alldata.mains[0]
    return (
        <S.Container>
            <S.Div>
            <p>{cardtitle}</p>
            </S.Div>
            <S.Cards>
            <S.Card>
                <p>{circle01}</p>
                <h3>{car1}</h3>
                <p>{cardtext}</p>
                <img src={cardtaxi.url} alt=""/>
            </S.Card>
            <S.Card>
                <p>{circle02}</p>
                <h3>{car2}</h3>
                <p>{cardtext}</p>
                <img src={cardtaxi.url} alt=""/>
            </S.Card>
            <S.Card>
                <p>{circle03}</p>
                <h3>{car3}</h3>
                <p>{cardtext}</p>
                <img src={cardtaxi.url} alt=""/>
            </S.Card>
            
            </S.Cards>
           

        </S.Container>
    )
}