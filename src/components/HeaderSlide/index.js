import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'


export function HeaderSlide() {
    const data = useStaticQuery(graphql`
    query {
        alldata {
            slides {
                booking
                buttominput
                inputtitleslide
                phonenumber
                pickup
                titleslide
                dropinput
                wheninput
                carslide {
                  url
                }
              }
        }
    }
`)
    const { booking, carslide, phonenumber, titleslide, inputtitleslide, wheninput, dropinput, pickup, buttominput } = data.alldata.slides[0]
    return (
        <div>
            <S.Container>
                <S.PhoneBox>
                    <h1>{booking}</h1>
                    <S.Phone>
                        <h2>{phonenumber}</h2>
                    </S.Phone>
                </S.PhoneBox>
                <S.Car>
                    <img src={carslide.url} alt="" />
                </S.Car>
                <S.Book>
                    <h2>{titleslide}</h2>
                </S.Book>
                <S.InputBox>
                    <S.InpTt>
                        <h2>{inputtitleslide}</h2>
                    </S.InpTt>
                    <S.BoxInput>
                    <S.InputText type = "email" name="email"
                            placeholder={pickup}/>
                             <S.InputText type = "email" name="email"
                            placeholder={dropinput}/>
                             <S.InputText type = "email" name="email"
                            placeholder={wheninput}/>                           
                    </S.BoxInput>
                    <S.Btn>
                        <h2>{buttominput}</h2>
                    </S.Btn>

                </S.InputBox>
            </S.Container>
        </div>

    )
}
