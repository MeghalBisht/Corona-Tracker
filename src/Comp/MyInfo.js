import React, { useState } from 'react'
import '../CompStyle/MyInfo.css'
import styled from 'styled-components';
import corona from '../corona.png'
import snap from '../snap.png'
const ColorCard = styled.div`
    background: transparent linear-gradient(${props => props.background}) 0% 0% no-repeat 
    padding-box;   
    color: white;
    width: 250px;
    padding: 8px 4px;
    margin: 7px;
    border-radius: 6px;
    box-shadow: 0 0 4px 1.2px rgba(56, 56, 56, 0.796);
`;

function MyInfo(props) {

    let dangercolor, safecolor, upcomingcolor = '';
    const colorObj = {
        dangercolor: `125deg, #FF1100 0%, #FF1109 100%`,
        safecolor: `125deg, rgb(7, 146, 7) 0%, rgb(7, 116, 7) 100%`,
        upcomingcolor: `125deg, rgb(170, 170, 0) 0%, rgb(180, 180, 0) 100%`
    }

    const [color, setColor] = useState(colorObj.safecolor)
    const [posts, setPosts] = useState({})

    return (


        <div className="infoWrapper">
            <h2>Country Wise List</h2>
            <img className="img1" src={corona} alt="corona_img" />
            <img className="img2" src={corona} alt="corona_img" />
            <section className="colorScheme">
                <div><p className="colorBox1"></p><p>More than 1000 cases</p></div>
                <div><p className="colorBox2"></p><p>Less than 1000 cases</p></div>
                <div><p className="colorBox3"></p><p>Less than 100 cases</p></div>
            </section>

            {props.loading ? <h3 className="fetchInfoLoader"><p>Fetching data</p></h3> :
                <>
                    {props.error ? <div className="fetchInfoLoader">
                        <img src={snap} />
                        <p> Something went wrong! We're fixing it! </p>
                    </div> :

                        <section className="cardHolder">
                            {
                                props.data.map(ele => {
                                    let date = ele.updated.slice(2,19)
                                    
                                    return (
                                        <ColorCard key={ele.location} className="myCard" background={ele.confirmed < 1000 ? ele.confirmed < 100 ? colorObj['safecolor'] : colorObj['upcomingcolor'] : colorObj['dangercolor']}>
                                            <img src={corona} alt="stay safe" />
                                            <p className="Showlocation">{ele.location}</p>
                                            <p>Total cases: <span>{ele.confirmed}</span></p>
                                            <p>Recovered cases: <span>{ele.recovered}</span></p>
                                            <p>Death(s): <span>{ele.dead}</span></p>
                                            <p className="updatedOn">Last update on : {date}</p>
                                        </ColorCard>

                                    )

                                })}

                        </section>
                    }
                </>

            }

        </div>
    )
}

export default MyInfo
