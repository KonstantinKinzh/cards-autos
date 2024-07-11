import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { dataServerStore } from "@/stores/dataServerStore/dataServerStore";
import "./maps.css";

export function Maps() {
    const closeMap = dataServerStore.closeMap;
    const longitude = dataServerStore.longitude;
    const latitude = dataServerStore.latitude;
    const coordinates =  [latitude, longitude ];

    return (
        <div onClick={closeMap} className="map-wrapper">
            <div onClick={(e) => e.stopPropagation()} className="maps">
                <YMaps>
                    <Map
                        className="maps-inner"
                        defaultState={{
                            center: coordinates,
                            zoom: 10
                        }}
                    >
                        <Placemark
                            className="maps-inner"
                            defaultGeometry={coordinates}
                            geometry={coordinates || [0, 0]} />
                    </Map>
                </YMaps>
            </div>
        </div>

    );
};