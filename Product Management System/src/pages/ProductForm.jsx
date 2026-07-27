import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { addProduct, updateProduct } from '../Api/ApiService';

const initialFormState = {
    name: "",
    price: "",
    quantity: "",
    category: "",
    shipping: false
};

export default function ProductForm() {
    const { data: currentProduct } = useLoaderData() || { data: null };
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState(initialFormState);

    useEffect(() => {
        if (currentProduct) {
            setFormValues(currentProduct);
        } else {
            setFormValues(initialFormState);
        }
    }, [currentProduct]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValues({
            ...formValues,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (currentProduct) {
                await updateProduct(currentProduct.id, formValues);
            } else {
                await addProduct(formValues);
            }
            navigate('/');
        } catch (error) {
            console.error("Error saving product:", error);
        }
    };

    const isEditing = !!currentProduct;

    return (
        <Container className="p-5 my-5 shadow-sm rounded border">
            <h2 className="text-center mb-4">{isEditing ? "Edit Product" : "Add New Product"}</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" name="name" value={formValues.name} onChange={handleInputChange} placeholder="Enter product name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" value={formValues.price} onChange={handleInputChange} placeholder="Product price" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" name="quantity" value={formValues.quantity} onChange={handleInputChange} placeholder="Available quantity" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" name="category" value={formValues.category} onChange={handleInputChange} placeholder="Product category" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" name="shipping" label="Free Shipping" checked={formValues.shipping} onChange={handleInputChange} />
                </Form.Group>

                <Button variant="dark" type="submit">
                    {isEditing ? 'Update Product' : 'Save Product'}
                </Button>
            </Form>
        </Container>
    );
}