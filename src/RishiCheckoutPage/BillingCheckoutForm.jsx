import React from "react";
import DetailForm from "./DetailForm";
import PaymentDetail from "./PaymentDetail";
import MaterialNavBar from "../components/MaterialNavBar";
import Footer from "../pages/Footer";
const BillingCheckoutForm = () => {
  return (
    <div>
      <MaterialNavBar />

      <div className="px-5 py-5 h-full w-full overflow-hidden">
        <h1 className="text-[1.5vw] font-semibold mb-5">Billing Details</h1>
        <div className="formss h-full w-full flex justify-between ">
          <DetailForm />
          <PaymentDetail />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BillingCheckoutForm;
