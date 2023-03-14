import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserHome } from "../../pages/user/UserHome";
export function UserRoute() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<UserHome />} />
      </Routes>
    </>
  );
}
