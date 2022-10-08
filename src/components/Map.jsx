import React from 'react';
import GoogleMapReact from 'google-map-react';

export default function Map() {

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
            lat: 41.716667,
            lng: 44.783333
        },
        zoom: 11
    };

    return (
          <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
          >
          </GoogleMapReact>
    )
}