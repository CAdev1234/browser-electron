import * as React from "react";
import {Route, BrowserRouter, Routes } from "react-router-dom";
import {Header} from "./components/layouts";
import {PageAnalysis, PageMonitor, PageWorkplace} from "./pages/dashboard";

import "./styles/App.scss";
import { Layout } from "./components/layouts";

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path="/dashboard/analysis" element={<PageAnalysis />} />
          <Route path="/dashboard/monitor" element={<PageMonitor />} />
          <Route path="/" element={<PageAnalysis />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
