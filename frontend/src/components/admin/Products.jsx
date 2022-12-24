import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react'
import "./style.css"

const Products = () => {
  const { items: data, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
console.log('object: ', data);
  // const handlEditProduct = (product) => {
  //   useEffect(() => {
  //     fetch(`http://localhost:5000/api/products/delete/` + id, {
  //       method: 'DELETE'
  //     })
  //     .then(res => res.json())
  //     .then(res => {
        
  //     })
  //   },[]) 
  // };

  const deleteData = (item, url) => {
    return fetch('http://localhost:5000/api/products/delete/' + item, {
      method: 'delete'
    })
    .then(response => response.json());
  }

  const deleteProduct = (item, url) => {
    deleteData(item,url );
    window.location.reload(true);
  }

  return (
    <>
      <AdminHeaders>
        <h2>Products</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/products/create-product")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
      <table className="table table-striped table-bordered table-hover" style={{textAlign: "center"}}>
        <thead className="text-white" style={{ background: "#4b70e2" , color: 'white'}} >
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Brand</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody >
          {
            data && data.length > 0 ? 
            data.map((item, index) => {
              return (
                <tr key={index} >
                  <td>{index+1}</td>
                  <td style={{width:'10%'}}><img src={item.image.url} className='w-20' alt="" style={{width:'100%', height: '100%'}}/> </td>
                    <td>{item.name}</td>
                    <td>{item.brand}</td>
                    <td>{item.price}</td>
                  <td>
                      <button type="button" className="btn text-primary mx-6">
                        <EditIcon/>
                      </button>
                      <button type="button" className="btn text-danger" onClick={()=> deleteProduct(item._id)}>
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

export default Products;
