import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


export function Header() {
    const data = useStaticQuery(graphql`
    query {
        alldata {
        headers {
            imglogo {
            url
            }
            imgtaxi{
            url
            }
            bookcity
            booking
            booknow
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
    const {imglogo,imgtaxi,bookcity,taxi} = data.alldata.headers[0]
    return (
        <div>
            <img src={imglogo.url} alt=""/>
            <p>{taxi}</p>
            <p>{bookcity}</p>
            <img src={imgtaxi.url} alt=""/>
        </div>
    )
}
