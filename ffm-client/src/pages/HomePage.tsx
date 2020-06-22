import React from 'react';
import { Route } from 'react-router-dom';
import HomeLayout from '@/components/home/HomeLayout';
import HomeTemplate from '@/components/home/HomeTemplate';
import HomeResponsive from '@/components/home/HomeResponsive';
import MainTrendingPage from './MainTrendingPage';

export type HomePageProps = {};

function HomePage(props: HomePageProps) {
  return (
    <HomeTemplate>
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
