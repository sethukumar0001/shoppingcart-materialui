import React from 'react';
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import FoodImage2 from '../../../_assets/food4.jpg';

const MainDiv = styled.div`

`;

const HeaderText = styled.h1`
margin-left:100px;
margin-top:50px;
`;

const CardDiv = styled.div`

`;

const MainCard = styled(Card)`
margin-left:400px;
margin-right:400px;
cursor:pointer;


`;
const CardContentDiv = styled(CardContent)`
height:auto
`;

const OrderItemImage = styled.img`
position:relative;
width:75px;
height:75px;
border-radius:7px;
`;

const ContentHeader = styled.h3`
position:absolute;
margin-top:-70px;
margin-left:100px
`;

const Devider = styled.hr`
margin-top:10px;
`;

const ContentText = styled.h4`

`;
const ContentSubText = styled.h4`
font-weight:500px;
margin-left:20px;
color:#566573;
`
const ContentSubText1 = styled.h4`
color:#566573;
margin-top:20px;
font-weight:500px;
position:relative;
color:green;
`;
const ContentSubText2 = styled.h4`
color:#566573;
font-weight:500px;
margin-left:430px;
margin-top:-28px;
position:absolute;
color:red;
`
function OrdersHtml(props) {
    return (
        <MainDiv>
            <HeaderText>
            Your Orders :
            </HeaderText>
            <CardDiv>
                <MainCard>
                    <CardContentDiv>
                        <OrderItemImage src={FoodImage2}/><ContentHeader>Paradise - Chicken Biryani</ContentHeader>
                        <Devider />
                        <ContentText>
                            ITEMS
                        </ContentText>
                        <ContentSubText>
                            1 x Chicken Biryani
                        </ContentSubText>
                        <ContentText>
                            ORDERED ON
                        </ContentText>
                        <ContentSubText>
                            13 May 2020 at 1:33 pm
                        </ContentSubText>
                        <ContentText>
                            TOTAL AMOUNT
                        </ContentText>
                        <ContentSubText>
                        ₹ 138.50
                        </ContentSubText>
                        <Devider />
                        <ContentSubText1>
                          Delivered
                        </ContentSubText1>
                        <ContentSubText2>
                            Repeat Your Order ?
                        </ContentSubText2>
                    </CardContentDiv>
                </MainCard>
            </CardDiv>
        </MainDiv>
    );
}

export default OrdersHtml;