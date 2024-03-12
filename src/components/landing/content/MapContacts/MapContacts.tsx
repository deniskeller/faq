//@ts-nocheck
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from '@react-google-maps/api';
import React, { useEffect, useRef, useState } from 'react';
// import { isMobile, isTablet } from 'react-device-detect';

//убрать //@ts-nocheck и описать типы
interface ICenter {
  lat: number;
  lng: number;
}

interface Props {
  center: ICenter;
  marker_title: string;
}

const MapContacts: React.FC<Props> = ({ center, marker_title = '' }) => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP;
  const [popupOpen, setPopupOpen] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyC9ofxwIKyzFAYZiDL4l7Xg9SdPqKGqRjg',
  });
  const mapRef = useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback() {
    mapRef.current = undefined;
  }, []);

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  var styles = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#bdbdbd',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dadada',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#c9c9c9',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
  ];

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{ styles: styles, disableDefaultUI: true }}
        >
          <MarkerF
            onLoad={onLoad}
            onClick={() => {
              setPopupOpen(true);
            }}
            position={center}
          >
            {popupOpen ? (
              <InfoWindowF onCloseClick={() => setPopupOpen(false)}>
                <div>{marker_title}</div>
              </InfoWindowF>
            ) : null}
          </MarkerF>
        </GoogleMap>
      ) : (
        'Loading map...'
      )}
    </>
  );
};

export default MapContacts;
