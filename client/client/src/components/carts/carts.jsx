import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import styled from "styled-components";
import Announcement from '../Assest/Announcement';
import Header from '../Header';
import { NavLink } from 'react-router-dom'



const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 20px;

`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 40px;
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
  font-size: 20px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  
`;

const TopTexts = styled.div`
  
`;
const TopText = styled.span`
  font-size: 15px;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  
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

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;


const ProductSize = styled.span`

`;

const PriceDetail = styled.div`
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
  
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  
`;

const Hr = styled.hr`
  background-color: #023047;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #023047;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const Summary1 = styled.div`
  flex: 1;
  border: 0.5px solid #023047;
  border-radius: 10px;
  padding: 20px;
  margin-right: 80px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: 300;
  font-size: 15px;
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

const carts = () => {
  return (
    
    <Container>
      <Header/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton><NavLink to='/homepage' onClick={this} style={{ textDecoration: "none", color: "black",}} > CONTINUE SHOPING </NavLink></TopButton>
          <TopTexts>
            <Summary1>
            <TopText>Shopping Bag(2)</TopText>
            </Summary1>
          </TopTexts>
          
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6400/6400720cv11d.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> FIG 1
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 10000000
                  </ProductId>
                  
                  <ProductSize>
                    <b>Size:</b> 40 x 50 cm
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddOutlinedIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveOutlinedIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://cf.shopee.vn/file/74cb468b447e6d037e23a79a4d239844" />
                <Details>
                  <ProductName>
                    <b>Product:</b> FIG 2
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 20000000
                  </ProductId>
                  
                  <ProductSize>
                    <b>Size:</b> 40 x 50 cm
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddOutlinedIcon />
                  <ProductAmount>1</ProductAmount>
                  <RemoveOutlinedIcon />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      
    </Container>
  );
};

export default carts;