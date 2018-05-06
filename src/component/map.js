import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GoogleMapContainer = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{
      lat: props.data[0].location[0].lat,
      lng: props.data[0].location[1].lng
    }}
    defaultZoom={13}>
    <MarkerList markers={props.data} />
  </GoogleMap>
));

function MarkerList(props) {
  const markers = props.markers;
  return (
    <div>
      {markers.map(marker => (
        <Marker
          title={marker.map_id}
          position={{
            lat: marker.location[0].lat,
            lng: marker.location[1].lng
          }}
          options={{
            icon: `/static/${markerLevelClassName(marker.queue_level)}.png`
          }}
          key={marker.id}
        />
      ))}
    </div>
  );
}

function markerLevelClassName(number) {
  if (number <= 3) {
    return 'shorter';
  } else if (number >= 3 && number <= 5) {
    return 'average';
  } else if (number > 5) {
    return 'longer';
  }
}

class Map extends React.Component {
  render() {
    return (
      <div>
        <GoogleMapContainer
          containerElement={<div style={{ height: `100vh`, width: '100%' }} />}
          mapElement={<div style={{ height: `100%` }} />}
          data={this.props.data}
        />
      </div>
    );
  }
}
export default Map;
