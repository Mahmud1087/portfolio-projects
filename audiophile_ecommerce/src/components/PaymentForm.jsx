import { useState } from 'react';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  return <div>PaymentForm</div>;
};
export default PaymentForm;
