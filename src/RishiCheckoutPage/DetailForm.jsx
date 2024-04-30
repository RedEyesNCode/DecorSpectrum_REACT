import React, { useState } from "react";

const DetailForm = () => {
  const [isShipToDifferentAddress, setIsShipToDifferentAddress] =
    useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    countryRegion: "Canada",
    streetAddress: "",
    townCity: "",
  });

  const handleChange = (event) => {
    if (event.target.name === "isShipToDifferentAddress") {
      setIsShipToDifferentAddress(event.target.checked);
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };
  return (
    <div className="Details min-w-[50%] bg-zinc-200 font-bold text-zinc-600 px-3 py-3">
      <form>
        <div className="FirstLastname p-3 flex justify-between">
          <div className="w-1/2 pr-2">
            <label htmlFor="firstName">
              First name <span className="text-red-500 text-lg">*</span>
            </label>
            <br />
            <input
              className="w-full h-11 mt-1 p-2"
              type="text"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="lastName">
              Last Name <span className="text-red-500 text-lg">*</span>
            </label>
            <br />
            <input
              className="w-full h-11 mt-1 p-2"
              type="text"
              id="lastName"
              name="lastName"
            />
          </div>
        </div>
        <div className="Companyname p-3 flex-col flex">
          <label htmlFor="companyName">Company Name (optional)</label>
          <input
            className="h-11 mt-1 p-2"
            type="text"
            id="companyName"
            name="companyName"
          />
        </div>
        <div className="Countryname p-3 flex flex-col">
          <label htmlFor="countryRegion">
            Country/Region <span className="text-red-500 text-lg">*</span>
          </label>
          <select
            className="h-11 mt-1 p-2"
            id="countryRegion"
            name="countryRegion"
          >
            <option value="Canada">Canada</option>
            <option value="US">US</option>
            <option value="UK">UK</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="Address flex flex-col p-3 gap-2">
          <label htmlFor="streetAddress">
            Street Address <span className="text-red-500 text-lg">*</span>
          </label>
          <input
            className="p-2 h-11 mt-1"
            type="text"
            id="streetAddress"
            placeholder="House number and street name"
          />
          <input
            className="p-2 h-11 mt-1"
            type="text"
            id=""
            placeholder="Apartment, suite, unit, etc. (optional)"
          />
        </div>
        <div className="Town flex flex-col p-3 gap-3">
          <label htmlFor="townCity">
            Town / City <span className="text-red-500 text-lg">*</span>
          </label>
          <input
            className="p-2 h-11 mt-1"
            type="text"
            id="townCity"
            name="townCity"
          />
        </div>
        <div className="Province  p-3 flex flex-col">
          <label htmlFor="countryRegion">
            Province <span className="text-red-500 text-lg">*</span>
          </label>
          <select
            className="p-2 h-11 mt-1"
            id="countryRegion"
            name="countryRegion"
          >
            <option value="Canada">Alberta</option>
            <option value="US">British</option>
            <option value="UK">Manitoba</option>
          </select>
        </div>
        <div className="Postal code p-3 flex flex-col">
          <label htmlFor="companyName">
            Postal code <span className="text-red-500 text-lg">*</span>
          </label>
          <input
            className="p-2 h-11 mt-1"
            type="text"
            id="Postal"
            name="Postal"
          />
        </div>
        <div className="Phone p-3 flex flex-col">
          <label htmlFor="companyName">
            Phone <span className="text-red-500 text-lg">*</span>
          </label>
          <input
            className="p-2 h-11 mt-1"
            type="text"
            id="Phone"
            name="Phone"
          />
        </div>
        <div className="Email p-3 flex flex-col">
          <label htmlFor="companyName">
            Email address <span className="text-red-500 text-lg">*</span>
          </label>
          <input
            className="p-2 h-11 mt-1"
            type="text"
            id="Email"
            name="Email"
          />
        </div>
        {/*Data to be shown after check box */}
        <div className="px-3 flex flex-row gap-3 items-center">
          <input
            className="h-4 w-4"
            type="checkbox"
            id="isShipToDifferentAddress"
            name="isShipToDifferentAddress"
            checked={isShipToDifferentAddress}
            onChange={handleChange}
          />
          <label htmlFor="isShipToDifferentAddress">
            <h1 className="text-black text-[1.5vw] font-semibold">
              Ship to a different address?
            </h1>
          </label>
        </div>
        {isShipToDifferentAddress && (
          <div>
            <div className="FirstLastname p-3 flex justify-between">
              <div className="w-1/2 pr-2">
                <label htmlFor="firstName">
                  First name <span className="text-red-500 text-lg">*</span>
                </label>
                <br />
                <input
                  className="w-full h-11 mt-1 p-2"
                  type="text"
                  id="firstName"
                  name="firstName"
                />
              </div>
              <div className="w-1/2 pl-2">
                <label htmlFor="lastName">
                  Last Name <span className="text-red-500 text-lg">*</span>
                </label>
                <br />
                <input
                  className="w-full h-11 mt-1 p-2"
                  type="text"
                  id="lastName"
                  name="lastName"
                />
              </div>
            </div>
            <div className="Companyname p-3 flex-col flex">
              <label htmlFor="companyName">Company Name (optional)</label>
              <input
                className="h-11 mt-1 p-2"
                type="text"
                id="companyName"
                name="companyName"
              />
            </div>
            <div className="Countryname p-3 flex flex-col">
              <label htmlFor="countryRegion">
                Country/Region <span className="text-red-500 text-lg">*</span>
              </label>
              <select
                className="h-11 mt-1 p-2"
                id="countryRegion"
                name="countryRegion"
              >
                <option value="Canada">Canada</option>
                <option value="US">US</option>
                <option value="UK">UK</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="Address flex flex-col p-3 gap-2">
              <label htmlFor="streetAddress">
                Street Address <span className="text-red-500 text-lg">*</span>
              </label>
              <input
                className="p-2 h-11 mt-1"
                type="text"
                id="streetAddress"
                placeholder="House number and street name"
              />
              <input
                className="p-2 h-11 mt-1"
                type="text"
                id=""
                placeholder="Apartment, suite, unit, etc. (optional)"
              />
            </div>
            <div className="Town flex flex-col p-3 gap-3">
              <label htmlFor="townCity">
                Town / City <span className="text-red-500 text-lg">*</span>
              </label>
              <input
                className="p-2 h-11 mt-1"
                type="text"
                id="townCity"
                name="townCity"
              />
            </div>
            <div className="Province  p-3 flex flex-col">
              <label htmlFor="countryRegion">
                Province <span className="text-red-500 text-lg">*</span>
              </label>
              <select
                className="p-2 h-11 mt-1"
                id="countryRegion"
                name="countryRegion"
              >
                <option value="Canada">Alberta</option>
                <option value="US">British</option>
                <option value="UK">Manitoba</option>
              </select>
            </div>
            <div className="Postal code p-3 flex flex-col">
              <label htmlFor="companyName">
                Postal code <span className="text-red-500 text-lg">*</span>
              </label>
              <input
                className="p-2 h-11 mt-1"
                type="text"
                id="Postal"
                name="Postal"
              />
            </div>
          </div>
        )}
        <div className="OrdersNotes  p-3 flex flex-col">
          <label htmlFor="companyName">Order notes (optional)</label>
          <input
            className="h-16 mt-1 p-2 text-start"
            type="text"
            id="Postal"
            name="Postal"
            placeholder="Notes about your order, e.g. special notes for delivery."
          />
        </div>
      </form>
    </div>
  );
};

export default DetailForm;
