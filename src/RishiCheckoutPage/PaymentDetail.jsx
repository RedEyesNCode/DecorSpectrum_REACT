import React, { useState,useEffect } from "react";
import PaymentComponent from "../components/PaymentComponent";
import { deleteCartItem, getCart, updateCartItem } from "../api/apiInterface";
import LocalStorageManager from "../session/LocalStorageManager";
import { LOCAL_STORAGE_KEY } from "../session/Constants";

const PaymentDetail = () => {
  const [cartData, setCartData] = useState([]);
  const sessionUser = LocalStorageManager.getItem(LOCAL_STORAGE_KEY.USER_DATA);

  const [isShipToDifferent, setIsShipToDifferent] = useState(false);
  const [formData, setFormData] = useState({
    product: "COFFEE MUGS - Black",
    quantity: 1,
    subtotal: 0.00,
    total: 0.00,
    firstName: "",
    lastName: "",
    companyName: "",
    countryRegion: "Canada",
    streetAddress: "",
    townCity: "",
    cardNumber: "",
    cvv: "",
  });

  const handleChange = (event) => {
    if (event.target.name === "isShipToDifferent") {
      setIsShipToDifferent(event.target.checked);
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };
  useEffect(() => {
    const getUserCart = async () => {
      const rawJson = {
        user_id: sessionUser.id,
      };
      const cartResponse = await getCart(rawJson);

      if (cartResponse.code == 200) {
        setCartData(cartResponse);
        const totalAmount = cartResponse.data.reduce((acc, item) => acc + item.cartTotal, 0);

        // Update formData for subtotal and total using the calculated totalAmount
        setFormData((prevFormData) => ({
          ...prevFormData,
          subtotal: totalAmount,
          total: totalAmount,
        }));
      }else{
        setCartData(null);

      }
    };
    getUserCart();
  }, []);

  return (
    <div className=" max-w-[40%] bg-zinc-100 font-bold text-zinc-600 h-fit p-8">
      <h1 className="text-xl text-black font-semibold mb-4">Your Order</h1>
      <div className="mb-8">
        <table className="w-full ">
          <thead className="border-b-[1px]  ">
            <tr>
              <th className="text-left text-gray-600 font-bold p-2 ">
                Product
              </th>
              <th className="text-right text-gray-600 font-bold p-2 ">
                Subtotal
              </th>
            </tr>
          </thead>

          <tbody>
          {cartData.data !=undefined && cartData.data.map(item => (
            <tr key={item.cartId} className="border-b-[1px]">
              <td className="text-left text-gray-700 font-semibold p-2">
                {item.product.productName} x {item.quantity}
              </td>
              <td className="text-right p-2">
                ${item.cartTotal.toFixed(2)}
              </td>
            </tr>
          ))}
            {/* <tr className="border-b-[1px]">
              <td className="text-left text-gray-700 font-semibold p-2">
                Product
              </td>
              <td className="text-right p-2">
                {formData.product} x {formData.quantity}
              </td>
            </tr> */}
            <tr className="border-b-[1px]">
              <td className="text-left text-gray-700 font-semibold p-2">
                Other Taxes
              </td>
              <td className="text-right p-2">${formData.subtotal}</td>
            </tr>
            <tr className="border-b-[1px]">
              <td className="text-left text-gray-700 font-semibold p-2">
                Total
              </td>
              <td className="text-right p-2">${formData.total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <PaymentComponent/> 
      {/* Is shipped to section*/}
      <p className="w-full font-medium text-[1.3vw]">
        Your personal data will be used to process your inquiry, support your
        experience throughout this website, and for other purposes described in
        our <span className="text-[#B3938A]">privacy policy</span>.
      </p>
      <div
        
      >
        <button className="w-full bg-[#726251] text-white text-center mt-5 cursor-pointer p-[.5vw] rounded-sm hover:bg-black">Place Order</button>
      </div>
    </div>
  );
};

export default PaymentDetail;
