import React from 'react';

import HeaderComponent from '../../components/Header';

interface Props {
  navigation: any;
}

const About: React.FC<Props> = ({ navigation }) => {
  return <HeaderComponent navigation={navigation} title={'QUEM SOMOS'} />;
};

export default About;
