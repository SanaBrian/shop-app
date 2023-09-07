import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/material'
import {useParams} from "react-router-dom"
import { useState, useEffect } from 'react';



export default function SingleProduct() {

    const [product, setProduct] = useState([]);
    const {productId} = useParams()

    useEffect(() => {fetch("https://fakestoreapi.com/products/" + productId)
    .then((response) => response.json())
    .then((json) => setProduct(json))
    },[])

  return (
    <>
        <Card sx={{display:"flex"}} >
            <Box sx={{display: "flex", flexDirection: 'row' }}>
                <CardMedia sx={{flex: '1 0 auto', width: 500, maxHeigth: 600, margin: 20}}
                    component="img"
                    image={product.image}
                    alt={product.title}
                />
                <CardContent sx={{ flex: '1 1 auto',  width: 400, maxHeigth: 700}}>
                    <Typography gutterBottom variant="h4" component="div">
                        {product.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {product.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                    <Typography gutterBottom variant="h4" component="div">
                        US$ {product.price} 
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    </>
  )
}
