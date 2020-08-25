import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import logo from '../../assets/images/BCID_H_rgb_rev.svg';

const Header = styled.header`
  background-color: #036;
  border-bottom: 2px solid ${themeGet('primary-beta')};
  padding: 0 65px 0 65px;
  color: ${themeGet('colors.white')};
  display: flex;
  height: 65px;
  top: 0px;
  position: fixed;
  width: 100%;

  .banner {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 0 10px 0 0;

    a {
        width: 20%;
    }

    img {
        width: 175px;
    }

    h1 {
        font-family: 'BCSans', 'Noto Sans', Verdana, Arial, sans-serif,
        font-weight: normal;  /* 400 */
        margin: 0px 5px 0 18px;
        visibility: hidden;
     }

     @media screen and (min-width: 600px) and (max-width: 899px) {
        h1 {
          font-size: calc(7px + 2.2vw);
          visibility: visible;
        }
      }
    
      @media screen and (min-width: 900px) {
        h1 {
          font-size: 2.0em;
          visibility: visible;
        }
      }
  }

  .other {
    display: flex;
    flex-grow: 1;
  }
`;

const Beta = styled.div`
  color: ${themeGet('primary-beta')};
  margin-top: -1em;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
`;

export default function ({ title = '', isBeta = false }) {
  return (
    <>
      <Header>
        <div className="banner">
          <a href="https://gov.bc.ca">
            <img
              src={logo}
              alt="Go to the Government of British Columbia website"
            />
          </a>
          <h1>{title}</h1>
          {isBeta && <Beta>Beta</Beta>}
        </div>
        <div className="other">&nbsp;</div>
      </Header>
    </>
  );
}
