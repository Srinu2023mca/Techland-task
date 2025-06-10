import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "How to Improve User Experience",
    summary: "Learn tips and best practices to create a seamless user journey.",
    image: "https://fivedottwelve.com/wp-content/uploads/2022/03/64_ux-1.jpg",
    date: "June 1, 2025",
  },
  {
    id: 2,
    title: "Why React is Still the Best in 2025",
    summary: "Explore the reasons why developers love React in today's ecosystem.",
    image: "https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg",
    date: "June 5, 2025",
  },
  {
    id: 3,
    title: "10 Productivity Hacks for Developers",
    summary: "Speed up your workflow with these practical coding hacks.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS606oZnWplYuzEgQb5VbObvYSz1UuEPrFcHA&s",
    date: "June 9, 2025",
  },
];

const Blog = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-emerald-200 via-emerald-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <p className="text-gray-600">{post.summary}</p>
                <button className="mt-4 text-emerald-600 hover:underline">Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
