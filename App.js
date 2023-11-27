import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor, Store } from './src/redux';
import Toast, {
  BaseToast,
  ErrorToast,
  SuccessToast,
} from 'react-native-toast-message';
import AppNavigation from './AppNavigation.js';



const App = () => {
  return (
    <>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          {Platform.OS === 'ios' ? (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
              <AppNavigation />
            </KeyboardAvoidingView>
          ) : (
            <AppNavigation />
          )}
        </PersistGate>
      </Provider>
      <Toast
        config={{
          error: props => (
            <ErrorToast
              {...props}
              text1NumberOfLines={2}
              text2NumberOfLines={2}
            />
          ),
          success: props => (
            <SuccessToast
              {...props}
              text1NumberOfLines={2}
              text2NumberOfLines={4}
            />
          ),
        }}
      />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//(1)
// console.warn('NOTIFICATION:', notification);
// process the notification
//===
// const clicked = notification.userInteraction;
// console.warn('working', notification);
// if (clicked) {
//   console.warn('clicked', notification);
//   NavigationService.navigate('BottomTabs', {
//     notiData: notification,
//   });
// } else {
// }
// // (required) Called when a remote is received or opened, or local notification is opened
