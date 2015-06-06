'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


var Index = React.createClass({
  render: function() {
    return (
      <View style={styles.contentContainer}>
        <Text>Splash!!</Text>
      </View>
    );
  },
});


var Splash = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Index',
          backButtonTitle: 'Back',
          component: Index,
        }}
      />
    );
  },
});


module.exports = Splash;

