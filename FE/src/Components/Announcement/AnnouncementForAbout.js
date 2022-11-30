import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    background-color: #003b36;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    font-weight: 500;
`;

const AnnouncementForAbout = () => {
  return (
    <Container>
        <b>- Group member -</b>
    </Container>
    
  )
}

export default AnnouncementForAbout
