import React, { useState } from 'react';

const PaymentSection: React.FC<{ onPaymentDetailsChange: (details: any) => void }> = ({ onPaymentDetailsChange }) => {
  const [paymentMethodId, setPaymentMethodId] = useState('');

  return (
    <section className="panel p-6 md:p-7">
      <h2 className="mb-4 text-2xl text-[#173347]">Payment Details</h2>
      <div className="mb-4">
        <label className="field-label">Payment Method ID</label>
        <input
          type="text"
          value={paymentMethodId}
          onChange={(e) => {
            const next = e.target.value;
            setPaymentMethodId(next);
            onPaymentDetailsChange({ paymentMethodId: next });
          }}
          className="field-input"
        />
      </div>
    </section>
  );
};

export default PaymentSection;
