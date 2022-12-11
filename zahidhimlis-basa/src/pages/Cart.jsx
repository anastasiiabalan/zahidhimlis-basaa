import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import {Add, Remove} from "@mui/icons-material";
import {mobile} from "../responsive";
import { LOCALSTORE_TOTALITEMS } from "../models/constant";


const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding:"10px"})}

`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type=== "filled" && "none"};
  background-color: ${props => 
          props.type=== "filled" ? "black" : "transparent"};
  color: ${props => props.type=== "filled" && "white"};
`;

const TopTexts = styled.div`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  ${mobile({display:"none"})}

`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 19px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})}

`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.div`
`;

const ProductId = styled.span`
`;

const ProductSize = styled.span`
    
`;

const ProductType = styled.span`
`;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({margin:"5px 15px"})}

`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom:"20px"})}

`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type==="total" && "500"};
  font-size: ${props => props.type==="total" && "24px"};

`;

const SummaryItemText = styled.span`
`;

const SummaryItemPrice = styled.span`
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  
`;

const Cart=()=>{

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Whishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.prom.ua/3458089725_w700_h500_armatura-32-mera.jpg"/>
                                <Details>
                                    <ProductName><b>Product: </b>Арматура 6 міра</ProductName>
                                    <ProductId><b>ID: </b>45467839233</ProductId>
                                    <ProductSize><b>Size: </b>6</ProductSize>
                                    <ProductType><b>Type: </b>Арматура</ProductType>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>₴ 6000</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://metinvest-smc.com/uploads/images/product/small/268953178811a068cc5758295ecfae14.jpg?v=1629390483"/>
                                <Details>
                                    <ProductName><b>Product: </b>Балка №10</ProductName>
                                    <ProductId><b>ID: </b>4573339939</ProductId>
                                    <ProductSize><b>Size: </b>10</ProductSize>
                                    <ProductType><b>Type: </b>Балка</ProductType>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>₴ 6180</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>₴ 12180</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>₴ 100</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>₴ -100</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total" >
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>₴ 12180</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    );
}

export default Cart;