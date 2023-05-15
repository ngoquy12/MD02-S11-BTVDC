import React, { useEffect, useState } from "react";
import axios from "axios";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

export default function ListUser() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [userEdit, setUserEdit] = useState({});
  const [showFormEdit, setShowFormEdit] = useState(false);

  // Lấy thông tin tất cả user
  const loadUser = async () => {
    await axios
      .get("http://localhost:3000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadUser();
  }, []);

  // delete user
  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:3000/users/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    loadUser();
  };
  // edit
  const handleEdit = (id) => {
    setShowFormEdit(true);
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setUserEdit(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-8">
                  <button
                    className="btn-addUSer btn btn-primary"
                    onClick={() => setShowForm(!showForm)}
                  >
                    Add user
                  </button>
                </div>
                <div className="col-sm-4">
                  <div className="search-box">
                    <i className="material-icons"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search…"
                    />
                  </div>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Pin Code</th>
                  <th>Country</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.address}</td>
                    <td>{user.city}</td>
                    <td>{user.pincode}</td>
                    <td>{user.country}</td>
                    <td>
                      <a
                        onClick={() => handleEdit(user.id)}
                        className="edit"
                        title="Edit"
                        data-toggle="tooltip"
                      >
                        <i className="material-icons"></i>
                      </a>
                      <a
                        onClick={() => handleDelete(user.id)}
                        className="delete"
                        title="Delete"
                        data-toggle="tooltip"
                      >
                        <i className="material-icons"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showForm ? <AddUser /> : <></>}
      {showFormEdit ? <EditUser user={userEdit} /> : <></>}
    </>
  );
}
