import React, { useState } from 'react';

const PaymentSection: React.FC<{ onPaymentDetailsChange: (details: any) => void }> = ({ onPaymentDetailsChange }) => {
  const [paymentMethodId, setPaymentMethodId] = useState('');

  const handlePaymentChange = () => {
    onPaymentDetailsChange({ paymentMethodId });
  };

  return (
    <div className="payment-section">
      <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
      <div className="mb-4">
        <label className="block mb-2">Payment Method ID</label>
        <input type="text" value={paymentMethodId} onChange={(e) => { setPaymentMethodId(e.target.value); handlePaymentChange(); }} className="w-full p-2 border" />
      </div>
    </div>
  );
};

export default PaymentSection;
