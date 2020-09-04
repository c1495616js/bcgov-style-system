import React from 'react';
import styled from 'styled-components';
// import { themeGet } from '@styled-system/theme-get';

const Nav = styled.nav`
  display: none;
  position: fixed;
  top: 65px;
  color: #fcba19;
  background-color: #38598a;
  width: 100%;
  -webkit-box-shadow: 0 6px 8px -4px #b3b1b3;
  -moz-box-shadow: 0 6px 8px -4px #b3b1b3;
  box-shadow: 0 6px 8px -4px #b3b1b3;

  .container {
    padding: 10px 0 10px 0;

    ul {
      display: flex;
      flex-direction: column;
      margin: 0;
      color: #fff;
      list-style: none;

      /* border-style: dotted;
        border-width: 1px;
        border-color: red; */

      .active {
        text-decoration: underline;
        font-weight: bold;
      }

      li {
        margin: 5px 0;

        a {
          display: flex;
          font-size: 0.813em;
          font-weight: normal; /* 400 */
          color: #fff;
          padding: 0 15px 0 15px;
          text-decoration: none;
          /* border-style: dotted;
            border-width: 1px;
            border-color: green; */

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: block;

    .container ul {
      flex-direction: row;
    }

    .container ul li {
      margin: 0;
    }

    .container ul li a {
      border-right: 1px solid #9b9b9b;
    }
  }
`;

export default function () {
  return (
    <Nav>
      <div class="container">
        <ul>
          <li>
            <a href="sample.html" class="active">
              Link 1
            </a>
          </li>
          <li>
            <a href=".">Link 2</a>
          </li>
          <li>
            <a href=".">Link 3</a>
          </li>
          <li>
            <a href=".">Link 4</a>
          </li>
          <li>
            <a href=".">Link 5</a>
          </li>
          <li>
            <a href=".">Link 6</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}
