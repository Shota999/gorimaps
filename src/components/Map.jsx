import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAcTB6AOoQSMG5YPHVKc67CpvTEQQJyWBM"
    });
    if( !isLoaded ) return <div>Loading ...</div>

    return ( 
            <GoogleMap 
                zoom={15} 
                center={{lat: 41.725307786180615, lng: 44.7626359520697}} 
                mapContainerClassName="map_container"
            >
                <Marker position={{lat: 41.725307786180615, lng: 44.7626359520697}} />
            </GoogleMap>
     );
}
// 41.725307786180615, 44.7626359520697
export default Map;