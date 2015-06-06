/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Router = require('react-native-router');

var Splash = require('./ChurchHacks/Splash.js');
var QRScanner = require('./ChurchHacks/QRScanner.js');


var ChurchHacks = React.createClass({
  render: function() {
    return (
      <Router firstRoute={Splash} />
    );
  }
});


AppRegistry.registerComponent('ChurchHacks', () => ChurchHacks);

