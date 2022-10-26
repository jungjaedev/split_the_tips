import { StyleSheet, Text, View, TextInput } from 'react-native';
import styled from 'styled-components/native';

import Title from '@components/Title';
import DollarSign from '@components/DollarSign';
import Button from '@components/Button';
import Number from '@components/Number';

interface priceSectionProps {
  type: string;
}

const PriceSection = ({type}: priceSectionProps) => {
  return (
    <Wrapper>
      <Title />
      <DollarSign />
      <Number />
      <Button />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export default PriceSection;
