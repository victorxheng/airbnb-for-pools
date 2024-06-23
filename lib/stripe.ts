import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

const createCharge = async (amount: number, currency: string, source: string, description: string) => {
  try {
    const charge = await stripe.charges.create({
      amount,
      currency,
      source,
      description,
    });
    return charge;
  } catch (error) {
    throw new Error(error.message);
  }
};

const retrieveCharge = async (chargeId: string) => {
  try {
    const charge = await stripe.charges.retrieve(chargeId);
    return charge;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { createCharge, retrieveCharge };
