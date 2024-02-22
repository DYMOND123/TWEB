// PersonalDataForm.tsx
import React from 'react';
import { Input } from 'antd';
import personalDataStore from './PersonalDataStore';

const PersonalDataForm: React.FC = () => {
  return (
    <div>
      <Input placeholder="Name" onChange={(e) => personalDataStore.setName(e.target.value)} />
      <Input placeholder="Surname" onChange={(e) => personalDataStore.setSurname(e.target.value)} />
      <Input placeholder="Group" onChange={(e) => personalDataStore.setGroup(e.target.value)} />
    </div>
  );
};

export default PersonalDataForm;
