import { useState } from 'react';

const Blogs = ( { blogs } ) => {

const [newBlog , setNewBlog] = useState({});

const [open , setOpen] = useState(false);

const handleClick = (val) => {
setNewBlog(val);
setOpen(!open);
}



return (
<div className="blog_container">
  { !open && blogs.map((blog) => (
    <div className="blog" key={blog.id} onClick={()=> handleClick (blog)}>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
      <img src={blog.img} alt="image" />
    </div>
  ))}
  { open && <div className="newblog_container">
    <div className="back" onClick={()=> setOpen(!open)}><i className="fa-solid fa-arrow-left-long"></i>მთავარი გვერდი</div>
    <div className="newblog" key={newBlog.id}>
      <h2>{newBlog.title}</h2>
      <div className="video_container">
        <iframe width="640" height="315" src="https://www.youtube.com/embed/P6ntigE16QA" title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
        <p>{newBlog.innerBody}</p>
    </div>
  </div> }

</div>
);
}

export default Blogs;