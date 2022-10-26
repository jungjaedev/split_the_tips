import { StyleSheet, Text, View, TextInput } from 'react-native';
import PriceSection from '@components/PriceSection';
import styled from 'styled-components/native';

const Main = () => {
  return (
    <Wrapper>
      <PriceSection type="price" />
      <PriceSection type="numberOfPeople" />
      <PriceSection type="totalAmount" />
      <PriceSection type="tipPerPerson" />
      <PriceSection type="totalPerPerson" />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%; */
`;

export default Main;
