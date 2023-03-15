import React, { useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import "./AdminTable.css";
import axios from "../../../util/axios";
// import bannerImage from "../../../../../server/public/multerfiles"

const TablePage = (props) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    axios
      .post("/admin/uploadImage", formData)
      .then((response) => {
        console.log("Image uploaded successfully.");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const data_people = {
    columns: [
      {
        label: "No  ",
        field: "id",
        sort: "asc",
      },

      {
        label: "City",
        field: "city",
        sort: "asc",
      },
      {
        label: "Position",
        field: "position",
        sort: "asc",
      },
    ],
    rows: [
      {
        id: "1",
        surname: "image",
        country: "USA",
      },
    ],
  };

  return (
    <>
      <MDBTable fixed bordered responsive className="my-table">
        <MDBTableHead columns={data_people.columns} />
        <MDBTableBody rows={data_people.rows} />
      </MDBTable>
      <form onSubmit={handleSubmit}>
        <label htmlFor="customFile">Upload your banner</label>
        <br />
        <input
          type="file"
          className="form-control"
          id="customFile"
          accept="image/*"
          onChange={handleImageChange}
        />
        <br />
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default TablePage;
