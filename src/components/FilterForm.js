// // src/components/FilterForm.js
// import React, { useState, useEffect } from 'react';
// import MultiSelect from './MultiSelect';
// import { useNavigate } from 'react-router-dom';
// import { getProjects } from '../utils/api';
// const FilterForm = ({ setFilterData }) => {
//   const [sprintStartDate, setSprintStartDate] = useState('');
//   const [sprintEndDate, setSprintEndDate] = useState('');
//   const [projects, setProjects] = useState([]);
//   const [projectManagers, setProjectManagers] = useState([]);
//   const [selectedProjectManagers, setSelectedProjectManagers] = useState([]);
//   const navigate = useNavigate();
// console.log(projectManagers)
//   useEffect(() => {
//     getProjects().then(setProjects);
//   }, []);

//   useEffect(() => {
//     if (projects.length > 0) {
//       const managerMap = new Map();

//       projects.forEach(singleProject => {
//         const { accountId, displayName } = singleProject.lead || {};
//         if (accountId) {
//           if (!managerMap.has(accountId)) {
//             managerMap.set(accountId, {
//               projectLead: displayName,
//               projectLeadAccountId: accountId,
//               projectDetails: [{ id: singleProject.id, key: singleProject.key,name : singleProject.name }],
//             });
//           } else {
//             managerMap.get(accountId).projectDetails.push({ id: singleProject.id, key: singleProject.key,name : singleProject.name });
//           }
//         }
//       });

//       setProjectManagers(Array.from(managerMap.values()));
//     } else {
//       setProjectManagers([]);
//     }
//   }, [projects]);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setFilterData({
//       sprintStartDate,
//       sprintEndDate,
//       selectedProjectManagers
//     });
//     navigate('/report');
//   };



//   const projectManagerOptions = projectManagers.map(manager => ({
//     value: manager.projectLeadAccountId,
//     label: manager.projectLead,
//     projectDetails : manager.projectDetails
//   }));



//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label>
//         Sprint Start Date:
//         <input
//           type="date"
//           value={sprintStartDate}
//           onChange={(e) => setSprintStartDate(e.target.value)}
//         />
//       </label>
//       <label>
//         Sprint End Date:
//         <input
//           type="date"
//           value={sprintEndDate}
//           onChange={(e) => setSprintEndDate(e.target.value)}
//         />
//       </label>

//       <MultiSelect
//         options={projectManagerOptions}
//         selectedOptions={selectedProjectManagers}
//         onChange={setSelectedProjectManagers}
//         placeholder="Select Project Managers"
//       />
//       <button type="submit">Generate Report</button>
//     </form>
//   );
// };

// export default FilterForm;
