import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'

export function Footer() {
    const data = useStaticQuery(graphql`
    query {
        alldata {
            footers {
                twitter
                titlenewslatter
                titlelinks
                titlefollow
                titleaddress
                taxi
                about
                booking
                btnsubuscribe
                contactUs
                copyright
                facebook
                home
                imgfacebook {
                  url
                }
                imginstagram {
                  url
                }
                imglinkedin {
                  url
                }
                imgtwitter {
                  url
                }
                imgyoutube {
                  url
                }
                instagram
                linkedin
                paragraph
                youtube
                imgball {
                  url
                }
              }
        }
    }
`)
    const {
        twitter,titlenewslatter,titlelinks,titlefollow,titleaddress,taxi,about,booking,btnsubuscribe,
        contactUs,copyright,facebook,home,imgfacebook,imginstagram,imglinkedin,imgtwitter,imgyoutube,
        instagram,linkedin,paragraph,youtube,imgball
        } = data.alldata.footers[0]
    return (
      <div>
        <S.Container>
            <S.Section>
                <S.Card>
                    <S.BoxInfo>
                        <S.Title>{titleaddress}</S.Title>
                        <p>{paragraph}</p>
                    </S.BoxInfo>
                </S.Card>
                <S.Card>
                    <S.BoxInfo>
                        <S.Title>{titlelinks}</S.Title>
                        <S.Navegation>
                            <S.BoxNav>
                              <img src={imgball.url} alt=""/>
                              <S.Item>{home}</S.Item>
                            </S.BoxNav>
                            <S.BoxNav>
                              <img src={imgball.url} alt=""/>
                              <S.Item>{about}</S.Item>
                            </S.BoxNav>
                            <S.BoxNav>
                              <img src={imgball.url} alt=""/>
                              <S.Item>{taxi}</S.Item>
                            </S.BoxNav>
                            <S.BoxNav>
                              <img src={imgball.url} alt=""/>
                              <S.Item>{booking}</S.Item>
                            </S.BoxNav>
                            <S.BoxNav>
                              <img src={imgball.url} alt=""/>
                              <S.Item>{contactUs}</S.Item>
                            </S.BoxNav>
                        </S.Navegation>
                    </S.BoxInfo>
                </S.Card>
                <S.Card>
                    <S.BoxInfo>
                      <S.Title>{titlefollow}</S.Title>
                        <S.Navegation>
                          <S.BoxNav>
                            <img src={imgfacebook.url} alt=""/>
                            <S.Item>{facebook}</S.Item>
                          </S.BoxNav>
                          <S.BoxNav>
                            <img src={imgtwitter.url} alt=""/>
                            <S.Item>{twitter}</S.Item>
                          </S.BoxNav>
                          <S.BoxNav>
                            <img src={imglinkedin.url} alt=""/>
                            <S.Item>{linkedin}</S.Item>
                          </S.BoxNav>
                          <S.BoxNav>
                            <img src={imgyoutube.url} alt=""/>
                            <S.Item>{youtube}</S.Item>
                          </S.BoxNav>
                          <S.BoxNav>
                            <img src={imginstagram.url} alt=""/>
                            <S.Item>{instagram}</S.Item>
                          </S.BoxNav>  
                        </S.Navegation>
                    </S.BoxInfo>
                </S.Card>
                <S.Card>
                  <S.BoxNews>
                    <S.Title>{titlenewslatter}</S.Title>
                    <S.Input type="text" placeholder="Enter Your Email"/>
                    <S.Btn>{btnsubuscribe}</S.Btn>
                  </S.BoxNews>
                </S.Card>
            </S.Section>
          </S.Container>
          <S.Copy>
              <p>{copyright}</p>
          </S.Copy>
      </div>
    )
}
