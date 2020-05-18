import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import FoodImage1 from '../../../_assets/background1.jpg';
import FoodImage2 from '../../../_assets/background2.jpg';
import FoodImage3 from '../../../_assets/background1.png';
import FoodImage5 from '../../../_assets/mutton.jpg';
import FoodImage6 from '../../../_assets/food6.jpg';
import FoodImage7 from '../../../_assets/food7.jpg';
import FoodImage8 from '../../../_assets/food8.jpg';

import res1 from '../../../_assets/res1.jpg';
import res2 from '../../../_assets/res2.jpg';
import res3 from '../../../_assets/res3.jpg';
import res4 from '../../../_assets/res4.jpg';

import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationCityIcon from '@material-ui/icons/LocationCity';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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

//carousel div

const CarouselDiv = styled.div`
height:100px;
position: relative;
`;

const CarouselMain = styled(Carousel)`
height:100px;
`;

const CarouselImages = styled.img`
height:500px;
`;


//search div

const SearchDiv = styled.div`
position: relative;
margin-top:210px;
display:flex;
margin-left:80px;
position: absolute;
`;
const InputStyleForSearch = styled.input`

background-color:white;
border:none;
padding:15px;
width:300px;
margin-left:300px;
border-radius:5px;
padding-left:40px;
outline: none;
font-size:15px;
`;

const InputStyleForSearch1 = styled.input`
background-color:white;
border:none;
padding:10px;
width:300px;
margin-left:10px;
border-radius:5px;
padding-left:40px;
outline: none;
font-size:15px;

`;

const SearchButton = styled.button`
margin-left:10px;
background-color:white !important;
width:50px;
border:none;
border-radius:5px;
transition: all 0.3s ease 0s;
color:black;
&:hover {
  color: black;
}
text-decoration: none;
cursor:pointer;
outline: none;

`;

const SearchIconTag = styled(SearchIcon)`
background-color:white;
margin-top:5px;
`;

const LocationOnIconTag = styled(LocationOnIcon)`
background-color:white;
position: absolute;
left:310px;
margin-top:12px;
`;
const LocationCityIconTag = styled(LocationCityIcon)`
background-color:white;
position: absolute;
left:673px;
margin-top:12px;
`;


//card div

const CardDiv = styled.div`
display:flex;
justify-content: center;
align-items: center;
`;

const MainCard = styled(Card)`
height:250px;
width:300px;
margin-top:450px;
margin-left:10px;
`;

const CardContentDiv = styled(CardContent)`
    background-color:white;
    height:35vh;
`;

const CardMediaDiv = styled(CardMedia)`
height: 160px;
`;

const CardText = styled.h2`
font-family:fantacy;
margin-top:20px;
margin-left:40px;
`;

// Location div

const LocationDiv = styled.div`
`;

const LocationText = styled.h1`
font-family:Arial, sans-serif;
margin-left:100px;
margin-top:80px;
`;

const LocationCardDiv = styled.div`
display:flex;
justify-content: center;
align-items: center;
border-radius:50px !important;
`;

const LocationMainCard = styled(Card)`
height:450px;
width:300px;
margin-left:10px;
margin-top:30px;
cursor:pointer;
`;

const LocationCardContentDiv = styled(CardContent)`
height:35vh;
`;

const LocationCardMediaDiv = styled(CardMedia)`
height: 360px;
`;

const LocationCardText = styled.h2`
font-family:fantacy;
margin-top:20px;
margin-left:40px;
`;

//options pdiv

const OptionDiv = styled.div`
background-color:white !important;
`;

const OptionText = styled.h1`
font-family:Arial, sans-serif;
background-color:white;
margin-top:100px;
margin-left:100px;
`;

const OptionSubText = styled.h2`
font-family:Times;
margin-left:100px;
font-size:25px;
margin-top:20px;    
`;

const RestuarantDiv = styled.div`
display:flex;
margin-left:50px;
margin-top:40px;
`;
const RestuarantDiv1 = styled.div`
display:flex;
margin-left:50px;
flex-direction:column; 
`;
const RestuarantDiv2 = styled.div`
display:flex;
margin-left:50px;
flex-direction:column; 
`;

const ResturantName = styled.p`
font-family:Arial, sans-serif;
margin-left:100px;
font-size:15px;

`;

const FooterDiv = styled.div`

`;

const FooterText = styled.p`
color:black;
margin-top:100px;
padding:20px;
text-align: center;
height: 50px;
background-color: #F8F9F9;
position: relative;
margin-top: 180px;
/* negative value of footer height */
height: 100px;
clear: both;
`;




