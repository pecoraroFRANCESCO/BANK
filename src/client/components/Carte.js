import * as React from "react";
import L from "leaflet";
// import icon from "../img/navigate.png";

export default class Carte extends React.Component {
    render() {
        window.onload = () => {
            navigator.geolocation.getCurrentPosition(location => {
                let latlng = new L.LatLng(
                        location.coords.latitude,
                        location.coords.longitude,
                    ),
                    map = L.map("mapid").setView(latlng, 13),
                    // PositionIcon = L.icon({

                    //     iconUrl: icon,
                    //     iconSize: [30, 30],
                    // });

                    // eslint-disable-next-line no-unused-vars
                    marker = L.marker(latlng).addTo(map);

                L.tileLayer(
                    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
                    {
                        attribution:
                            'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
                        maxZoom: 18,
                        id: "mapbox.streets",
                        accessToken:
                            "pk.eyJ1Ijoic3RldjA3IiwiYSI6ImNqc2RkZm13ZTA2Y3o0OW1kb3N2eGo4bGoifQ.xzYNRvfOYN7zcoU8bnabJA",
                    },
                ).addTo(map);
            });
        };
        return (
            <div
                id="mapid"
                // className="styles.container"
            />
        );
    }
}
