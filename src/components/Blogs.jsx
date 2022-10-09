const Blogs = ( {blogs} ) => {
    
    return ( 
        <div className="blog_container">
            {blogs.map((blog) => (
                <div className="blog" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <img src={blog.img} alt="image" />
                </div>
            ))}
        </div>
     );
}
 
export default Blogs;