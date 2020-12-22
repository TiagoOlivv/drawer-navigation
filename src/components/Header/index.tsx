import React from 'react';

import { Header, Button, Icon } from 'react-native-elements';
import { Props } from '../../Models';

const HeaderComponent: React.FC<Props> = ({ navigation, title }) => (
  <Header
    placement="center"
    leftComponent={
      <Button
        onPress={() => {
          navigation.openDrawer();
        }}
        buttonStyle={{ backgroundColor: '#2089dc' }}
        icon={<Icon name="menu" color="#fff" size={40} />}
      />
    }
    centerComponent={{
      text: title,
      style: {
        fontSize: 20,
        color: '#fff',
        marginTop: 15,
      },
    }}
  />
);

export default HeaderComponent;
