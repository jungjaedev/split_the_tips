import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, View,TextInput } from 'react-native';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/native';

import Theme from '@/Theme';
import Main from '@/components/Main';
import PriceInput from '@/components/PriceInput';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <View style={styles.statusBar} />
        <Main />
        <PriceInput />
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
  },
});

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export default App;