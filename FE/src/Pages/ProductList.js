import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement/Announcement';
import Footer from '../Components/Asset/Footer';
import Navbar from '../Components/Asset/Navbar';
import Newsletter from '../Components/Asset/Newsletter';
import Products from '../Components/Product/Products';


const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const Filtertext = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select  =styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option  =styled.option`

`;



const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>           
            <Title>Healing</Title>
            <FilterContainer>
                <Filter>
                    <Filtertext>
                        Filter Products: 
                    </Filtertext>  
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>                       
                        </Select>
                        <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>                       
                        </Select>    
                </Filter>
                <Filter>
                    <Filtertext>
                        Sort Products:
                    </Filtertext>
                    <Select>
                        <Option selected>
                            Newst
                        </Option>
                        <Option>Price (asc)</Option>
                        <Option>Black (desc)</Option>                      
                        </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
