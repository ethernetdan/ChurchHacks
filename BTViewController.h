//
//  BTViewController.h
//  ChurchHacks
//
//  Created by Dan Gillespie on 6/6/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <Braintree/Braintree.h>

@interface BTViewController : NSObject<BTDropInViewControllerDelegate>

@property NSString *nonce;
@property Braintree *client;

+ (UINavigationController*) go:(Braintree*) client;

@end
