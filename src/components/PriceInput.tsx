import { StyleSheet, Text, View, TextInput } from 'react-native';
import styled from 'styled-components/native';
import priceStore from '@data/store';
import React, { useRef, useState } from 'react';

const PriceInput = () => {
  const inputRef = React.createRef<TextInput>();

  const setPrice = priceStore(state => state.setPrice);

  return (
    <View>
      <TextInput
        style={{ opacity: 0 }}
        autoFocus={false}
        keyboardType="numeric"
        ref={inputRef}
        onLayout={() => inputRef.current?.focus()}
        onChangeText={setPrice}
      />
    </View>
  );
};

export default PriceInput;
