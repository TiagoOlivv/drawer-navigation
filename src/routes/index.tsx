import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import Home from '../screens/Home';
import Other from '../screens/Other';

const CustomRoutesContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
) => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

const Drawer = createDrawerNavigator();

const Routes: React.FC = () => (
  <Drawer.Navigator
    backBehavior="history"
    initialRouteName="Home"
    drawerContent={props => <CustomRoutesContent {...props} />}
  >
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Other" component={Other} />
  </Drawer.Navigator>
);

export default Routes;
