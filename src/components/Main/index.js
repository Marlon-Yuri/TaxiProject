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
                wallettitle
                wallettext
                walletbuttom
                wallet {
                  url
                }
                cardtext
                cardtaxi {
                  url
                }
                main2Title
                girlbuttom
                girltext
                girltitle
                girlimg {
                  url
                }
                titledownload
                titleapptoday
                imgcellphone {
                url
                }
                imgbackground {
                url
                }
              }
            }            
        }
            
`)
    const { cardtitle, circle01, circle02, circle03, cardtaxi, car1, car2, car3, cardtext, titledownload, titleapptoday, imgcellphone, imgbackground 
    , main2Title, wallettitle, wallettext, walletbuttom, wallet, girlbuttom,
girltext, girltitle, girlimg} = data.alldata.mains[0]
    return (
        <div>
            <S.Container>
                <S.Div>
                    <p>{cardtitle}</p>
                </S.Div>
                <S.Cards>
                    <S.Card>
                        <S.Circle>
                            <p>{circle01}</p>
                        </S.Circle>
                        <h3>{car1}</h3>
                        <p>{cardtext}</p>
                        <S.ImgCar src={cardtaxi.url} alt=""/>
                    </S.Card>
                    <S.Card>
                        <S.Circle>
                            <p>{circle02}</p>
                        </S.Circle>
                        <h3>{car2}</h3>
                        <p>{cardtext}</p>
                        <S.ImgCar src={cardtaxi.url} alt=""/>
                    </S.Card>
                    <S.Card>
                        <S.Circle>
                            <p>{circle03}</p>
                        </S.Circle>
                        <h3>{car3}</h3>
                        <p>{cardtext}</p>
                        <img src={cardtaxi.url} alt="" />
                    </S.Card>
                </S.Cards>
            </S.Container>
            <S.Main2box>
                <S.Main2Title>
                    <h2>{main2Title}</h2>
                </S.Main2Title>
                <S.SectionWallet>
                <img src={wallet.url} alt="" />
                <S.WalletBox>
                <h3>{wallettitle}</h3>
                <p>{wallettext}</p>
                <S.BtnWallet>
                    <h3>{walletbuttom}</h3>
                </S.BtnWallet>
                
                </S.WalletBox>
                </S.SectionWallet>
                <S.SectionGirl>
                <img src={girlimg.url} alt="" />
                <S.WalletBox>
                <h3>{girltitle}</h3>
                <p>{girltext}</p>
                <S.BtnWallet>
                    <h3>{girlbuttom}</h3>
                </S.BtnWallet>
                
                </S.WalletBox>

                </S.SectionGirl>
            </S.Main2box>
            <S.SectionBackground>
                <S.Background src={imgbackground.url} alt="" />
                <S.BoxTitle>
                    <S.TextDownload>
                        <S.TitleDown>{titledownload}</S.TitleDown>
                        <S.TitleApp>{titleapptoday}</S.TitleApp>
                    </S.TextDownload>
                </S.BoxTitle>
                <div>
                    <S.CellPhone src={imgcellphone.url} alt="" />
                </div>
            </S.SectionBackground>
        </div>
    )
}