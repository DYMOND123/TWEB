// MyCard.tsx
import React from 'react';
import { observer } from 'mobx-react';
import { Card } from 'antd';
import personalDataStore from './PersonalDataStore';

const MyCard: React.FC = observer(() => {
  const { name, surname, group } = personalDataStore;

  return (
    <Card title="Personal Information" style={{ width: 300 }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Surname:</strong> {surname}</p>
      <p><strong>Group:</strong> {group}</p>
    </Card>
  );
});

export default MyCard;
