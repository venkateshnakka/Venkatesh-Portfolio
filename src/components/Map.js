import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.jpeg';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 400px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__cad__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText> Dilsukhnagar,Telanagana,India</PText>
          <a
            href="https://www.google.com/maps/place/Dilsukhnagar,+Hyderabad,+Telangana/@17.3690535,78.5263825,14z/data=!3m1!4b1!4m5!3m4!1s0x3bcb98e8b4b2913b:0x49366cfa18225a9e!8m2!3d17.3684658!4d78.5315941"
            target="_blank"
            rel="noreferrer"
            className="map__cad__link"
          >
            Open in Google Map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
