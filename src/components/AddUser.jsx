import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AddUser() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");

  // Goi api thêm mới user
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", {
        name: name,
        address: address,
        city: city,
        pincode: pincode,
        country: country,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h4 className="modal-title">Add User</h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Pin Code</label>
                <input
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <input type="reset" className="btn btn-default" />
              <input type="submit" className="btn btn-success" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
