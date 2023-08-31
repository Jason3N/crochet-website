import React from 'react'
import './Products.css';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, Grid, Typography, CardMedia } from '@mui/material';
import { Box } from '@mui/material';
import starCatBeanieImage from '../product_images/starbea.jpg'

const ProductItems = [
    {
        id: 1,
        name: "star cat beanie",
        image: starCatBeanieImage,
        price: "$35"
    },
    {
        id: 2,
        name: "fingerless gloves",
        image: starCatBeanieImage,
        price: "$18"
    },
    {
        id: 3,
        name: "babydoll top",
        image: starCatBeanieImage,
        price: "$75"
    },
    {
        id: 4,
        name: "babydoll top",
        image: starCatBeanieImage,
        price: "$75"
    },
    {
        id: 5,
        name: "granny coaster",
        image: starCatBeanieImage,
        price: "$12"
    }, 
];


const Products = () => {
    return (
        <Grid container spacing={12} className="product-grid" style={{paddingTop: '75px'}}>
            {ProductItems.map((product) => (
                <Grid item lg={3} key={product.id}> 
                    <RouterLink to={`/product/${product.id}`} className="no-outline">
                        <Card style = {{borderRadius: '22px'}}>
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                                <CardMedia
                                    component="img"
                                    height="280"
                                    width="100"
                                    image={product.image}
                                    alt={product.name}
                                    sx={{ borderRadius: '22px' }}
                                />
                                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 0 }}>
                                    <Typography variant="h6" component="div" sx={{ fontFamily: 'Georgia, serif', textDecoration: 'none' }}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
                                        {product.price}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </RouterLink>
                </Grid>
            ))}
        </Grid>
    );
}


export default Products;