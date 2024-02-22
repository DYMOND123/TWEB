// App.tsx
import React from 'react';
import MyCard from './MyCard';
import PersonalDataForm from './PersonalDataForm';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Personal Data Management</h1>
      <PersonalDataForm />
      <MyCard />
    </div>
  );
};

export default App;