function MainHomeHtml(props) {
    return (
        <React.Fragment>
            <BodyDiv>
                {/* Carousel div */}
                <CarouselDiv>
                    <CarouselMain
                        interval={3000}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        showArrows={false}
                        infiniteLoop
                        autoPlay
                    >
                        <CarouselImages src={FoodImage1} />
                        <CarouselImages src={FoodImage2} />
                        <CarouselImages src={FoodImage3} />
                    </CarouselMain>
                </CarouselDiv>

                {/* Search div */}
                <SearchDiv>
                    <LocationOnIconTag /><InputStyleForSearch placeholder="Seach by Location" />
                    <LocationCityIconTag /><InputStyleForSearch1 placeholder="Seach by Item" />
                    <SearchButton type="submit"><SearchIconTag /></SearchButton>
                </SearchDiv>

                {/* Card div */}
                <CardDiv>

                    <MainCard>
                        <CardContentDiv>
                            <CardMediaDiv
                                image={FoodImage7}
                            />
                            <CardText>Order Food Online</CardText>
                        </CardContentDiv>
                    </MainCard>
                    <MainCard>
                        <CardContentDiv>
                            <CardMediaDiv
                                image={FoodImage5}
                            />
                            <CardText>Get Out For a Meal</CardText>
                        </CardContentDiv>
                    </MainCard>
                    <MainCard>
                        <CardContentDiv>
                            <CardMediaDiv
                                image={FoodImage6}
                            />
                            <CardText> Order spicy Items</CardText>
                        </CardContentDiv>
                    </MainCard>
                    <MainCard>
                        <CardContentDiv>
                            <CardMediaDiv
                                image={FoodImage8}
                            />
                            <CardText>Njoy Food</CardText>
                        </CardContentDiv>
                    </MainCard>
                </CardDiv>

                {/* Location Div */}
                <LocationDiv>
                    <LocationText>
                        Find Food from Your Favourite Locations
                </LocationText>
                    <LocationCardDiv>

                        <LocationMainCard>
                            <LocationCardContentDiv>
                                <LocationCardMediaDiv
                                    image={res1}
                                />
                                <LocationCardText>Bangalore</LocationCardText>
                            </LocationCardContentDiv>
                        </LocationMainCard>
                        <LocationMainCard>
                            <LocationCardContentDiv>
                                <LocationCardMediaDiv
                                    image={res2}
                                />
                                <LocationCardText>Hyderabad</LocationCardText>
                            </LocationCardContentDiv>
                        </LocationMainCard>
                        <LocationMainCard>
                            <LocationCardContentDiv>
                                <LocationCardMediaDiv
                                    image={res3}
                                />
                                <LocationCardText> Chennai</LocationCardText>
                            </LocationCardContentDiv>
                        </LocationMainCard>
                        <LocationMainCard>
                            <LocationCardContentDiv>
                                <LocationCardMediaDiv
                                    image={res4}
                                />
                                <LocationCardText>Goa</LocationCardText>
                            </LocationCardContentDiv>
                        </LocationMainCard>
                    </LocationCardDiv>
                </LocationDiv>

                {/* User needs  */}
                <OptionDiv>
                    <OptionText>
                        Explore other options for you here
                </OptionText>
                    <OptionSubText>
                        Top Restaurant Chains :
                </OptionSubText>
                    <RestuarantDiv>
                        <RestuarantDiv1>
                            <ResturantName>Burger King</ResturantName>
                            <ResturantName>Domino's</ResturantName>
                            <ResturantName>Dunkin' Donuts</ResturantName>
                            <ResturantName>KFC</ResturantName>
                        </RestuarantDiv1>
                        <RestuarantDiv2>
                            <ResturantName>Krispy Kreme</ResturantName>
                            <ResturantName>WOW! Momo</ResturantName>
                            <ResturantName>Pizza Hut</ResturantName>
                            <ResturantName>Paradise Biryani</ResturantName>
                        </RestuarantDiv2>
                        <RestuarantDiv1>
                            <ResturantName>Burger King</ResturantName>
                            <ResturantName>Domino's</ResturantName>
                            <ResturantName>Dunkin' Donuts</ResturantName>
                            <ResturantName>KFC</ResturantName>
                        </RestuarantDiv1>
                        <RestuarantDiv2>
                            <ResturantName>Krispy Kreme</ResturantName>
                            <ResturantName>WOW! Momo</ResturantName>
                            <ResturantName>Pizza Hut</ResturantName>
                            <ResturantName>Paradise Biryani</ResturantName>
                        </RestuarantDiv2>
                    </RestuarantDiv>
                </OptionDiv>


                {/* Footer div  */}

                <FooterDiv>
                    <FooterText>
                        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2020 © Sethu Media Pvt Ltd. All rights reserved.
                    </FooterText>
                </FooterDiv>
            </BodyDiv>
        </React.Fragment>
    );
}

export default MainHomeHtml;


