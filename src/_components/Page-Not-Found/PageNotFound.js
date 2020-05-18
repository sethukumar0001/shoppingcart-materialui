import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ud from '../../_assets/ud5.png';

const BodyDiv = styled.body`
background-color:white;
@media (max-width: 768px) {
    width:100%;
    margin:0px;
  }
  @media (max-width: 458px) {
  }
  @media (width: 375px) {
  }
  @media (width: 425px) { 
  }
`;

const LogoDiv = styled.div`
margin-left:450px !important;
margin-top:60px;
`;
const Logo = styled.img`
width:600px;
height:500px;
margin-top:10px;
@media (max-width: 768px) {
   display:none;
  }
    @media (max-width: 458px) {
     display:none;
    }
    @media (max-width: 1024px) {
        display:none;
       }
`;
const TextDiv = styled.h1`
margin-left:140px;
margin-top:20px;
font-family:fantacy;
`;
const SubTextDiv = styled.p`
margin-left:240px;
`;

class PageNotFound extends Component {
    render() {
        return (
            <BodyDiv>
                <LogoDiv>
                    <Logo src={ud} />

                    <TextDiv>Page Under Development</TextDiv>
                    <SubTextDiv><b>We are working on it!</b></SubTextDiv>
                </LogoDiv>
            </BodyDiv>
        )
    }
}
export default PageNotFound; 