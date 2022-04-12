import React from "react";
import { useCallback } from "react";
import useRazorpay from "react-razorpay";

export default function Payment() {
  const Razorpay = useRazorpay();

  const LocalStorage = JSON.parse(localStorage.getItem("Cart"));
  const LocalStorageuser = JSON.parse(localStorage.getItem("user"));
  const handlePayment = useCallback(() => {
    // const order = await createOrder(params);

    const options = {
      key: "rzp_test_zIUsPykcjYEZHO",
      amount: "3000",
      // amount: LocalStorage.price * 50,
      currency: "USD",
      name: "Shopper's Stop",
      description: "Test Transaction",
      image:
        "https://i.pinimg.com/originals/7c/bc/bb/7cbcbbff2edf9efde5e01738ce6a6ef7.png",
      // order_id: order.id,
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: LocalStorageuser?.name,
        email: LocalStorageuser?.email,
        contact: prompt("what is your contact no"),
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className="App">
      <button onClick={handlePayment}>Pay Now </button>
    </div>
  );
}
