import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import './home.css';
import Dropdown from './Dropdown';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import ProductPage from "./ProductPage";
import NavBar from "./NavBar";


const Home = () => {
    return (
        <><NavBar /><main>
            {/* <img src={back1} alt="error"/> */}
            <section className="intro_sec">
                <div className="intro">
                    <ul>
                        <li><AccessAlarmIcon /> 2 Hour Delivery </li>
                        <li><LocalShippingIcon /> Free Shipping</li>
                        <li><TagFacesIcon /> 1000+ happy customers</li>
                    </ul>
                </div>
            </section>
            <section className="middle">
                <section className="filter-sec">
                    <div className="filters">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="filter"><b><center>Filters</center></b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="cells">
                                        <Dropdown />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </section>
                <section className="sort">
                    <div className="sorting">
                        <ul>
                            <li><b>Sort by:</b></li>
                            <li className="shover">What's new</li>
                            <li className="shover">Popularity</li>
                            <li className="shover">High to low</li>
                            <li className="shover">Low to High</li>
                            <li className="shover">Customer rating</li>
                        </ul>
                    </div>
                    <div className="products">
                        <ProductPage />
                    </div>
                </section>
            </section>
            <footer className="foot">
                <div className="footer-section">
                    <h3>Contact info</h3>
                    <Typography>+91-6289143476</Typography>
                    <Typography>+91-6281409227</Typography>
                    <Typography>fnr@gmail.com</Typography>
                    <Typography>Kolkata-700050</Typography>
                </div>
                <div className="footer-section">
                    <h3>About Us</h3>
                    <Typography>Company Info</Typography>
                    <Typography>Careers</Typography>
                    <Typography>Press Releases</Typography>
                    <Typography>Blog</Typography>
                </div>
                <div className="footer-section">
                    <h3>Policy Info</h3>
                    <Typography>Privacy Policy</Typography>
                    <Typography>Terms of Use</Typography>
                    <Typography>Return Policy</Typography>
                    <Typography>Accessibility</Typography>
                </div>
            </footer>
        </main></>
    )
}
export default Home;









// import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
// import './home.css';
// import pic1 from './Pictures/pic1.jpeg';
// import pic2 from './Pictures/pic2.webp';
// import pic3 from './Pictures/pic3.webp';
// import pic4 from './Pictures/pic4.jpg';
// import pic5 from './Pictures/pic5.jpg';
// import pic6 from './Pictures/pic6.png';
// import pic7 from './Pictures/pic7.jpeg';
// import pic8 from './Pictures/pic8.webp';
// import pic9 from './Pictures/pic9.jpg';
// import pic10 from './Pictures/pic10.jpeg';
// import Dropdown from './Dropdown';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import TagFacesIcon from '@mui/icons-material/TagFaces';
// import ProductPage from "./ProductPage";
// const Home=()=>{
    
//     return(
//         <main>
//             <section className="intro_sec">
//            <div className="intro">
//            <ul><b>
//             <li><AccessAlarmIcon/> 2 Hour Delivery </li>
//             <li><LocalShippingIcon/> Free Shipping</li>
//             <li><TagFacesIcon/> 1000+ happy customers</li>
//             </b></ul>
//            </div>
//            </section>
//         <section className="middle">
//         <section className="filter-sec">
//         <div className="filters">
//             <Table>
//                 <TableHead>
//                         <TableCell className="filter"><b><center>Filters</center></b></TableCell>
//                 </TableHead>
//                 <TableBody>
//                     <TableRow>
//                     <TableCell className="cells">
//                     <Dropdown                       
//                      />
//                     </TableCell>
//                     </TableRow>
//                 </TableBody>
//             </Table>     
//             </div>
//             </section>
//             <section className="sort">
//             <div className="sorting">
//             <ul>
//             <b>Sort by:</b>
//             <li>What's new</li>
//             <li>Popularity</li>
//             <li>High to low</li>
//             <li>low to High</li>
//             <li>Customer rating</li> 
//         </ul>
//         </div>      
//         <div class="products">
//             <ProductPage/>
//         </div>
//         </section>
//         </section>
//         </main>
//     )
// }
// export default Home;


