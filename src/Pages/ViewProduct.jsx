import { useEffect,useState } from "react";
import { Table,TableHead,TableBody,TableRow,TableCell, Button } from "@mui/material";
import { getProducts,deleteProduct } from "../service/api.js";
import { Link } from "react-router-dom";

    const ViewProduct=()=>{
        const[products,setProducts] = useState([])
        useEffect(()=>{
            getProductsDetails();
        },[])
        const getProductsDetails=async()=>{
            let response=await getProducts();
            console.log(response);
           setProducts(response.data);
        }
        const deleteProductData=async(id)=>{
            await deleteProduct(id);
            getProductsDetails();
        }
   return(
       <Table>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
       <TableBody>
       {
        products.map(product=>(
            <TableRow>
               <TableCell>{product.id}</TableCell> 
               <TableCell>{product.name}</TableCell> 
               <TableCell>{product.description}</TableCell> 
               <TableCell>{product.price}</TableCell> 
               <TableCell>
                <Button component={Link} to={`/editproduct/${product.id}`}>Edit</Button>
                <Button onClick={()=>deleteProductData(product.id)}>Delete</Button>
               </TableCell>
            </TableRow>
        ))
       }

       </TableBody>
        
       </Table>

       
    )
}
export default ViewProduct;