import { StyleSheet, Text, View, TextInput } from 'react-native';
import styled from 'styled-components/native';

const Title = () => {
  return (
    <Wrapper>
      <Text>Price</Text>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-grow: 2;
`;

export default Title;
