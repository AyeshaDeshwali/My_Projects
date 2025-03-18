import { useState } from "react";
import "./App.css";
import axios from "axios";
import FormTable from "./components/formTable.js";
axios.defaults.baseURL = "http://localhost:3006/"; // Update this line
function App() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    email: "",
    mobile: "",
    id: "",
  });
  const [dataList, setDataList] = useState([]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((perv) => {
      return {
        ...perv,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("/create", formData);
    console.log(data);
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData();
      setFormData({ name: "", email: "", mobile: "" });
    }
  };

  const getFetchData = async () => {
    const data = await axios.get("/");
    if (data.data.success) {
      setDataList(data.data.data);
    }
  };
  useState(() => {
    getFetchData();
  }, []);

  console.log(dataList);

  const handleDelete = async (id) => {
    const data = await axios.delete("/delete/" + id);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put("/update/", formDataEdit);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
      setEditSection(false);
    }
  };
  ////////////////////////////////////////////////
  const handleEditOnChange = async (e) => {
    const { name, value } = e.target;
    setFormDataEdit((perv) => {
      return {
        ...perv,
        [name]: value,
      };
    });
  };

  const handleEdit = (e) => {
    setFormDataEdit(e);
    setEditSection(true);
  };
  return (
    <>
      <div className="container">
        <button className="btn btn-add" onClick={() => setAddSection(true)}>
          {" "}
          Add
        </button>
        {addSection && (
          <FormTable
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleClose={() => setAddSection(false)}
            rest={formData}
          />
        )}

        {editSection && (
          <FormTable
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleClose={() => setEditSection(false)}
            rest={formDataEdit}
          />
        )}

        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataList[0] ? (
                dataList.map((e) => {
                  console.log(e);

                  return (
                    <tr>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.mobile}</td>
                      <td>
                        <button
                          className="btn btn-edit"
                          onClick={() => {
                            handleEdit(e);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-delete"
                          onClick={() => handleDelete(e._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <p style={{ textAlign: "center" }}>NO Data</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
