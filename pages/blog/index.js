import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import { posts } from '../../data';
import Link from "next/link";

const Blog = ({data}) => {
    const [postData, setPostData] = useState([]);
    const blogArchiveBanner = '/images/post-title-5.jpg';

    useEffect(()=> {
      setPostData(posts);
    }, [])

    const articleFilterFunc = (e) => {
      // console.log(e.target.value);
      var getVal = e.target.value;

      if(getVal !== 'all') {
        const filteredPosts = posts.filter((post) => {
          if(post.category.includes(getVal)) {
            return post;
          }
        })
        setPostData(filteredPosts);
      }
      else {
        setPostData(posts);
      }
      // console.log(filteredPosts);
    }


  return (
    <>
    <section className="pagetitle-section py-16 bg-primary text-center bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url(" + blogArchiveBanner + ")"}}>
      <div className="container mx-auto relative">
      <h1 className="text-white text-5xl font-semibold mb-4">Blog</h1>
      <nav className="breadcrumb-nav flex justify-center align-middle">
        <ul className="flex">
          <li className="px-2 text-gray-100 hover:text-white"><Link href="/">Home</Link></li>
          <li className="px-2 text-white underline">Blog</li>
        </ul>
      </nav>
      </div>
    </section>

      <section className="articles-grid-section py-20 bg-light">
        <div className="container mx-auto">
          <div className="articles-filter-wrapper flex justify-end mb-8">
            <select name="arti_filt_select" className="py-2 px-4" onChange={(e) => articleFilterFunc(e)}>
              <option selected disabled>Select Category</option>
              <option value="all">All</option>
              <option value="travel">Travel</option>
              <option value="adventure">Adventure</option>
              <option value="education">Education</option>
            </select>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {postData.map((post) => {
              return <BlogCard key={post.id} post={post} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
