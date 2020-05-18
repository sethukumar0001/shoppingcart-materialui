import React, { useEffect, useState } from 'react';
import CartData from '../Json/app';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FoodImage2 from '../../../_assets/food7.jpg';
import CartEmpty from '../../../_assets/empty.png';
import res1 from '../../../_assets/res1.jpg';
import AdjustIcon from '@material-ui/icons/Adjust';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { toast } from 'react-toastify';
import {useDispatch} from 'react-redux'
import { RemoveItemToCart } from '../../../_redux/_actions/CartActionCreators';


const MainDiv = styled.div`
`;


const CardDiv = styled.div`
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
const RestuarantImage = styled.img`
width:430px;
height:170px;
border-radius:10px;
// margin-left:500px;
margin-top:10px;
`;

const ResturantName = styled.p`
position:absolute;
margin-left:2px;
margin-top:-1px;

`;

const OrderItemImage = styled.img`
position:relative;
width:80px;
height:80px;
border-radius:10px;
`;

const CartEmptyImage = styled.img`
width:680px;
height:680px;
margin-left:400px;
`;

const ContentText = styled.h3`
position:absolute;
margin-top:-80px;
margin-left:110px;
color:#566573;
`;
const ContentSubText = styled.h4`
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

const AddCircleIconDiv = styled(AddCircleIcon)`
margin-top:10px !important;
margin-right:8px;
color:#2ECC71;
`;

const RemoveCircleIconDiv = styled(RemoveCircleIcon)`
margin-top:10px !important;
margin-left:8px;
color:#E74C3C;
`;

const DeleteForeverIconDiv = styled(DeleteForeverIcon)`
position:absolute;
margin-top:80px !important;
margin-left:-15px !important;
color:red;
`;

const CountTag = styled.span`
position:absolute;
margin-top:13px !important;
margin-left:28px;
`;


function CartHtml(props) {
    console.log(props.cartData)
    const [CartArray, setCartArray] = useState(props.cartData)

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
    const removeItem = (index) => {
        dispatch(RemoveItemToCart(index))
        window.location.href="/cart"
    }

    return (
        <MainDiv>
            {/* <center> <RestuarantImage src={res1} />
            </center> */}
            {CartArray.length !== 0 ?CartArray.map((item, index) => {
                return (
                    <CardDiv>
                        <MainCard >
                            <CardContentDiv>
                                <OrderItemImage src={FoodImage2} />
                                {item.type === "veg" ? <AdjustIconDivVeg /> : <AdjustIconDivNonVeg />}
                                <ContentText>
                                    {item.itemName}
                                </ContentText>
                                <ResturantName>{item.hotelName}</ResturantName>
                                <ContentSubText>
                                    ₹ {item.price}
                                </ContentSubText>
                                <RatingDiv onClick={toastMethod}>
                                    {item.votes}
                                </RatingDiv>
                                <CountDiv>
                                    <CountTag>0</CountTag>
                                    <AddCircleIconDiv />
                                    <RemoveCircleIconDiv />
                                </CountDiv>
                                <DeleteForeverIconDiv onClick={()=>removeItem(index)}/>
                            </CardContentDiv>
                        </MainCard>
                    </CardDiv>
                )
            }):<CartEmptyImage src={CartEmpty} />}

        </MainDiv>
    );
}

export default CartHtml;