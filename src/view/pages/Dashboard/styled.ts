import styled from 'styled-components';

import close from 'view/assets/icons/close-up.svg';
import plus from 'view/assets/icons/plus.svg';

export const Header = styled.div`
  color: #C6213C;
  font-weight: bold;
  font-size: 18px;
  border-bottom: 1px solid #E6E6E6;
  padding: 0 0 20px 0;
  margin: 0 0 20px 0;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background: #F3F3F3;
`;

export const TBody = styled.tbody`
  tr {
    font-size: 14px;
    &:hover {
      background: #FAFAFA;
      cursor: pointer;
    }
  }
`;
export const TR = styled.tr`
  height: 40px;
  & td:nth-child(2) {
    text-align: left;
    padding: 0 0 0 20px;
  }
  & td {
    text-align: center;
  }
`;
export const TD = styled.td`
  border: 1px solid #E6E6E6;
`;

export const Product = styled.div`
  min-width: 320px;
  margin: 0 auto;
  border: 1px solid #E6E6E6;
`;

export const ProductImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  margin: 20px 0;
  border-radius: 50%;
`;

export const Content = styled.div`
  background: #F3F3F3;
  display: flex;
  padding: 10px;
  font-size: 14px;
`;

export const Left = styled.div`
  width: 50%;
  background: #F3F3F3;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 10px;
  font-weight: bold;
`;

export const Right = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

export const CloseAndAdd = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 auto;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  background: url(${close}) #FAFAFA no-repeat center;
  &:hover {
    background: url(${plus}) red no-repeat center;
  }
`;