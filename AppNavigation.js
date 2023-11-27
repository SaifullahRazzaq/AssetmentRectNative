import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors, Metrix, NavigationService } from './src/config';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import Home from './src/screens/Auth/Home'
import DetailScreen from './src/screens/Auth/DeatilScreen'
const Stack = createStackNavigator();
//App Navigation
class AppNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { loading, user } = this.props;
    return (
      <>
        <NavigationContainer
          ref={ref => NavigationService.setTopLevelNavigator(ref)}>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
          // initialRouteName={!user ? 'AuthStack' : 'UserStack'}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={DetailScreen} />

          </Stack.Navigator>
        </NavigationContainer>
        {loading && (
          <View
            style={{
              height: Metrix.VerticalSize(),
              width: Metrix.HorizontalSize(),
              position: 'absolute',
              zIndex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                paddingHorizontal: Metrix.VerticalSize(30),
                paddingVertical: Metrix.VerticalSize(30),
                borderRadius: Metrix.VerticalSize(10),
                backgroundColor: Colors.primary,
              }}>
              <ActivityIndicator size="large" color={Colors.white} />
            </View>
          </View>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.LoaderReducer.loading,
  user: state.AuthReducer.user,
});
const mapDispatchToProps = dispatch => ({
  getReleaseNote: payload => dispatch(AuthMiddleware.GetReleaseNotes(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
