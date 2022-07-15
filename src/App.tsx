import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const getItem = (label?, key?, icon?, children?, type?) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Planning Poker', 'sub1', <MailOutlined />, [
    getItem('Text', '1'),
    getItem(<Link to="pointing-poker">Tool</Link>, '2'),
  ]),
  getItem('Retrospective', 'sub2', <AppstoreOutlined />, [
    getItem('Text', '5'),
    getItem(<Link to="retrospective">Tool</Link>, '6'),
    getItem('Examples', 'sub3', null, [
      getItem('Example 1', '7'),
      getItem('Example 2', '8')
    ]),
  ]),
]; // submenu keys of first level

const rootSubmenuKeys = ['sub1', 'sub2'];

const handleClick = (info) => {
  switch (info.key) {
    case 1:
      useHistory
      break;
  
    default:
      break;
  }
  console.log(`clicked ${info.key}`);
  console.log(info);
}

const App = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      theme='dark'
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
      }}
      items={items}
      onClick={handleClick}
    >
    </Menu>
  );
};

export default App
