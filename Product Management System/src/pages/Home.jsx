import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ProductList from './ProductList';
import { deleteProduct } from '../Api/ApiService';

function Home() {
    const { data: initialProducts } = useLoaderData();
    const [products, setProducts] = React.useState(initialProducts);

    const handleDeleteProduct = async (productId) => {
        try {
            await deleteProduct(productId);
            setProducts(products.filter(p => p.id !== productId));
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <Container >
            <h1 className="text-center my-4">Product Management System</h1>
            <ProductList
                products={products}
                onDelete={handleDeleteProduct}
            />
        </Container>
    );
}

export default Home;