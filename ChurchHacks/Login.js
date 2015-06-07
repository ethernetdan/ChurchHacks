'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
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


var Login = React.createClass({
  render: function() {
    return (
      <View style={styles.view}>
        <Button style={styles.button} onPress={this._next}>
          braintree login stuff!
        </Button>
      </View>
    );
  },

  _next: function() {
    this.props.toRoute({
      name: 'QRScanner',
      component: require('./QRScanner.js'),
    });
  },
});


module.exports = Login;

