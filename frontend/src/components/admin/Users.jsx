import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";
import { useState, useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./style.css"

const Users = () => {
   const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/users/all')
    .then(res => res.json())
    .then(res => {
      setUser(res)
      let user = res;
      console.log('object12', res);
    })
  },[]) 

  const deleteData = (item, url) => {
    return fetch('http://localhost:5000/api/users/delete/' + item, {
      method: 'delete'
    })
    .then(response => response.json());
  }

  const deleteUser = (item, url) => {
    deleteData(item,url );
    window.location.reload(true);
  }



  return (
    <>
      <AdminHeaders>
        <h2>User</h2>
        <PrimaryButton
          // onClick={() => navigate("/admin/products/create-product")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
      <table className="table table-striped table-bordered table-hover" style={{textAlign: "center"}}>
        <thead className="text-white" style={{ background: "#4b70e2" , color: 'white'}} >
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody >
          {
            user && user.length > 0 ? 
            user.map((item, index) => {
              return (
                <tr key={index} >
                  <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{
                      item.isAdmin === true ? "Admin" : "User"
                      }</td>
                  <td>
                      <button type="button" className="btn text-primary mx-6">
                        <EditIcon/>
                      </button>
                      <button type="button" className="btn text-danger" onClick={()=> deleteUser(item._id)}>
                        <DeleteIcon/>
                      </button>
                    </td>
                </tr>
              )
            }) : <tr><td colSpan={5} className='text-center font-weight-bold'>NO DATA</td></tr>
          }
        </tbody>
      </table>
    </>
  );
};

export default Users;
