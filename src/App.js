import './App.css';
import NavBar from './component/NavBar';
import Register  from './component/Register';
import Home from './component/Home';
import Login from './component/Login';
import AdminLogin from './component/AdminLogin';
import Logout from './component/Logout';
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import EditUser from './component/EditUser';
import UserDashboard from './component/UserDashboard';
import AdminDashboard from './component/AdminDashboard';
import AdminHome from './Pages/AdminHome';
import AdminProducts from './Pages/AdminProducts';
import AdminOrders from './Pages/AdminOrders';
import AdminCustomers from './Pages/AdminCustomers';
import ProductPage from './component/ProductPage';
import ProductList from './component/ProductList';
import ViewProduct from './Pages/ViewProduct';
import EditProduct from './Pages/EditProduct';
import AdminNavbar from './component/AdminNavbar';
function App() {
  return (
    <><BrowserRouter>
      {/* <NavBar />
      <AdminNavbar /> */}
      <Routes>
        
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/admin/" element={<AdminHome />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/customers" element={<AdminCustomers />} />
        <Route path="/admin/viewproduct" element={<ViewProduct />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />

      </Routes>
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Register />} />
          {/* <Route path="/view" element={<ViewUser/>}/> */}
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/nav" element={<NavBar />} />
          <Route path="/udash" element={<UserDashboard />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/productlist" element={<ProductList />} />
        </Routes>


      </BrowserRouter></>
    
  );
}   

export default App;
