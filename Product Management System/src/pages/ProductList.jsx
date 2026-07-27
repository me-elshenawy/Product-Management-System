import React, { useState } from 'react';
import { Table, Badge, Button, Form, InputGroup } from 'react-bootstrap';
import { FiEdit, FiEye } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function ProductList({ products, onDelete }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!products.length) {
        return <h3 className="text-center mt-5">No products available. <Link to="/add">Add one!</Link></h3>;
    }

    return (
        <div className="container p-5">
            <h2 className="text-center mb-4">Product List</h2>

            <Form className="mb-4">
                <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder="Search for products by name or category..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </InputGroup>
            </Form>

            {filteredProducts.length > 0 ? (
                <Table striped bordered hover responsive className="text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Shipping</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>${parseFloat(product.price).toFixed(2)}</td>
                                <td>{product.quantity}</td>
                                <td>{product.category}</td>
                                <td>
                                    {product.shipping ? <Badge bg="success">Free</Badge> : <Badge bg="danger">Not Free</Badge>}
                                </td>
                                <td>
                                    <Link to={`/${product.id}`} className="btn btn-outline-info btn-sm me-2" title="View">
                                        <FiEye />
                                    </Link>
                                    <Link to={`/${product.id}/edit`} className="btn btn-outline-primary btn-sm me-2" title="Edit">
                                        <FiEdit />
                                    </Link>
                                    <Button variant="outline-danger" size="sm" onClick={() => onDelete(product.id)} title="Delete">
                                        <AiFillDelete />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <h3 className="text-center mt-5">No products match your search.</h3>
            )}
        </div>
    );
}