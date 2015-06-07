/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTRootView.h"

#import "BTViewController.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  /**
   * Loading JavaScript code - uncomment the one you want.
   *
   * OPTION 1
   * Load from development server. Start the server from the repository root:
   *
   * $ npm start
   *
   * To run on device, change `localhost` to the IP address of your computer
   * (you can get this by typing `ifconfig` into the terminal and selecting the
   * `inet` value under `en0:`) and make sure your computer and iOS device are
   * on the same Wi-Fi network.
   */

  jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle"];

  /**
   * OPTION 2
   * Load from pre-bundled file on disk. To re-generate the static bundle
   * from the root of your project directory, run
   *
   * $ react-native bundle --minify
   *
   * see http://facebook.github.io/react-native/docs/runningondevice.html
   */

//   jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"ChurchHacks"
                                                   launchOptions:launchOptions];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [[UIViewController alloc] init];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  /**
   * Braintree client setup
   */
  [Braintree setReturnURLScheme:@"church.basket.ChurchHacks.payments"];
  return YES;
}

/*
 * Finalize Braintree payment
 */
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
  return [Braintree handleOpenURL:url sourceApplication:sourceApplication];
}

- (NSString*) getProperty:(NSString*) key {
  NSString *path = [[NSBundle mainBundle] pathForResource:@"settings" ofType:@"plist"];
  NSDictionary *dictionary = [[NSDictionary alloc] initWithContentsOfFile:path];
  return dictionary[key];
}

- (void) openModal:(Braintree*) client amount:(double)amount qr:(NSString*)qr {
  UINavigationController *c = [BTViewController go:client];
  self.window.rootViewController = c;
  [self.window makeKeyAndVisible];
}

- (void) executePayment:(double)amount qr:(NSString*)qr {
  NSString *url = [self getProperty:@"tokenUrl"];
  NSURL *tokenURL = [NSURL URLWithString:url];
  NSMutableURLRequest *clientTokenRequest =[NSMutableURLRequest requestWithURL:tokenURL];
  
  [NSURLConnection
   sendAsynchronousRequest:clientTokenRequest
   queue:[NSOperationQueue mainQueue]
   completionHandler:^(NSURLResponse *response, NSData *data, NSError *connectionError) {
     NSString *clientToken = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
     Braintree *braintree = [Braintree braintreeWithClientToken:clientToken];
     [self openModal:braintree amount:amount qr:qr];
   }];
}




@end

