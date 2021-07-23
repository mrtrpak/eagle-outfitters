import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51JGUZXAOeWykLxhMGqGAVG0Q3nLqfHbqcrZlwyrvtmLAdOqt19xROk2VNiERIF2RR1bZcciTri54Wjg1nwR6aNE800OTVXdzTq"

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Eagle Outfitters"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.sgv"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;