import React, {useState} from "react";

import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {Add, Remove} from "@mui/icons-material";
import {mobile} from "../responsive"


const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding:"10px", flexDirection:"column"})}

`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:"40vh"})}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding:"10px"})}
`;

const Title = styled.h1`
    font-weight: 200;
  
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  //width: 20px;
  //height: 20px;
  //border-right: 50px;
  //background-color: #fff;
  //margin: 0px 5px;
  //cursor: pointer;

  margin-left: 10px;
  padding: 10px;
`;

const FilterSizeOption = styled.option`
`;

const FilterType = styled.select`
  margin-left: 10px;
  padding: 13px;
  
`;

const FilterTypeOption = styled.option`
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  
  &:hover{
    background-color: #f8f4f4;
  }
`;


const Product=()=>{
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://images.prom.ua/3458089725_w700_h500_armatura-32-mera.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Арматура 6 міра</Title>
                    <Desc>Теоретична вага 0.25</Desc>
                    <Price>₴ 3000</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>6</FilterSizeOption>
                                <FilterSizeOption>8</FilterSizeOption>
                                <FilterSizeOption>10</FilterSizeOption>
                                <FilterSizeOption>12</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                        <Filter>
                            <FilterTitle>Тип</FilterTitle>
                            <FilterType>
                                <FilterTypeOption>АРМАТУРА</FilterTypeOption>
                                <FilterTypeOption>БАЛКА</FilterTypeOption>
                                <FilterTypeOption>КАТАНКА</FilterTypeOption>
                                <FilterTypeOption>ДРІТ</FilterTypeOption>
                                <FilterTypeOption>КРУГИ</FilterTypeOption>
                            </FilterType>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1 кг</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
}

export default Product;