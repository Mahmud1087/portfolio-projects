import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY =
  'pk_test_51PFxluFKbj9OcuiynrDT29BipknTJLIN7wEZhztg13WLNikr7PwCD0z173pkTsSLRmwSgitY12h61ztI2RRh80CP00SWcWj3wE';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
};
export default StripeContainer;
