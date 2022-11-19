import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import ErrorPage from './Error';
import CustomerStories from './pages/CustomerStories';
import { CareerApplication } from './pages/career';
import Termsofuse from './pages/terms-of-use/Termsofuse';
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Images from './pages/dashboard/Images';
import DocumentationHome from './pages/documentation/Home/DocumentationHome';
import GettingStarted from './pages/documentation/GettingStartedPage/GettingStarted';
import Installations from './pages/documentation/InstallationsPage/Installations';
import ExamplePage from './pages/documentation/ExamplePage/ExamplePage';
import UtilitiesPage from './pages/documentation/UtilitiesPage/UtilitiesPage';
import Privacypolicy from './pages/privacypolicy/privacypolicy';

import LandingPage from './pages/LandingPage/LandingPage';
import MinergramDemo from './pages/LandingPage/MinergramDemo/MinergramDemo';

const RoutesComponents = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route exact path="" element={<LandingPage />} />
          <Route path="/demo" element={<MinergramDemo />} />
          <Route path="/documentation" element={<DocumentationHome />}></Route>
          <Route
            path="/documentation/getting-started"
            element={<GettingStarted />}
          ></Route>
          <Route path="customer-stories" element={<CustomerStories />}></Route>
          <Route
            path="/documentation/installations"
            element={<Installations />}
          ></Route>
          <Route
            path="/documentation/examples"
            element={<ExamplePage />}
          ></Route>
          <Route
            path="/documentation/utilities"
            element={<UtilitiesPage />}
          ></Route>
          <Route path="/careers/application" element={<CareerApplication />} />
          <Route path="/terms-of-use" element={<Termsofuse />}></Route>
          <Route path="/privacy-policy" element={<Privacypolicy />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>{' '}
        <Route path="" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/images" element={<Images />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesComponents;
