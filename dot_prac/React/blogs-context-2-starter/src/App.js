import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Home } from "./components/Home";
import { BlogPage } from "./components/BlogPage";
import { TagPage } from "./components/TagPage";
import { CategoryPage } from "./components/CategoryPage";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";

export default function App() {
    const { fetchBlogPosts } = useContext(AppContext);

    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        const page = searchParams.get("page") ?? 1;
        if (location.pathname.includes("tags")) {
            const tag = location.pathname.split("/").at(-1).replace("-", " ");
            fetchBlogPosts(Number(page), tag);
        } else if (location.pathname.includes("categories")) {
            const category = location.pathname
                .split("/")
                .at(-1)
                .replace("-", " ");
            fetchBlogPosts(Number(page), null, category);
        } else {
            fetchBlogPosts(Number(page));
        }
    }, [location.pathname, location.search]);

    return (
        // <>
        // <Header />
        // <div className="my-[100px]">
        //   <Blogs />
        //   <Pagination />
        // </div>
        // </>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs/:blogId" element={<BlogPage />} />
            <Route path="/tags/:tag" element={<TagPage />} />
            <Route path="/categories/:category" element={<CategoryPage />} />
        </Routes>
    );
}
