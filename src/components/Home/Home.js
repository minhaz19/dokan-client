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
        fetch('https://serene-retreat-69880.herokuapp.com/products')
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
                products.map(pd => <Product key={pd._id} product={pd}></Product>)
            }
        </div>
    );
};

export default Home;