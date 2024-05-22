import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Checkout = ({ cart, setCart }) => {
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const [price, setPrice] = useState(0);
  const [showProducts, setShowProducts] = useState(true);
  const [deliveryProgress, setDeliveryProgress] = useState(0); // 0: Processing, 1: Dispatched, 2: Delivered
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    bankAccount: '',
    creditCard: '',
    mobileNumber: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('bankAccount'); // Default to bank account
  const [errors, setErrors] = useState({});

  const handlePrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * (item.amount || 1);
    });
    setPrice(totalPrice);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setPaymentDetails({ ...paymentDetails, bankAccount: '', creditCard: '' }); // Clear the other field
  };

  const validate = () => {
    const errors = {};
    if (!paymentDetails.name) errors.name = 'Name is required';
    if (paymentMethod === 'bankAccount') {
      if (!paymentDetails.bankAccount) errors.bankAccount = 'Bank account is required';
      else if (!/^\d{12}$/.test(paymentDetails.bankAccount)) errors.bankAccount = 'Bank account must be 12 digits';
    } else {
      if (!paymentDetails.creditCard) errors.creditCard = 'Credit card is required';
      else if (!/^\d{10}$/.test(paymentDetails.creditCard)) errors.creditCard = 'Credit card must be 10 digits';
    }
    if (!paymentDetails.mobileNumber) errors.mobileNumber = 'Mobile number is required';
    else if (!/^[6-9]\d{9}$/.test(paymentDetails.mobileNumber)) errors.mobileNumber = 'Mobile number must be 10 digits and start with 6-9';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePayment = () => {
    // Show payment form when "Proceed to Payment" is clicked
    setShowPaymentForm(true);
  };

  const handlePaymentSubmit = () => {
    if (!validate()) return;

    // Here you can implement logic for payment processing
    setPaymentStatus('processing');

    // Simulating delivery progress
    setTimeout(() => {
      setPaymentStatus('completed');
      setShowProducts(false);
      setDeliveryProgress(1); // Order dispatched
      setCart([]); // Empty the cart
      setPaymentDetails([])
    }, 2000);

    setTimeout(() => {
      setDeliveryProgress(2); // Order delivered
    }, 4000);
  };

  const location = useLocation();

  return (
    location.pathname === '/checkout' && (
      <div className="max-w-3xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        {cart && cart.length > 0 && showProducts ? (
          <div className="overflow-x-auto">
            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex justify-between border-b border-gray-300 pb-4 mb-4">
                <p className="font-semibold">Product</p>
                <p className="font-semibold">Price</p>
              </div>
              {cart.map((item) => (
                <div key={item.id} className="flex items-center border-b border-gray-300 py-2">
                  <img src={item.imgSrc} alt={item.title} className="w-20 h-20 object-cover mr-4" />
                  <div className="flex-grow">
                    <p className="font-semibold">{item.title}</p>
                  </div>
                  <p className="ml-auto font-semibold">Rs-{item.price} x {item.amount}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <div className="font-semibold">Total: Rs-{price}</div>
            </div>
            {paymentStatus === 'pending' && (
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlePayment}>
                Proceed to Payment
              </button>
            )}
            {showPaymentForm && (
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-4">Payment Details</h3>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={paymentDetails.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded p-2"
                  />
                  {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Payment Method</label>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bankAccount"
                      checked={paymentMethod === 'bankAccount'}
                      onChange={handlePaymentMethodChange}
                    />
                    <label className="ml-2">Bank Account</label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="creditCard"
                      checked={paymentMethod === 'creditCard'}
                      onChange={handlePaymentMethodChange}
                      className="ml-4"
                    />
                    <label className="ml-2">Credit Card</label>
                  </div>
                </div>
                {paymentMethod === 'bankAccount' && (
                  <div className="mb-4">
                    <label className="block text-gray-700">Bank Account</label>
                    <input
                      type="text"
                      name="bankAccount"
                      value={paymentDetails.bankAccount}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded p-2"
                    />
                    {errors.bankAccount && <p className="text-red-500">{errors.bankAccount}</p>}
                  </div>
                )}
                {paymentMethod === 'creditCard' && (
                  <div className="mb-4">
                    <label className="block text-gray-700">Credit Card</label>
                    <input
                      type="text"
                      name="creditCard"
                      value={paymentDetails.creditCard}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded p-2"
                    />
                    {errors.creditCard && <p className="text-red-500">{errors.creditCard}</p>}
                  </div>
                )}
                <div className="mb-4">
                  <label className="block text-gray-700">Mobile Number</label>
                  <input
                    type="text"
                    name="mobileNumber"
                    value={paymentDetails.mobileNumber}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded p-2"
                  />
                  {errors.mobileNumber && <p className="text-red-500">{errors.mobileNumber}</p>}
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handlePaymentSubmit}
                >
                  Payment
                </button>
              </div>
            )}

          </div>
        ) : (
          <p>Your cart is empty</p>
        )}

        {paymentStatus === 'processing' && (
          <div className="mt-4 flex items-center">
            <p className="mr-2">Your payment is being processed...</p>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {paymentStatus === 'completed' && (
          <div className="mt-4">
            <p>Your order has been dispatched.</p>
            <p>Expected delivery:</p>
            {deliveryProgress === 1 && <p>3 days</p>}
            {deliveryProgress === 2 && <p>4 days</p>}
            <Link to={'/'} className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-block">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    )
  );
};

export default Checkout;
