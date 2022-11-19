import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import ErrorPage from './Error';
// import App from './App';
import { CareerApplication } from './pages/career';
import About from './pages/About/components/About';

import DashboardLayout from './layouts/dashboard/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Images from './pages/dashboard/Images';
import DocumentationHome from './pages/documentation/Home/DocumentationHome';
import GettingStarted from './pages/documentation/GettingStartedPage/GettingStarted';
import Installations from './pages/documentation/InstallationsPage/Installations';
import ExamplePage from './pages/documentation/ExamplePage/ExamplePage';
import UtilitiesPage from './pages/documentation/UtilitiesPage/UtilitiesPage';

import LandingPage from './pages/LandingPage/LandingPage';
import MinergramDemo from './pages/LandingPage/MinergramDemo/MinergramDemo';




const RoutesComponents = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
<<<<<<< HEAD
          <Route index path="/" element={<App />}></Route>
          <Route path="/about-us" element={<About />} />
=======
          <Route exact path="" element={<LandingPage />} />
          <Route path="/demo" element={<MinergramDemo />} />
          <Route path="/documentation" element={<DocumentationHome />}></Route>
          <Route
            path="/documentation/getting-started"
            element={<GettingStarted />}
          ></Route>
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
>>>>>>> 9b0412183fb2f4c147960d87d42308e58e2007f5
          <Route path="/careers/application" element={<CareerApplication />} />
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
        <Route path="" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
<<<<<<< HEAD
=======
          <Route path="/images" element={<Images />} />
>>>>>>> 9b0412183fb2f4c147960d87d42308e58e2007f5
        </Route>
      </Routes>
    </>
  );
};

export default RoutesComponents;
