// src/App.js

import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FilterForm from './components/FilterForm';
import KPIReport from './components/KPIReports';
import  axios from "axios";
import { Buffer } from 'buffer';
import './App.css';

import "react-datepicker/dist/react-datepicker.css";
const auth = Buffer.from(`${process.env.REACT_APP_JIRA_USERNAME}:${process.env.REACT_APP_JIRA_API_TOKEN}`).toString('base64');
function App() {
  // const [filterData, setFilterData] = useState({});
  const getBoardsForProject = async (projectId) => {
    const apiUrl = `${process.env.REACT_APP_JIRA_BASE_URL}/jira/rest/agile/1.0/board?projectKeyOrId=JJ99299}`;
    const response = await axios.get(apiUrl, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
      },
    });

    if (response.status !== 200) {
      throw new Error('HTTP Error: ' + response.status);
    }
    console.log(response)
    return response.data.values;
  };

  getBoardsForProject();
  return (

      // <Router>
        <div className="App">
          {/* <Routes>
            <Route path="/" element={<FilterForm setFilterData={setFilterData} />} />
            <Route path="/report" element={<KPIReport {...filterData} />} />
          </Routes> */}
        </div>
      // </Router>

  );
}

export default App;