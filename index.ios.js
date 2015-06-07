/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
} = React;

var Router = require('react-native-router');

var Splash = require('./ChurchHacks/Splash.js');
var QRScanner = require('./ChurchHacks/QRScanner.js');


var splashRoute = { name: 'Splash', component: Splash };
var qrScannerRoute = { name: 'QRScanner', component: QRScanner };

var styles = StyleSheet.create({
  header: {
    backgroundColor: '#59bee3',
  },
});


var ChurchHacks = React.createClass({
  render: function() {
    return (
      <Router
        headerStyle={styles.header}
        firstRoute={splashRoute}
      />
    );
  }
});


AppRegistry.registerComponent('ChurchHacks', () => ChurchHacks);

