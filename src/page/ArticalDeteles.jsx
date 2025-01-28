import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArticleDetails = () => {
    const { id } = useParams(); // URL থেকে article ID

    // আর্টিকেল ডেটা ফেচ করার জন্য React Query ব্যবহার
    const { data: article = {}, isLoading, error } = useQuery({
        queryKey: ['article', id],
        queryFn: async () => {
            const res = await axios.get(`https://newspaper-server-two.vercel.app/articles/${id}`);
            return res.data;
        },
        enabled: !!id, // id না থাকলে কোয়েরি চালাবে না
    });

    // লোডিং স্টেট
    if (isLoading) {
        return <div>Loading article details...</div>;
    }

    // এরর স্টেট
    if (error) {
        return <div>Something went wrong! {error.message}</div>;
    }

    // আর্টিকেল ডেটা রেন্ডার
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                {article.title}
            </h1>

            <div className="flex flex-col md:flex-row items-start gap-6">
                {article.image && (
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full md:w-1/3 rounded-lg shadow-md"
                    />
                )}
                <div className="flex-1">
                    <p className="text-gray-600 mb-4">
                        <strong>Publisher:</strong> {article.publisher}
                    </p>
                    <p className="text-gray-700 mb-4">
                        <strong>Description:</strong> {article.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetails;
