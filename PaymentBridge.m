//
//  PaymentBridge.m
//  ChurchHacks
//
//  Created by Dan Gillespie on 6/6/15.
//

#import "PaymentBridge.h"
#import "AppDelegate.h"

@implementation PaymentBridge

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(makePayment:(double)amount qr:(NSString*)qr){
  AppDelegate *delegate = (AppDelegate*)[[UIApplication sharedApplication] delegate];
  [delegate executePayment:amount qr:qr];
}

@end
