import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Card, Input, Button } from 'antd';

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [
  { key: '1', icon: <UserOutlined />, label: 'Card', content: SubmenuContent },
  { key: '2', icon: <LaptopOutlined />, label: '2', content: 'buttonul 2' },
  { key: '3', icon: <NotificationOutlined />, label: '3', content: 'buttonul 3' },
];

const initialFormData = {
  input1: '',
  input2: '',
  input3: ''
};

function SubmenuContent() {
  const [formData, setFormData] = useState(initialFormData);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const { value } = e.target;
    if (field === 'input2' || field === 'input3') {
      // Validare doar pentru litere (fără cifre)
      const newValue = value.replace(/[0-9]/g, '');
      setFormData({
        ...formData,
        [field]: newValue
      });
    } else {
      setFormData({
        ...formData,
        [field]: value
      });
    }
  };

  const handleSubmit = () => {
    console.log('Datele introduse:', formData);
    setSubmittedData(formData);
    alert('Datele au fost trimise cu succes!');
  };

  return (
    <Card title="Informații personale">
      <div style={{ marginTop: '20px' }}>
        <Input
          placeholder="N. Tel."
          style={{ marginBottom: '10px' }}
          value={formData.input1}
          onChange={(e) => handleInputChange(e, 'input1')}
        />
        <Input
          placeholder="Nume"
          style={{ marginBottom: '10px' }}
          value={formData.input2}
          onChange={(e) => handleInputChange(e, 'input2')}
        />
        <Input
          placeholder="Prenume"
          style={{ marginBottom: '10px' }}
          value={formData.input3}
          onChange={(e) => handleInputChange(e, 'input3')}
        />
        <Button type="primary" onClick={handleSubmit}>Trimite</Button>
      </div>
      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Datele introduse:</h3>
          <p>N. Tel.: {submittedData.input1}</p>
          <p>Nume: {submittedData.input2}</p>
          <p>Prenume: {submittedData.input3}</p>
        </div>
      )}
    </Card>
  );
}

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>('1');

  const handleMenuClick = (key: string) => {
    setSelectedMenu(key);
  };

  return (
    <Layout>
      <Layout.Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        >
          {items1.map(item => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      </Layout.Header>
      <Layout.Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Acasa</Breadcrumb.Item>
          <Breadcrumb.Item>Lista</Breadcrumb.Item>
          <Breadcrumb.Item>Aplicatie</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: '24px 0',
          }}
        >
          <Layout.Sider
            style={{
              background: '#fff',
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
            >
              {items2.map(item => (
                <Menu.Item key={item.key} icon={item.icon} onClick={() => handleMenuClick(item.key)}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          </Layout.Sider>
          <Layout.Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            {selectedMenu === '1' && <SubmenuContent />}
          </Layout.Content>
        </Layout>
      </Layout.Content>
    </Layout>
  );
};

export default App;
