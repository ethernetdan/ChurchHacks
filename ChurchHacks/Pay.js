'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;


var styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: require('./styles/button.js'),
});


var Pay = React.createClass({
  render: function() {
    return (
      <View style={styles.view}>
        <Text>
          :/
        </Text>
      </View>
    );
  },
});


module.exports = Pay;

