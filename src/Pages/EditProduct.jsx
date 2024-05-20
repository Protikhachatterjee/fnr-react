import styled from "@emotion/styled";
import { useState ,useEffect} from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography ,Button} from "@mui/material";
import { getProduct,editProduct } from "../service/api";
import { useParams } from "react-router-dom";
const Container= styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
&>div{
    margin-top:20px
}`
const initialValues={
    name: '',
    price: '',
    description: ''
}
const EditProduct=()=>{
    const [product,setProduct]=useState(initialValues)
    const {id}=useParams();

    useEffect(()=>{
        getProductData();
    },[])

    const getProductData=async()=>{
        let response=await getProduct(id);
        console.log(response);
       setProduct(response.data);

    }

    const onValueChange=(e)=>{
       
        setProduct({...product,[e.target.name]:e.target.value})
        console.log(product)
    }

    const addProductDetails=async()=>{
      await editProduct(product,id);
      //Navigate('view');

    }
    return(
        //<p>Hello Register</p>
        <Container>
           
            <Typography variant="h3">Edit Product</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
               <Input onChange={(e)=> onValueChange(e)}name="name" value={product.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Price </InputLabel>
                <Input onChange={(e)=> onValueChange(e)}name="price" value={product.price}/>
            </FormControl>
            <FormControl>
                <InputLabel>Description</InputLabel>
                <Input onChange={(e)=> onValueChange(e)}name="description" value={product.description}/>
            </FormControl>
            
         <FormControl>
         <Button onClick={()=>addProductDetails()}variant="contained">EditProduct</Button>
         </FormControl>
        </Container>
    )
}
export default EditProduct;