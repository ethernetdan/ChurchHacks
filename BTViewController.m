//
//  BTViewController.m
//  ChurchHacks
//
//  Created by Dan Gillespie on 6/6/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "BTViewController.h"

@implementation BTViewController

- (void)postNonceToServer:(NSString *)paymentMethodNonce {
  NSURL *paymentURL = [NSURL URLWithString:@"https://your-server.example.com/orders"];
  NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:paymentURL];
  request.HTTPBody = [[NSString stringWithFormat:@"payment-method-nonce=%@", paymentMethodNonce] dataUsingEncoding:NSUTF8StringEncoding];
  [NSURLConnection sendAsynchronousRequest:request
                                     queue:[NSOperationQueue mainQueue]
                         completionHandler:^(NSURLResponse *response, NSData *data, NSError *connectionError) {
                           // TODO: Handle success and failure
                         }];
}

- (void)dropInViewController:(__unused BTDropInViewController *)viewController didSucceedWithPaymentMethod:(BTPaymentMethod *)paymentMethod {
  self.nonce = paymentMethod.nonce;
  [self postNonceToServer:self.nonce]; // Send payment method nonce to your server
}

+ (UINavigationController*) go:(Braintree*) client {
  BTDropInViewController *dropInViewController = [client dropInViewControllerWithDelegate:self];
  dropInViewController.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc] initWithBarButtonSystemItem:UIBarButtonSystemItemCancel
                                                                   target:self
                                                                   action:@selector(userDidCancelPayment)];
  UINavigationController *navigationController = [[UINavigationController alloc] initWithRootViewController:dropInViewController];
  return navigationController;
}


@end
