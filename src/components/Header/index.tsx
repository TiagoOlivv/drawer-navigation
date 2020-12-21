import React from 'react';

import { Header, Button, Icon } from 'react-native-elements';

interface Props {
  navigation: any;
  title: string;
}

const HeaderComponent: React.FC<Props> = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <Header
      placement="center"
      backgroundColor="#fff"
      leftComponent={
        <Button
          onPress={openMenu}
          buttonStyle={{ backgroundColor: '#fff' }}
          icon={<Icon name="menu" color="#000" size={30} />}
        />
      }
      centerComponent={{
        text: title,
        style: {
          fontSize: 20,
          fontWeight: 'bold',
          color: '#000',
          marginTop: 10,
        },
      }}
    />
  );
};

export default HeaderComponent;
