import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const Button = () => {
  return (
    <Wrapper>
      <Text>X</Text>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex-grow: 0.5;
`;

export default Button;
