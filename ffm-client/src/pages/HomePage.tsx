import React from 'react';
import { Route } from 'react-router-dom';
import HomeLayout from '@/components/home/HomeLayout';
import HomeTemplate from '@/components/home/HomeTemplate';
import HomeResponsive from '@/components/home/HomeResponsive';
import HeaderAnimation from '@/components/base/HeaderAnimation';

import MainTrendingPage from './MainTrendingPage';
import Header from '@/components/base/Header';

export type HomePageProps = {};

function HomePage(props: HomePageProps) {
  return (
    <HomeTemplate>
      <Header />
      <HeaderAnimation />
      <HomeResponsive>
        <HomeLayout
          main={
            <>
              <Route path={['/', '/home']} component={MainTrendingPage} exact />
            </>
          }
          side={<div />}
        />
      </HomeResponsive>
    </HomeTemplate>
  );
}

export default HomePage;
