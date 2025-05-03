import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the Food type
interface Food {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

const FoodCollection: React.FC = () => {
    const [foods, setFoods] = useState<Food[]>([]);

    const apiUrl = "http://localhost:8080/api/foods";
    // Fetch food items from backend API
    useEffect(() => {
        axios.get<Food[]>(apiUrl)
            .then((response) => {
                console.log(response.data,"hello");
                setFoods(response.data);
            })
            .catch((error) => {
                console.error("Error fetching food items:", error);
            });
    }, []);

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="mb-8 text-3xl font-semibold text-center">All Food Items</h1>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {foods.map((food) => (
                    <div key={food.id} className="p-4 transition bg-white rounded-lg shadow-md hover:shadow-lg">
                        <img src={food.imageUrl} alt={food.name} className="object-cover w-full h-48 mb-4 rounded-md" />
                        <h3 className="text-xl font-semibold text-gray-800">{food.name}</h3>
                        <p className="mt-2 text-gray-600">{food.description}</p>
                        <p className="mt-4 text-lg font-bold text-gray-800">${food.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodCollection;
