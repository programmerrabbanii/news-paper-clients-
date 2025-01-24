import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';

const AllArticles = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPublisher, setSelectedPublisher] = useState('');
    const [selectedTag, setSelectedTag] = useState('');

    const { data: articles = [], isLoading, error } = useQuery({
        queryKey: ['articles', searchQuery, selectedPublisher, selectedTag],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/news', {
                params: {
                    title: searchQuery,
                    publisher: selectedPublisher,
                    tags: selectedTag,
                },
            });
            return res.data;
        },
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading articles!</p>;
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h3 className="text-2xl font-bold mb-4">All Articles</h3>

            {/* Filter Section */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search by title"
                    className="border p-2 rounded mr-2"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select
                    className="border p-2 rounded mr-2"
                    onChange={(e) => setSelectedPublisher(e.target.value)}
                >
                    <option value="">Filter by Publisher</option>
                    <option value="Publisher1">Publisher1</option>
                    <option value="Publisher2">Publisher2</option>
                    {/* Add more publishers as needed */}
                </select>
                <select
                    className="border p-2 rounded"
                    onChange={(e) => setSelectedTag(e.target.value)}
                >
                    <option value="">Filter by Tag</option>
                    <option value="Tag1">Tag1</option>
                    <option value="Tag2">Tag2</option>
                    {/* Add more tags as needed */}
                </select>
            </div>

            {/* Articles List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                    <div
                        key={article.id}
                        className={`p-4 border rounded shadow ${
                            article.isPremium ? 'bg-yellow-100' : 'bg-white'
                        }`}
                    >
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-40 object-cover rounded mb-2"
                        />
                        <h4 className="text-lg font-bold">{article.title}</h4>
                        <p className="text-sm text-gray-500">By {article.publisher}</p>
                        <p className="text-gray-700">{article.description}</p>
                        <button
                            className={`mt-2 px-4 py-2 rounded ${
                                article.isPremium && !article.isSubscribed
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-[#070CEC] text-white'
                            }`}
                            disabled={article.isPremium && !article.isSubscribed}
                            onClick={() =>
                                !article.isPremium || article.isSubscribed
                                    ? window.location.href = `/articles/${article.id}`
                                    : null
                            }
                        >
                            Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllArticles;
