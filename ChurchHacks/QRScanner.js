'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS,
} = React;

var Button = require('react-native-button');

var QRCodeScreen = require('./lib/QRCodeScreen.js');


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: require('./styles/button.js'),
});


var _QRScanner = React.createClass({
  getInitialState: function() {
    return {
      qrData: ''
    };
  },

  propTypes: {
    routeTo: React.PropTypes.func.isRequired,
  },

  render: function() {
    return (
      <View style={styles.contentContainer}>
        <Button style={styles.button} onPress={this._scanQr}>
          { this.state.qrData || 'Scan the basket!' }
        </Button>
      </View>
    );
  },

  _scanQr: function() {
    this.props.navigator.push({
      component: QRCodeScreen,
      title: 'QRCode',
      passProps: {
        onSuccess: this._onSuccess,
        onCancel: this._onCancel,
      },
    });
  },

  _onSuccess: function(result) {
    console.log(result);
    this.setState({qrData: result});
    this.props.navigator.pop();
  },

  _onCancel: function() {
    console.log('cancel');
    this.props.navigator.pop();
  },
});


var QRScanner = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Scan the basket?',
          component: _QRScanner,
          backButtonTitle: 'Back',
          passProps: {
            routeTo: this.props.routeTo,
          },
        }}
      />
    );
  },
});


module.exports = QRScanner;

