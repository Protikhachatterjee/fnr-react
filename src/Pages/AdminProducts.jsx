import styled from "@emotion/styled";
import { useState } from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography ,Button} from "@mui/material";
import { addProduct } from "../service/api";
const Container= styled(FormGroup)
`width:50%;
margin:5% auto 0 auto;
&>div{
    margin-top:20px
}`
const initialValues={
    name: '',
    price: '',
    description: ''
    
}
const AdminProducts=()=>{
    const [product,setProduct]=useState(initialValues);
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };
    const onValueChange=(e)=>{
       
        setProduct({...product,[e.target.name]:e.target.value})
        console.log(product)
    }

    const addProductDetails=async()=>{
       await addProduct(product);
       alert("Product Added successfully!!");

    }
    return(
        <Container>
           
        <Typography variant="h3">Add Product</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
           <Input onChange={(e)=> onValueChange(e)}name="name"/>
        </FormControl>
        <FormControl>
            <InputLabel>Price</InputLabel>
            <Input onChange={(e)=> onValueChange(e)}name="price"/>
        </FormControl>
        <FormControl>
            <InputLabel>Description</InputLabel>
            <Input onChange={(e)=> onValueChange(e)}name="description"/>
        </FormControl>
     <FormControl>
     <Button
                        variant="contained"
                        component="label"
                    >
                        Upload Image
                        <input
                            type="file"
                            hidden
                            onChange={handleImageChange}
                        />
                    </Button>
                    {image && <Typography>{image.name}</Typography>}
     <Button onClick={()=>addProductDetails()}variant="contained">Add</Button>
     </FormControl>
    </Container>
    )
}
export default AdminProducts;