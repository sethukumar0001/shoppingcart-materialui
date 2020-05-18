import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CartData from '../Json/app';

import FoodImage2 from '../../../_assets/food7.jpg';
import history from '../../../_helpers/history';


const MainDiv = styled.div`

`;


const CardDiv = styled.div`

`;

const MainCard = styled(Card)`
margin-left:300px;
margin-right:300px;
cursor:pointer;
margin-top:20px;
height:auto;


`;
const CardContentDiv = styled(CardContent)`
// background-color:#F8F9F9;
`;

const OrderItemImage = styled.img`
position:relative;
width:150px;
height:150px;
border-radius:10px;
`;

const ContentHeader = styled.h2`
position:absolute;
margin-top:-150px;
margin-left:180px;
color:#273746;
`;


const ContentText = styled.h3`
position:absolute;
margin-top:-105px;
margin-left:180px;
color:#566573;
`;
const ContentSubText = styled.h4`
position:absolute;
font-weight:500px;
color:#808B96;
margin-top:-70px;
margin-left:180px
`
const ContentSubText1 = styled.h4`
position:absolute;
font-weight:500px;
color:#DC7633;
margin-top:-40px;
margin-left:180px
`;

const ContentSubText2 = styled.h4`
position:absolute;
font-weight:500px;
color:#45B39D;
margin-top:-13px;
margin-left:180px
`;

const RatingDiv = styled.p`
position:absolute;
margin-top:-145px;
margin-left:740px;
background:#28B463;
padding:3px;
border-radius:5px;
color:white;
`;


function OnlineHtml(props) {
    const ItemPage = (hotelName) => {
        localStorage.setItem("hotelName", hotelName)
        window.location.href = ('/itemList')

    }
    return (
        <MainDiv>
            {CartData.map((item, index) => {
                return (
                    <CardDiv>
                        <MainCard >
                            <CardContentDiv>
                                <OrderItemImage src={FoodImage2} /><ContentHeader onClick={() => ItemPage(item.hotelName)}>{item.hotelName}</ContentHeader>
                                <ContentText>
                                    {item.style}
                                </ContentText>
                                <ContentSubText>
                                    ₹ {item.price} per person | {item.time}
                                </ContentSubText>
                                <ContentSubText1>
                                    {item.offer}
                                </ContentSubText1>
                                <ContentSubText2>
                                    {item.instructions}
                                </ContentSubText2>
                                <RatingDiv>
                                    {item.rating}
                                </RatingDiv>


                            </CardContentDiv>
                        </MainCard>
                    </CardDiv>
                )
            })}
        </MainDiv>
    );
}

export default OnlineHtml;
