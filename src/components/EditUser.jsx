import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AddUser(props) {
  const { user } = props;
  console.log(user);
  const [name, setNameEdit] = useState("");
  const [address, setAddressEdit] = useState("");
  const [city, setCityEdit] = useState("");
  const [pincode, setPincodeEdit] = useState("");
  const [country, setCountryEdit] = useState("");

  // Goi api thêm mới user
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/users", {
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
                  value={user.name}
                  onChange={(e) => setNameEdit(e.target.value)}
                  type="text"
                  className="form-control"
                  required=""
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  value={user.address}
                  onChange={(e) => setAddressEdit(e.target.value)}
                  type="text"
                  className="form-control"
                  required=""
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  value={user.city}
                  onChange={(e) => setCityEdit(e.target.value)}
                  type="text"
                  className="form-control"
                  required=""
                />
              </div>
              <div className="form-group">
                <label>Pin Code</label>
                <input
                  value={user.pincode}
                  onChange={(e) => setPincodeEdit(e.target.value)}
                  type="text"
                  className="form-control"
                  required=""
                />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input
                  value={user.country}
                  onChange={(e) => setCountryEdit(e.target.value)}
                  type="text"
                  className="form-control"
                  required=""
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
