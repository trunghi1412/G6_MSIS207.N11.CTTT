import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #d9d9d9;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 1000;
`;

const Announcement = () => {
  return (
    <Container>
     <div className='title'>
        - GROUP6.FIG -
      </div>
    </Container>
    
  )
}

export default Announcement
