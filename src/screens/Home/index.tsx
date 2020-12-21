import React from 'react';

import HeaderComponent from '../../components/Header';

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  return <HeaderComponent navigation={navigation} title={'E-MOBILIÁRIA'} />;
};

export default Home;
