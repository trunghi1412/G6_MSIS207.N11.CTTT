import React from 'react'
import styled from 'styled-components'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const Container = styled.div`
  height: 60vh;
  background-color: #bcb8b1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: solid white;
  border-radius: 30px;
  background-color: #8a817c;
  color: white;
`;

const Send =styled.div`
    cursor: pointer;

`;

const Newsletter = () => {
    return (
      <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
          <Input placeholder="Your email" />
          <Button>
            <Send>
                <SendOutlinedIcon/>
            </Send>
          </Button>
        </InputContainer>
      </Container>
    );
  };

export default Newsletter
