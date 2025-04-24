import React from 'react';
import { useParams } from 'react-router';
import { useLoaderData } from 'react-router';

const BlogDetail = () => {
    const blogData = useLoaderData();
    const { blogId } = useParams();
    const post = blogData.find((b) => b.id === blogId);

    if (!post) {
        return <div className="text-center py-20 text-xl">Blog post not found.</div>;
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <img src={post.image} alt={post.title} className="rounded-xl w-full h-80 object-cover mb-6" />
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-700">{post.summary}</p>
            {/* You can extend this with full content later */}
        </div>
    );
};

export default BlogDetail;
