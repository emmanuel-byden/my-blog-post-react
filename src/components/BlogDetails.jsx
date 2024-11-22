import { useParams } from "react-router-dom";

function BlogDetails({ posts }) {
    const { id } = useParams();
    const blog = posts.find((post) => post.id === parseInt());

    if (!blog) {
        return <p>Blog not found</p>
    }
    return(
        <div className="blog.details">
            <img
               src={blog.image}
               alt={blog.title}
               className="w-full h-60 object-cover rounded-md mb"
            />
            <h1>{blog.title}</h1>
        </div>
    )
}
export default BlogDetails