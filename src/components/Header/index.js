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

                    <p>{home}</p>
                    <p>{taxi}</p>
                    <p>{booking}</p>
                    <p>{contactus}</p>


                </S.Nav>
            </S.Container>
            <S.HeaderTwo>
                
            </S.HeaderTwo>

        </div>
    )
}
