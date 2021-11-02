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
              }
        }
    }
`)
    const {
        twitter,titlenewslatter,titlelinks,titlefollow,titleaddress,taxi,about,booking,btnsubuscribe,
        contactUs,copyright,facebook,home,imgfacebook,imginstagram,imglinkedin,imgtwitter,imgyoutube,
        instagram,linkedin,paragraph,youtube
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
                          <S.Item>{home}</S.Item>
                          <li>{about}</li>
                          <li>{taxi}</li>
                          <li>{booking}</li>
                          <li>{contactUs}</li>
                      </S.Navegation>
                  </S.BoxInfo>
              </S.Card>
              <S.Card>
                  <S.BoxInfo>
                    <S.Title>{titlefollow}</S.Title>
                      <S.Navegation>
                        <S.BoxSocial>
                          <img src={imgfacebook.url} alt=""/>
                          <S.Media>{facebook}</S.Media>
                        </S.BoxSocial>
                        <S.BoxSocial>
                          <img src={imgtwitter.url} alt=""/>
                          <S.Media>{twitter}</S.Media>
                        </S.BoxSocial>
                        <S.BoxSocial>
                          <img src={imglinkedin.url} alt=""/>
                          <S.Media>{linkedin}</S.Media>
                        </S.BoxSocial>
                        <S.BoxSocial>
                          <img src={imgyoutube.url} alt=""/>
                          <S.Media>{youtube}</S.Media>
                        </S.BoxSocial>
                        <S.BoxSocial>
                          <img src={imginstagram.url} alt=""/>
                          <S.Media>{instagram}</S.Media>
                        </S.BoxSocial>  
                      </S.Navegation>
                  </S.BoxInfo>
              </S.Card>
              <S.Card>
                <S.BoxInfo>
                  <S.Title>{titlenewslatter}</S.Title>
                  <S.Input type="text" placeholder="Enter Your Email"/>
                  <S.Btn>{btnsubuscribe}</S.Btn>
                </S.BoxInfo>
              </S.Card>
          </S.Section>
        </S.Container>
          <S.Copy>
              <p>{copyright}</p>
          </S.Copy>
          </div>
    )
}
