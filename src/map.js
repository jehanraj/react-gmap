import React from "react";
import {
  GoogleMap,
  LoadScript,
  LoadScriptNext,
  useGoogleMap,
  StreetViewPanorama
} from "@react-google-maps/api";
import asyncLoading from "react-async-loader";
import GoogleStreetview from "react-google-streetview";

const APIkey = "AIzaSyBo6m4C52hgW-eRz-UKKh_yezXUN6gXHFw";

const center = {
  lat: 51.5072,
  lng: 0.1276
};

let Map1 = class Map1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="total">
        <LoadScriptNext key={APIkey}>
          <GoogleMap
            key={APIkey}
            visible={false}
            style={{ height: "600px", width: "400px" }}
          >
            <div
              className="mapStreetView"
              style={{ height: "600px", width: "400px" }}
            >
              <StreetViewPanorama
                position={center}
                enableCloseButton={false}
                linksControl={false}
                addressControl={true}
                visible={true}
                onLoad={(e) => {}}
                motionTracking={true}
                motionTrackingControl={true}
              />
            </div>
          </GoogleMap>
        </LoadScriptNext>
      </div>
    );
  }
};

export default Map1;
