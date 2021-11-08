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
                pocketimg {
                    url
                  }
                  pockettitle
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
girltext, girltitle, girlimg, pockettitle,pocketimg} = data.alldata.mains[0]
    return (
        <div>
            <S.SectionCardTaxi>
                <S.TitleCardTaxi>
                    <p>{cardtitle}</p>
                </S.TitleCardTaxi>
                <S.BoxCard >
  
                    <S.Card>
                        <S.Number>
                            <p>{circle01}</p>
                        </S.Number>
                        <h3>{car1}</h3>
                        <p>{cardtext}</p>
                        <S.ImgCar src={cardtaxi.url} alt=""/>
                    </S.Card>
                    <S.Card>
                        <S.Number>
                            <p>{circle02}</p>
                        </S.Number>
                        <h3>{car2}</h3>
                        <p>{cardtext}</p>
                        <S.ImgCar src={cardtaxi.url} alt=""/>
                    </S.Card>
                    <S.Card>
                        <S.Number>
                            <p>{circle03}</p>
                        </S.Number>
                        <h3>{car3}</h3>
                        <p>{cardtext}</p>
                        <S.ImgCar src={cardtaxi.url} alt="" />
                    </S.Card>
                </S.BoxCard>
            </S.SectionCardTaxi>

            <S.SectionTextTaxi>
                <S.TitleTextTaxi>
                    <h2>{main2Title}</h2>
                </S.TitleTextTaxi>
                <S.BoxAd>
                    <S.ImgAd src={wallet.url} alt=""/>
                    <S.TextAd>
                        <h3>{wallettitle}</h3>
                        <S.ParagraphAd>{wallettext}</S.ParagraphAd>
                        <S.BtnBookNow>
                            <h3>{walletbuttom}</h3>
                        </S.BtnBookNow>
                    </S.TextAd>
                </S.BoxAd>
                <S.BoxAdReverse>
                    <S.ImgAd src={girlimg.url} alt=""/>
                    <S.TextAdReverse>
                        <h3>{girltitle}</h3>
                        <S.ParagraphAd>{girltext}</S.ParagraphAd>
                        <S.BtnBookNow>
                            <h3>{girlbuttom}</h3>
                        </S.BtnBookNow>
                    </S.TextAdReverse>
                </S.BoxAdReverse>
                <S.BoxAd>
                    <S.ImgAd src={pocketimg.url} alt="" />
                    <S.TextAd>
                        <h3>{pockettitle}</h3>
                        <S.ParagraphAd>{wallettext}</S.ParagraphAd>
                        <S.BtnBookNow>
                            <h3>{walletbuttom}</h3>
                        </S.BtnBookNow>
                    </S.TextAd>
                </S.BoxAd>
                <S.BoxAdReverse>
                    <S.ImgAd src={pocketimg.url} alt="" />
                    <S.TextAdReverse>
                        <h3>{pockettitle}</h3>
                        <S.ParagraphAd>{girltext}</S.ParagraphAd>
                        <S.BtnBookNow>
                            <h3>{girlbuttom}</h3>
                        </S.BtnBookNow>
                    </S.TextAdReverse>
                </S.BoxAdReverse>
            </S.SectionTextTaxi>

            <S.SectionBackground>
                <S.Background src={imgbackground.url} alt="" />
                <S.DivPai>
                    <S.BoxTitle>
                        <S.TextDownload>
                            <S.TitleDown>{titledownload}</S.TitleDown>
                            <S.TitleApp>{titleapptoday}</S.TitleApp>
                        </S.TextDownload>
                    </S.BoxTitle>
                    <S.BoxCellPhone>
                        <S.CellPhone src={imgcellphone.url} alt="" />
                    </S.BoxCellPhone>
                </S.DivPai>    
            </S.SectionBackground>
        </div>
    )
}