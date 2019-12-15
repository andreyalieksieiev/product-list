import React from 'react';
import { Box } from '@material-ui/core';
import { products } from 'data';

import {
  Header, Table, Thead, TBody, TR, TD, Product, ProductImg, Avatar, Content, Left, Right, CloseAndAdd,
} from './styled';

export const Dashboard = React.memo(() => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = (): any => setWidth(window.innerWidth);
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const table = (
    <Table>
      <Thead>
        <TR>
          <TD></TD>
          <TD>Наименование</TD>
          <TD>Кол-во</TD>
          <TD>Цена за ед, ₽</TD>
          <TD>Стоимость, ₽</TD>
          <TD></TD>
        </TR>
      </Thead>
      <TBody>
      {products.map((el) => (
        <TR key={el.id}>
          <TD>
            <ProductImg src={el.img} />
          </TD>
          <TD>{el.title}</TD>
          <TD>{el.quantity}</TD>
          <TD>{el.price}</TD>
          <TD>{el.sum}</TD>
          <TD><CloseAndAdd /></TD>
        </TR>
      ))}
      </TBody>
    </Table>
  );

  const tableMobile = products.map((el) => (
    <Product key={el.id}>
      <Box display="flex" justifyContent="center">
        <Avatar src={el.img} />
      </Box>
      <Box>
        <Content>
          <Left>Наименование</Left>
          <Right>{el.title}</Right>
        </Content>
        <Content>
          <Left>Кол-во</Left>
          <Right>{el.quantity}</Right>
        </Content>
        <Content>
          <Left>Цена за ед, ₽</Left>
          <Right>{el.price}</Right>
        </Content>
        <Content>
          <Left>Стоимость, ₽</Left>
          <Right>{el.sum}</Right>
        </Content>
      </Box>
    </Product>
  ));

  return (
    <Box p="30px">
      <Header>Результаты подсчета</Header>
      {width > 991 ? table : tableMobile}
    </Box>
  )
});