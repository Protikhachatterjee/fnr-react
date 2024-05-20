import axios from "axios";

const userUrl='http://localhost:8090';
const adminUrl='http://localhost:8090';
const productUrl='http://localhost:8090';
export const addUser=async(user)=>{
    try{
        return await axios.post(`${userUrl}/user`,user)
    }catch(error)
    {
        console.log('Error while calling adduser Api ',error.message);
    }
}
    
export const getUsers=async()=>{
    
    try{
        return await axios.get(`${userUrl}/users`);
    }catch(error){
        console.log('Error while calling getUsers api',error.message);
    }
}

 export const getUser=async(id)=>{
        id=id || '';
        try{
            return await axios.get(`${userUrl}/users/${id}`);
        }catch(error){
            console.log('Error while calling getUsers api',error.message);
        }
    }

    export const editUser=async(user,id)=>{
        try{
        return await axios.put(`${userUrl}/user` ,user)
        }catch(error){
            console.log("error while calling update api",error.message);
    
        }
    }
    
    
    export const deleteUser=async(id)=>{
        try{
            return await axios.delete(`${userUrl}/user/${id}`);
        }catch(error){
            console.log("error while calling delete api",error.message);
    
        }
    }

    export const getAdmins=async()=>{
    
        try{
            return await axios.get(`${adminUrl}/admins`);
        }catch(error){
            console.log('Error while calling getUsers api',error.message);
        }
    }
    
     export const getAdmin=async(id)=>{
            id=id || '';
            try{
                return await axios.get(`${adminUrl}/admins/${id}`);
            }catch(error){
                console.log('Error while calling getUsers api',error.message);
            }
        }
    
  

    export const getAdminLogin = async (email = 'admin@gmail.com') => {
            try {
                return await axios.get(`${adminUrl}/admin/${email}`);
            } catch (error) {
                console.error('Error while calling getAdmins API:', error.message);
                return null; // Return null or an appropriate value indicating failure
            }
        };

   
export const getLogin=async(email)=>{
    email=email || '';
    try{
        return await axios.get(`${userUrl}/user/${email}`);
    }catch(error){
        console.log('Error while calling getUsers api',error.message);
    }
}


export const addProduct=async(product)=>{
    try{
        return await axios.post(`${productUrl}/product`,product)
    }catch(error)
    {
        console.log('Error while calling addproduct Api ',error.message);
    }

}

export const getProducts=async()=>{
    
    try{
        return await axios.get(`${productUrl}/products`);
    }catch(error){
        console.log('Error while calling getProducts api',error.message);
    }
}

 export const getProduct=async(id)=>{
        id=id || '';
        try{
            return await axios.get(`${productUrl}/products/${id}`);
        }catch(error){
            console.log('Error while calling getProducts api',error.message);
        }
    }

    export const editProduct=async(product,id)=>{
        try{
        return await axios.put(`${productUrl}/product` ,product)
        }catch(error){
            console.log("error while calling update api",error.message);
    
        }
    }
    
    
    export const deleteProduct=async(id)=>{
        try{
            return await axios.delete(`${productUrl}/product/${id}`);
        }catch(error){
            console.log("error while calling delete api",error.message);
    
        }
    }