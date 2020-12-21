import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import Home from '../screens/Home';
import About from '../screens/About';
import Cities from '../screens/Cities';
import Contact from '../screens/Contact';

const CustomRoutesContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const Routes: React.FC = () => {
  return (
    <Drawer.Navigator
      backBehavior="history"
      initialRouteName="Home"
      drawerContent={props => <CustomRoutesContent {...props} />}
    >
      <Drawer.Screen name="Página Principal" component={Home} />
      <Drawer.Screen name="Cidades" component={Cities} />
      <Drawer.Screen name="Quem somos" component={About} />
      <Drawer.Screen name="Entre em contato" component={Contact} />
    </Drawer.Navigator>
  );
};

export default Routes;
