import { StyleSheet, Text, View, TextInput } from 'react-native';
import styled from 'styled-components/native';
import priceStore from '@data/store';



const Number = () => {
  const price = priceStore(state => state.price);
  const person = priceStore(state => state.person);

  const priceFixed = () => {
    let dollar = '0.00';
    if (price.length === 1) {
      dollar = '0.0' + (parseInt(price) % 10).toString();
    } else if (price.length === 2) {
      dollar = '0.' + (parseInt(price) % 100).toString();
    } else if (price.length >= 3) {
      let priceArray = price.toString().split('');
      priceArray?.splice(-2, 0, '.').join('')
      return priceArray;
    }
    return dollar;
  };

  return <Wrapper>
    <Text>{priceFixed()}</Text>
    </Wrapper>;
};

const Wrapper = styled.View`
  flex-grow: 2;
`;

export default Number;
