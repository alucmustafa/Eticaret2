import { Blogitem } from "./Blogitem"
import "./Blogs.css"
export const Blogs = () => {
  return (
    <section className="blogs">
    <div className="container">
      <div className="section-title">
        <h2>From Our Blog</h2>
        <p>Summer Collection New Morden Design</p>
      </div>
      <ul className="blog-list">
         <Blogitem/>
         <Blogitem/>
         <Blogitem/>
       
      </ul>
    </div>
  </section>
  )
}
