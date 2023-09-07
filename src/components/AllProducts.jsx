import { useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function AllProducts() {
  
  const navigate = useNavigate();
  const [productsList, setProductsList] = useState([]);


  useEffect(() => {fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => setProductsList(json))
    },[])


  const displayProducts = (products) =>{
    return products.map((product)=>{
        return (
                <Grid 
                    key={product.id} 
                    xs={12} sm={6} md={4} lg={3} 
                    display= "flex"   
                > 
                    <Box justifyContent={"center"} onClick={() => {navigate("/product/" + product.id); }}>
                        <img src={product.image} alt={product.title} width={200} height={200} />
                        <h4>{product.title}</h4>
                        <h3>Price: US$ {product.price}</h3>
                    </Box>
                    
                </Grid>)}
    )
}

return (

    <>
        <Box  container display={"block"} m={15}>
            <Box display={"flex"} 
            justifyContent={"center"} 
            sx={{position: "relative", width: "100%"}} 
            bgcolor={"white"} >
                <h3>Selecciona uno de los productos para verlos en detalle</h3>
            </Box>
            <Grid container spacing={2}>
            { displayProducts(productsList)}
            </Grid>
        </Box>
    </>

)
}