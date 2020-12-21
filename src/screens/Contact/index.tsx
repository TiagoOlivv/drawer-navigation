import React from 'react';

import HeaderComponent from '../../components/Header';

interface Props {
  navigation: any;
}

const Contact: React.FC<Props> = ({ navigation }) => {
  return <HeaderComponent navigation={navigation} title={'ENTRE EM CONTATO'} />;
};

export default Contact;
