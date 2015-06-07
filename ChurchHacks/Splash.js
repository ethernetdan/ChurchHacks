'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var Button = require('react-native-button');


var styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: require('./styles/button.js'),
});


var Splash = React.createClass({
  render: function() {
    return (
      <View style={styles.view}>
        <Button style={styles.button} onPress={this._auth}>
          log in
        </Button>
        <Button style={styles.button} onPress={this._auth}>
          sign up
        </Button>
      </View>
    );
  },

  _auth: function() {
    this.props.toRoute({
      name: 'Login',
      component: require('./Login.js'),
    });
  },
});


module.exports = Splash;

