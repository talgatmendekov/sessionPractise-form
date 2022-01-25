import React from 'react';
import styled from 'styled-components';

const StyledContiner = styled.div`
    margin: 30px;

`


const Container = ({children}) => {
  return <StyledContiner>{children}</StyledContiner>
};

export default Container;
