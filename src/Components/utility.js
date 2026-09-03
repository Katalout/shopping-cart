import { useState, useEffect } from "react";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server errorka");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                let arr = [];
                for (let index = 1; index < 20; index++) {
                    const item = data[index];
                    //name, price, id
                    let { id, title: name, price, image, category } = item;
                    name = name.split(" ").toSpliced(3).join(" ");
                    arr.push({ id, name, price, image, category });
                }
                setProducts(arr)
            })
            .catch((error) => {
                console.log(error);
                setError(error)
            })
            .finally(() => setLoading(false));
    }, []);
    return { products, error, loading };
};

export const data = [
    {
        name: "fidget spinner",
        price: 60,
        id: 1
    },
    {
        name: "ono roller",
        price: 100,
        id: 2
    },
]