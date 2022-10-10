import { useState } from 'react';

const Blogs = ( { blogs } ) => {

    const [newBlog , setNewBlog] = useState(
        { 
            title: "123" ,
            body: "sadsadsadassd",
            img: "/images/1.png",
            id: 7
        });
    const [ visibleblog , setVisibleblog] = useState(false);

    const handleClick = () => {
        setVisibleblog(setVisibleblog => !setVisibleblog);
    }
    
    return (
        <div className="blog_container">
            {blogs.map((blog) => (
                <div className="blog" key={blog.id} onClick={handleClick}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <img src={blog.img} alt="image" />
                </div>
            ))}
            <div className="newblog_container">
                <div className="newblog" key={newBlog.id}>
                <h2>{newBlog.title}</h2>
                <p>{newBlog.body}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Blogs;