import React from 'react';

import HeaderComponent from '../../components/Header';
import { Props } from '../../Models';

const First: React.FC<Props> = ({ navigation }) => (
  <HeaderComponent navigation={navigation} title={'Drawer Navigation'} />
);

export default First;
