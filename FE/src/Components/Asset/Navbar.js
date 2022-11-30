import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Container = styled.div`
    height: 60px;
    background-color: #f4f3ee;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Languge = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const Input = styled.input`
    bordor-radius: 15px;
`;

const SearchContainer = styled.div`
    border: 0.5px solid #f4f3ee;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;


const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    fontsize: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Languge>
                        ENG
                    </Languge>
                    <SearchContainer>
                        <Input />
                        <Search style={{color: "gray", fontSize: 25, cursor: "pointer"}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        ECOMBG6.
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>
                        Register
                    </MenuItem>
                    <MenuItem>
                        Sign in
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={0} color="primary">
                            <ShoppingCartIcon/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>

        </Container>
    )
}

export default Navbar
