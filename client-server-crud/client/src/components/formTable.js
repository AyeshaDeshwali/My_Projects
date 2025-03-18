import React from "react";
import { MdClose } from "react-icons/md";
import "../App.css";

const FormTable = ({ handleSubmit, handleOnChange, handleClose, rest }) => {
  return (
    <div className="addContainer">
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleClose}>
          <MdClose />
        </div>

        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleOnChange}
          value={rest.name}
        ></input>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleOnChange}
          value={rest.email}
        ></input>
        <label htmlFor="mobile">Mobile: </label>
        <input
          type="number"
          id="mobile"
          name="mobile"
          onChange={handleOnChange}
          value={rest.mobile}
        ></input>
        <button className="btn submit">Submit</button>
      </form>
    </div>
  );
};

export default FormTable;
