
import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,Button,
  TableRow, Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import UserForm from './UserForm'; // Import the new form
import TablePagination from '@mui/material/TablePagination';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${TableCell.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${TableCell.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': { backgroundColor: theme.palette.action.hover },
  '&:last-child td, &:last-child th': { border: 0 },
}));

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
  return response.json();
}

export default function Displaydata() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null); //Store selected user for editing
  const [page, setPage] = useState(0);
  const rowsPerPage = 5; // Fixed to 5



  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleAddUser = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };
  const handleEditClick = (user) => {
    setEditUser(user); //Send selected user to form
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers(prev =>
      prev.map(u => (u.id === updatedUser.id ? updatedUser : u))
    );
    setEditUser(null); // Reset after update
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleDeleteUser = (id) => {
  const confirmed = window.confirm("Are you sure you want to delete this user?");
  if (confirmed) {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  }
  
  

};

if (users.length === 0) return <p>Loading...</p>;
  return (
    <>
      <UserForm 
        onAddUser={handleAddUser}
        onUpdateUser={handleUpdateUser}
        editUser= {editUser}
      />
      <TableContainer component={Paper}>
        <Table style={{ width: 1200 }} >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.address.city}</TableCell>
                    <TableCell>{user.company.name}</TableCell>
                    <TableCell>
                    <Button onClick={() => handleEditClick(user)}>Edit</Button>
                    <Button variant="outlined" color="error" onClick={() => handleDeleteUser(user.id)}>Delete </Button>
                    </TableCell>                    
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={users.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5]} // Size 5
      />

    </>
  );
}