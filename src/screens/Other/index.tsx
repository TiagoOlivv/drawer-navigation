import React from 'react';

import HeaderComponent from '../../components/Header';
import { Props } from '../../Models';

const Second: React.FC<Props> = ({ navigation }) => (
  <HeaderComponent navigation={navigation} title={'Other Page'} />
);

export default Second;
