import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "./Header";
import { BlogDetails } from "./BlogDetails";

export const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/get-blog";
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const { loading, setLoading } = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);
    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}?blogId=${blogId}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            if (!data.relatedBlogs || data.relatedBlogs.length === 0)
                throw new Error("Something Went Wrong");
            console.log("Api Response", data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.log("Error in Fetching BlogPosts", error);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (blogId) fetchRelatedBlogs();
    }, [location.pathname]);

    return (
        <div className="flex flex-col w-full">
            <Header />
            <div>
                <button
                    className="ml-32 mt-24 mb-5 border-2 border-gray-300 py-1 px-4 rounded-md hover:bg-gray-300"
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>
            </div>
            {loading ? (
                <p>Loading</p>
            ) : blog ? (
                <div className="flex flex-col gap-y-10 items-center">
                    <BlogDetails post={blog} />
                    <h2 className="font-bold text-2xl uppercase text-center">
                        Related Blogs
                    </h2>
                    {relatedBlogs.map((blog) => (
                        <BlogDetails key={blog.id} post={blog} />
                    ))}
                </div>
            ) : (
                <p>No Blog Found</p>
            )}
        </div>
    );
};
