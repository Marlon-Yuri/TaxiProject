import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'


export function Header() {
    const data = useStaticQuery(graphql`
    query {
        alldata {
        headers {
            imglogo {
            url
            }
        
            booking
            booknow
            home
            contactus
            btnsearch
            imgtaxi2 {
            url
            }
            taxi
            telephone
            titleform
        }
        }
    }
`)
    const { imglogo,taxi, home, booking, contactus } = data.alldata.headers[0]
    return (
        <div>
            <S.Container>
                <S.Img>
                    <img src={imglogo.url} alt="" />
                </S.Img>
                <S.Nav>
                    <S.ItemMenu>{home}</S.ItemMenu>
                    <S.ItemMenu>{taxi}</S.ItemMenu>
                    <S.ItemMenu>{booking}</S.ItemMenu>
                    <S.ItemMenu>{contactus}</S.ItemMenu>
                </S.Nav>
            </S.Container>
            <S.HeaderTwo>
                
            </S.HeaderTwo>

        </div>
    )
}
