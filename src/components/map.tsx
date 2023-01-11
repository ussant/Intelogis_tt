import React from 'react';
import {useSelector} from "react-redux";
import {MapContainer, Marker, Polyline, Popup, TileLayer, useMap} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import {LatLngExpression} from "leaflet";

const defaultCoords = [59.82934196, 30.42423701];

type ChangeViewProps = {
    center: LatLngExpression,
    zoom: number
}

function ChangeView({ center, zoom }: ChangeViewProps) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

export const Map = (): JSX.Element => {
    const {data} = useSelector(state => state) as {data: any};

    return (
        <MapContainer
            style={style}
            center={data[0] ?? defaultCoords} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ChangeView center={data[0] ?? defaultCoords} zoom={13} />
            <Marker position={data[0] ?? defaultCoords}>
                <Popup>
                    A
                </Popup>
            </Marker>
            <Polyline positions={data} />
            <Marker position={data[1] ?? defaultCoords}>
                <Popup>
                    B
                </Popup>
            </Marker>
        </MapContainer>
    );
};

const style = {
    flex: 1,
    width: '50wh',
    height: '100vh'
}