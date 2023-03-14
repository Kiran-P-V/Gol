import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const TablePage = (props) => {
  const data_people = {
    columns: [
      {
        label: "#",
        field: "id",
        sort: "asc",
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
      },
      {
        label: "Surname",
        field: "surname",
        sort: "asc",
      },
      {
        label: "Country",
        field: "country",
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
      {
        label: "Age",
        field: "age",
        sort: "asc",
      },
    ],
    rows: [
      {
        id: "1",
        name: "Kate",
        surname: "Moss",
        country: "USA",
        city: "New York City",
        position: "Web Designer",
        age: "23",
      },
    ],
  };

  return (
    <MDBTable fixed bordered>
      <MDBTableHead columns={data_people.columns} />
      <MDBTableBody rows={data_people.rows} />
    </MDBTable>
  );
};

export default TablePage;
