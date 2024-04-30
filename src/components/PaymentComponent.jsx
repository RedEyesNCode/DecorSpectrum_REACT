import React, { useEffect, useState } from 'react';
import 'https://sandbox.web.squarecdn.com/v1/square.js';

function PaymentComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // 'SUCCESS', 'FAILURE', null (initial)
  const [errorMessage, setErrorMessage] = useState('');
  let card;
    let payments;
    async function initializeCards(payments) {
        try {
          const card = await payments.card();
          await card.attach('#card-container');   
          return card; 
        } catch (e) {
          console.log("Error initializing card:", e); 
          // Re-throw or handle the error appropriately for your component
          throw e;  
        }
      }

  useEffect(() => {
    const appId = 'sandbox-sq0idb-oY2_hrqEpZtiMKsBHiEqSw';
    const locationId = 'L02CGYC1S6B8X';

    async function initializeSquare() {
      if (!window.Square) {
        window.alert('Square Error ')
        setErrorMessage('Square.js failed to load properly');
        return;
      }
    

      try {
        payments = window.Square.payments(appId, locationId);
        // const card = await payments.card();
        console.log('Payments object:', payments); // Add this for debugging
        card = await initializeCards(payments); 
        // card = await payments.card();

        // Initialize card
        console.log('Card object:', card); // Add this for debugging

        await card.attach('#card-container');
      } catch (e) {
        console.error('Initializing Card failed', e);
        setErrorMessage('Error initializing card');
      }
    }

    initializeSquare();
  }, []);

  const handlePaymentMethodSubmission = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const token = await tokenize(card); // Assuming you have 'card' available
      const verificationToken = await verifyBuyer(payments, token); 
      const paymentResults = await createPayment(token, verificationToken);

      setPaymentStatus('SUCCESS');
      console.debug('Payment Success', paymentResults);
    } catch (e) {
      setPaymentStatus('FAILURE');
      setErrorMessage(e.message);
      console.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper functions (you'll need to implement these)
  async function initializeCard(payments) {
    // ...
  }

  async function createPayment(token, verificationToken) {
    // ...
  }

  async function verifyBuyer(payments, token) {
    // ...
  }

  async function tokenize(paymentMethod) { 
    // ...
  }

  return (
    <div>
      {isLoading && <div>Loading...</div>}

      <form id="payment-form">
        <div id="card-container"></div>
        <button
          id="card-button"
          type="button"
          onClick={handlePaymentMethodSubmission}
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Pay $1.00'}
        </button>
      </form>
      

      {paymentStatus && (
        <div
          id="payment-status-container"
          className={paymentStatus === 'SUCCESS' ? 'is-success' : 'is-failure'}
        >
          {paymentStatus === 'SUCCESS'
            ? 'Payment Successful!'
            : `Payment Failed: ${errorMessage}`}
        </div>
      )}
    </div>
  );
}

export default PaymentComponent;
