import React, { useState, useEffect } from 'react';

import './App.css';

import api from './services/api';
import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `New Project ${Date.now()}`,
      owner: 'Carlos',
    });

    const project = response.data;

    setProjects([
      ...projects,
      project,
    ]);
  }

  return (
    <>
      <Header title="Homepage" />
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
      <button
        type="button"
        onClick={handleAddProject}
      >
        Add Project
      </button>
    </>
  );
}

export default App;
