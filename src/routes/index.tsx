import React from "react";
import { Redirect } from "react-router-dom";
import LoginPage from "../features/Authentication/LoginPage";

// Pages Component

// Authentication related pages
import DashboardPage from "../features/Dashboard/DashboardPage";
import WarehousePage from "../features/Warehouse/WarehousePage";


// Extra Pages

const authProtectedRoutes = [
  // Extra Pages

  { path: "/dashboard", component: DashboardPage },
  { path: "/warehouse", component: WarehousePage },

  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const publicRoutes = [
  { path: "/login", component: LoginPage },

  // Extra Pages
];

export { authProtectedRoutes, publicRoutes };
