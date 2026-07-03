import { useEffect, useState } from "react";
import {
    getShippingAddresses,
    createShippingAddress,
    updateShippingAddress,
    deleteShippingAddress,
} from "../../services/checkoutService.js";

const AddressForm = () => {
 
const [formData, setFormData] = useState({
    id: null,
    full_name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    is_default: false,
});

useEffect(() => {
    loadAddress();
}, []);

const loadAddress = async () => {
    try {
        const data = await getShippingAddresses();

        if (data.length > 0) {
            setFormData(data[0]);   // Prefill form
        }
    } catch (error) {
        console.error(error);
    }
};

const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        if (formData.id) {
            await updateShippingAddress(formData.id, formData);
            alert("Address updated successfully.");
        } else {
            const newAddress = await createShippingAddress(formData);
            setFormData(newAddress);
            alert("Address saved successfully.");
        }
    } catch (error) {
        console.error(error);
    }
};  



  return (
    

    <div className={`address p-4 border rounded bg-light`}>
  <h2 className="fw-bold text-dark mb-4">Billing Address</h2>

  <form onSubmit={handleSubmit}>
    <div className="row g-3">

      <div className="col-md-12">
        <label className="form-label text-secondary small fw-semibold">
          Full Name
        </label>
        <input
          className="form-control"
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="Full Name"
        />
      </div>

      <div className="col-md-6">
        <label className="form-label text-secondary small fw-semibold">
          E-mail
        </label>
        <input
          className="form-control"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
        />
      </div>

      <div className="col-md-6">
        <label className="form-label text-secondary small fw-semibold">
          Mobile No
        </label>
        <input
          className="form-control"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Mobile No"
        />
      </div>

      <div className="col-md-12">
        <label className="form-label text-secondary small fw-semibold">
          Address
        </label>
        <input
          className="form-control"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
        />
      </div>

      <div className="col-md-6">
        <label className="form-label text-secondary small fw-semibold">
          Country
        </label>
        <input
          className="form-control"
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
        />
      </div>

      <div className="col-md-6">
        <label className="form-label text-secondary small fw-semibold">
          City
        </label>
        <input
          className="form-control"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
        />
      </div>

      <div className="col-md-6">
        <label className="form-label text-secondary small fw-semibold">
          State
        </label>
        <input
          className="form-control"
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="State"
        />
      </div>

      <div className="col-md-6">
        <label className="form-label text-secondary small fw-semibold">
          PIN Code
        </label>
        <input
          className="form-control"
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          placeholder="PIN Code"
        />
      </div>

      <div className="col-md-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="defaultAddress"
            name="is_default"
            checked={formData.is_default}
            onChange={handleChange}
          />
          <label
            className="form-check-label"
            htmlFor="defaultAddress"
          >
            Set as Default Address
          </label>
        </div>
      </div>

      <div className="col-md-12">
        <button
          type="submit"
          className="btn btn-primary"
        >
          {formData.id ? "Update Address" : "Save Address"}
        </button>
      </div>

    </div>
  </form>
</div>
 
  );
};

export default AddressForm;