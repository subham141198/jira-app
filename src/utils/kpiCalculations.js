// src/kpi.js
export const calculateSprintCompletion = (issues) => {
    const totalTasks = issues.length;
    const completedTasks = issues.filter(issue => issue.fields.status.name === 'Done').length;
    return (completedTasks / totalTasks) * 100;
  };

  export const calculateTotalDeviation = (issues) => {
    let plannedTime = 0;
    let actualTime = 0;
    issues.forEach(issue => {
      plannedTime += issue.fields.timetracking.originalEstimateSeconds || 0;
      actualTime += issue.fields.timetracking.timeSpentSeconds || 0;
    });
    return ((plannedTime - actualTime) / plannedTime) * 100;
  };
