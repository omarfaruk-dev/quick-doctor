import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const categories = [
    'All',
    'Health Tips',
    'Mental Wellness',
    'Childcare',
    'Nutrition',
    'Skin Care'
];

const Blogs = () => {
    const blogData = useLoaderData();
    const [blogs, setBlogs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        setBlogs(blogData);
    }, [blogData]);

    const featuredPost = blogs.find(post => post.featured);
    const filteredBlogs = blogs.filter(post => {
        return (
            !post.featured &&
            (selectedCategory === 'All' || post.category === selectedCategory)
        );
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <title>Blogs - Health Tips</title>
            {/* Category Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-full border font-medium transition ${selectedCategory === category
                            ? 'bg-[#176AE5] text-white'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Featured Blog Post */}
            {featuredPost && (
                <div className="mb-12 h- bg-white rounded-2xl">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <img
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            className="w-full h-64 object-cover rounded-2xl shadow-md"
                        />
                        <div className='p-5'>
                            <h2 className="text-4xl font-bold mb-4">{featuredPost.title}</h2>
                            <p className="text-gray-700 mb-4">{featuredPost.summary}</p>
                            <Link
                                to={`/blogs/${featuredPost.id}`}
                                className="text-[#176AE5] font-medium hover:underline"
                            >
                                Read Full Article →
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Filtered Blog Cards */}
            {filteredBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBlogs.map((post) => (
                        <div key={post.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                            <div className="relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-40 object-cover"
                                />
                                <span className="absolute top-2 right-2 bg-[#176AE5] text-white text-xs px-3 py-1 rounded-full shadow-sm">
                                    {post.category}
                                </span>
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{post.summary}</p>
                                <Link
                                    to={`/blogs/${post.id}`}
                                    className="text-[#176AE5] font-medium hover:underline"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-10">No blog posts in this category.</p>
            )}
        </div>
    );
};

export default Blogs;
