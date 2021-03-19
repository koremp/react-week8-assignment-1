import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';

import { setAccessToken } from './slice';

import { loadItem } from './services/storage';

import InitialCSS from './InitialCSS';

const Container = styled.div({
  margin: 'auto',
  width: '90%',
});

const Header = styled.header({
  fontFamily: "'Tillana', cursive",
  marginTop: '50px',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: '0.95',
  borderRadius: '5px',
  '& h1': {
    fontSize: '50px',
    margin: 0,
  },
  '& a': {
    color: '#F9FDFC',
    textDecoration: 'none',
    '&:hover': {
      color: '#5B4230',
    },
  },
});

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <Container>
      <Header>
        <h1>
          <Link to="/">Soomstaurant</Link>
        </h1>
      </Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <InitialCSS />
    </Container>
  );
}
