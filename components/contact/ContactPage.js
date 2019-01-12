import { Component, Fragment } from 'react'
import { compose, withProps } from "recompose";

import renderHTML from 'react-render-html';
import YouTube from 'react-youtube';
import NextHead from 'next/head';
import ContactHeader from './ContactHeader';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
));

export default class ContactPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <ContactHeader data={{}} />
        <section className="wn_contact_area bg--white pt--80">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="contact-form-wrap">
                  <h2 className="contact__title">Get in touch</h2>
                  <div className="google__map">
                  <MyMapComponent key="map" />
                  </div>
                </div>
                <div className="form-output">
                  <p className="form-messege">
                  </p></div>
              </div>
              <div className="col-lg-4 col-12 md-mt-40 sm-mt-40">
                <div className="wn__address">
                  <h2 className="contact__title">Get office info.</h2>
                  <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. </p>
                  <div className="wn__addres__wreapper">
                    <div className="single__address">
                      <i className="icon-location-pin icons" />
                      <div className="content">
                        <span>address:</span>
                        <p>666 5th Ave New York, NY, United</p>
                      </div>
                    </div>
                    <div className="single__address">
                      <i className="icon-phone icons" />
                      <div className="content">
                        <span>Phone Number:</span>
                        <p>716-298-1822</p>
                      </div>
                    </div>
                    <div className="single__address">
                      <i className="icon-envelope icons" />
                      <div className="content">
                        <span>Email address:</span>
                        <p>716-298-1822</p>
                      </div>
                    </div>
                    <div className="single__address">
                      <i className="icon-globe icons" />
                      <div className="content">
                        <span>website address:</span>
                        <p>716-298-1822</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </Fragment>
    )
  }
}