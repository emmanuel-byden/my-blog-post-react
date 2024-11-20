import React, { useState } from 'react';
import './Blog.css';

function Blog() {
    const [visiblePostIndex, setVisiblePostIndex] = useState(null);

    const posts = [
        {
            id: 1,
            image: '/images/download (1).jpeg',
            title: 'Learning React',
            content: 'React is a powerful JavaScript library for building user interfaces',
            author: 'John Doe',
            time: '11:12 AM',
            date: '19 November 2024'
        },
        {
            id: 2,
            image: '/images/download (2).jpeg',
            title: 'Getting Started with Vite',
            content: 'Vite makes development fast and simple',
            author: 'Jane Smith',
            time: '11:12 AM',
            date: '19 November 2024'
        },
        {
            id: 3,
            image: '/images/download (2).jpeg',
            title: 'Global Village',
            content: 'Exploring the interconnected world of technology',
            author: 'Bill Gates',
            time: '11:12 AM',
            date: '19 November 2024'
        }
    ];

    const toggleContent = (index) => {
        if (visiblePostIndex === index) {
            setVisiblePostIndex(null);
        } else {
            setVisiblePostIndex(index);
        }
    };

    return (
        <div className='blog'>
            <h1>Blog Posts</h1>
            <div className='grid'>
                {posts.map((post, index) => (
                    <div key={post.id} className='card'>
                        <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg" />
                        <h2 className='text-xl font-bold mt-2 cursor-pointer' onClick={() => toggleContent(index)}>
                            {post.title}
                        </h2>
                        {visiblePostIndex === index && (
                            <div>
                                <p className='mt-1'>{post.content}</p>
                                <p className='mt-2 text-gray-600'><b>by {post.author}</b></p>
                                <p className='text-sm text-gray-500'><b>{post.time}</b></p>
                                <p className='text-sm text-gray-500'><b>{post.date}</b></p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Blog;
