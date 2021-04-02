import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const classes = useStyles();
    return (
        <div className="product-style">
            {
                products.length === 0 &&
                <div className={classes.root}>
                    <CircularProgress color="secondary" />
                </div>
            }
            {
                products.map(pd => <Product product={pd}></Product>)
            }
        </div>
    );
};

export default Home;