import { NavLink } from 'react-router-dom'

import styled from 'styled-components';

 export const Icon = styled.img`
  margin: 0 0 10px 0;
`;

export const Link = styled(NavLink)` 
  color: #2196F3; 
  text-decoration: none; 
  &:hover { 
    text-decoration: underline; 
  } 
`;

export const Copyright = styled.p`
  color: rgb(0, 0, 0, 0.54);
  text-align: center;
  margin: 50px 0 0 0; 
`;