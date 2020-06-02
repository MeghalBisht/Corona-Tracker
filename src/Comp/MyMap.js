import React, { useState, useEffect } from 'react'
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl'
import '../CompStyle/MyMap.css'
import corona from '../corona.png'
function MyMap(props) {

    const [myView, setmyView] = useState({
        latitude: 20.5937,
        longitude: 78.9629,
        width: "90vw",
        height: "85vh",
        zoom: 4,
    });

    const [info, setInfo] = useState(null)
    const handleClick = (data) => {
        if (!info)
            setInfo(data)
        else setInfo(null)
    }

    return (
        <div>
            <div className="mainHeading">

                <h1>Corona Live Updates</h1>
                <h4>From the World</h4>
            <span className="tapMap">Tap on the country names to check recent updates!</span>
            </div>
            <Map style={{ margin: "auto", marginTop: "20px" }} {...myView} mapboxApiAccessToken={process.env.REACT_APP_MAP_API} onViewportChange={viewport => setmyView(viewport)} mapStyle="mapbox://styles/mapbox/dark-v9">


                {props.loading ? <h1 className="fetchMsg"><img className="coronaImg" src={corona} />Fetching data! Hold a sec..</h1> : <>
                    {props.error ? <h1 className="errorMsg"><img className="coronaImg" src={corona} />Something went wrong! We're fixing it!</h1> :
                        <div>
                            {props.data.map(data => (
                                <Marker key={data.location} latitude={data.latitude} longitude={data.longitude}>
                                    <button onClick={() => handleClick(data)} className="button" style={{ backgroundColor: `rgb(${data.confirmed},0,0)` }}>{data.location}</button>
                                </Marker>
                            ))}
                        </div>}
                    {
                        info ? (
                            
                            <Popup className="popup" longitude={info.longitude} latitude={info.latitude} onClose={() => setInfo(null)} closeOnClick={true}>
                                <div>
                                    <h1 className="countryName">{info.location}</h1>
                                    <h1 className="confirmedCount">Confirmed cases : {info.confirmed}</h1>
                                    <h2 className="deadCount">Deaths : {info.dead}</h2>
                                    <h2 className="recoveredCount">Recovered : {info.recovered}</h2>
                                </div>
                            </Popup>
                        ) : null
                    }
                </>
                }
            </Map>
        </div>
    )
}

export default MyMap
