import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminSkeleton } from "../../layouts/adminLayouts/AdminSkeleton";

export const AdminRoute = () => {
  return (
    <Routes>
      <Route exact path="/admin" element={<AdminSkeleton />} />
    </Routes>
  );
};
