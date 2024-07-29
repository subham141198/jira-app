import {axios} from "axios";

export const getAllIssues = async (startDate, endDate, selectedProjects) => {
  console.log(startDate,endDate,selectedProjects);
  const response = await fetch('http://localhost:4000/jira/issues', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      start_date: startDate,
      end_date: endDate,
      selectedProjects,
    }),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
};

export const getProjects = async () => {
  const apiUrl = `${process.env.JIRA_BASE_URL}/rest/agile/1.0/board?projectKeyOrId=${projectId}`;
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

  return response.data.values;
};

export const getProjectManagers = async (projects) => {
  const projectList = projects.map(p => p.value).join(',');
  const response = await fetch(`http://localhost:4000/jira/projectManagers?projects=${encodeURIComponent(projectList)}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
};

export const GetSprintsandIssues = async (sprintStartDate,sprintEndDate,selectedProjects) => {
const response = await fetch(`http://localhost:4000/jira/sprint/report`,{
  params:{
    test: "test"
  }
});
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
};


