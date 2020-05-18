import React, { useEffect, useState } from 'react';
import CartData from '../../Json/app';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FoodImage2 from '../../../../_assets/food7.jpg';

import AdjustIcon from '@material-ui/icons/Adjust';

import {useSelector,useDispatch} from 'react-redux';
import {AddItemToCart} from '../../../../_redux/_actions/CartActionCreators'

import { toast } from 'react-toastify';


const MainDiv = styled.div`

`;


const CardDiv = styled.div`

`;

const HotelNameText = styled.h2`
margin-left:50px;
`;

const MainCard = styled(Card)`
margin-left:450px;
margin-right:450px;
cursor:pointer;
margin-top:20px;
height:auto;
`;
const CardContentDiv = styled(CardContent)`
// background-color:#F8F9F9;
`;

const OrderItemImage = styled.img`
position:relative;
width:80px;
height:80px;
border-radius:10px;
`;

const ContentText = styled.h4`
position:absolute;
margin-top:-80px;
margin-left:110px;
color:#566573;
`;
const ContentSubText = styled.h5`
position:absolute;
font-weight:500px;
color:#808B96;
margin-top:-48px;
margin-left:110px
`

const RatingDiv = styled.p`
position:absolute;
margin-top:-80px;
margin-left:460px;
background:#F5B041;
padding:2px;
border-radius:5px;
color:white;
`;

const AdjustIconDivVeg = styled(AdjustIcon)`
background-color: white;
position:absolute;
width:15px !important;
margin-left:420px;
color:#145A32;
`;
const AdjustIconDivNonVeg = styled(AdjustIcon)`
background-color: white;
position:absolute;
width:15px !important;
margin-left:420px;
color:#7B241C;
`;

const CountDiv = styled.div`
position absolute;
margin-top:-20px;
margin-left:440px;
`;
const CountTag = styled.span`
position:absolute;
margin-top:10px !important;
margin-left:28px;
background-color:green;
padding:5px;
color:white;
border-radius:4px;
&:hover {
    color:black
}
`;


function ItemListHtml(props) {

    const [CartArray, setCartArray] = useState([])
    const [hotelName, setHotelName] = useState([])
    useEffect(() => {
        let cart = CartData.filter((item) => {
            if (item.hotelName === localStorage.getItem("hotelName"))
                return item
        })
        setHotelName(cart[0].hotelName)
        setCartArray(cart[0].itemList)
    }, [])

    const toastMethod = () => toast.success("You Clicked Rating",
        {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }
    );

    const dispatch = useDispatch()

    const addToCart = (item) =>{
        console.log(item)
        dispatch(AddItemToCart(item))
        window.location.href=("/itemList")
    }



    return (
        <MainDiv>
            <HotelNameText>Restuarant Name : {hotelName}</HotelNameText>
            {CartArray.map((item, index) => {
                return (
                    <CardDiv>

                        <MainCard >
                            <CardContentDiv>
                                <OrderItemImage src={FoodImage2} />{item.type === "veg" ? <AdjustIconDivVeg /> : <AdjustIconDivNonVeg />}
                                <ContentText>
                                    {item.itemName}
                                </ContentText>
                                <ContentSubText>
                                    ₹ {item.price}
                                </ContentSubText>
                                <RatingDiv onClick={toastMethod}>
                                    {item.votes}
                                </RatingDiv>
                                <CountDiv>
                                    <CountTag onClick = {()=>addToCart(item)}>Add</CountTag>
                                </CountDiv>
                            </CardContentDiv>
                        </MainCard>
                    </CardDiv>
                )
            })}

        </MainDiv>
    );
}

export default ItemListHtml;