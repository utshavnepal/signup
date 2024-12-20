
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPassword from './src/screens/ForgotPassword';
import NewPasswordName from './src/screens/NewPasswordName';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>

<SignInScreen/>

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#f9FBFC',
  },
});
