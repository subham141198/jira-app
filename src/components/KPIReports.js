// // src/components/KPIReport.js
// import React, { useEffect, useState } from 'react';
// import MultiSelect from './MultiSelect';
// import { getProjects, getAllIssues,GetSprintsandIssues } from '../utils/api';
// import axios from 'axios';

// const KPIReport = ({ sprintStartDate, sprintEndDate, selectedProjectManagers }) => {
//   const [selectedProjects, setSelectedProjects] = useState({});
//   const [getSprints, setgetSprints] = useState([]);

//   useEffect(() => {
//     GetSprintsandIssues(sprintStartDate,sprintEndDate,selectedProjects).then(setgetSprints);
//   }, [sprintStartDate,sprintEndDate,selectedProjects]);

//   console.log(getSprints)
//   // Extract projects for each selected project manager
//   const projectOptionsByManager = selectedProjectManagers.map(manager => {
//     const projectOptions = manager.projectDetails.map(project => ({
//       value: project.id,
//       label: project.name
//     }));
//     // console.log(manager)
//     return {
//       managerAccountId: manager.value,
//       manageraccountName: manager.label,
//       options: projectOptions
//     };
//   });

//   const handleProjectChange = (managerAccountId, projectIds) => {
//     setSelectedProjects(prevState => ({
//       ...prevState,
//       [managerAccountId]: projectIds
//     }));
//   };
//   // console.log(selectedProjects);






//   return (
//     <div>
//       <h1>KPI Report</h1>
//       {projectOptionsByManager.map(({ manageraccountName, managerAccountId, options }) => (
//         <div key={managerAccountId}>
//           <h2>Projects for Manager {manageraccountName}</h2>
//           <MultiSelect
//             options={options}
//             selectedOptions={selectedProjects[managerAccountId] || []}
//             onChange={(projectIds) => handleProjectChange(managerAccountId, projectIds)}
//             placeholder={`Select Projects for Manager ${manageraccountName}`}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default KPIReport;
