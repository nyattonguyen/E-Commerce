import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NewProduct() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    const [goToProducts,setGoToProducts] = useState(false);
    const router = useRouter();
    
    async function createProduct(e) {
        e.preventDefault();
        const data = {title, description, price}
        await axios.post('/api/products', data);
        setGoToProducts(true);
    }
    if (goToProducts) {
        router.push('/products');
    }
    return <Layout>
    <form onSubmit={createProduct}>
        <h1 >New Product</h1>
        <lablel>Product name</lablel>
        <input type="text" placeholder="product name"
        value={title} onChange={e => setTitle(e.target.value)} />
        <lablel>Description</lablel>
        <textarea placeholder="description"
        value={description} onChange={e => setDescription(e.target.value)}
        />
        <lablel>Price (in USD)</lablel>
        <input type="number" placeholder="price" 
            value={price} onChange={e => setPrice(e.target.value)}
        />
        <button type="submit" className="btn-primary">Save</button>
    </form>

    </Layout>
}