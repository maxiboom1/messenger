import "./UsersPanel.css";
import { useEffect, useState } from "react";
import UserListModel from "../../../Models/UserListModel";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import usersService from "../../../Services/UsersService";
import { authStore } from "../../../Redux/AuthState";

function ControlPanel(): JSX.Element {

  return (
    <h3>list of users</h3>
  );

}

export default ControlPanel;
