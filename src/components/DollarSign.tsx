import { StyleSheet, Text, View, TextInput } from 'react-native';
import styled from 'styled-components/native';

const DollarSign = () => {
  return (
    <Wrapper>
      <Text>$</Text>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-grow: 2;
`;

export default DollarSign;
