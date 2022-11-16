// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Link from "next/link";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { posts } from '../data';


/*
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch('https://dummyapi.io/data/v1/post');
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } }
}
*/



export default function Home({data}) {
  const [postData, setPostData] = useState([]);

  useEffect(()=> {
    setPostData(posts);
  }, [])

  const heroBanner = 'images/hero-banner.jpg';
  return (
    <>
      <section className="hero-section bg-dark py-20 bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url(" + heroBanner + ")"}}>
        <div className="container mx-auto relative">
          <div className="content-wrapper w-100 h-100 flex justify-center align-center">
            <div className="text-center">
              <h1 className="text-white mb-5 text-4xl md:text-5xl lg:text-7xl">Next JS Blog App</h1>
              <p className="text-white mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, inventore.
              </p>
              <div className="pt-6">
                <Link href="/blog" className="btn btn-primary">Visit Blog</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="articles-grid-section py-20 bg-light">
        <div className="container mx-auto">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {postData.map((post)=> {
            return (
              <BlogCard post={post}/>
            )
            })}
          </div>
        </div>
      </section>
      <section className="articles-grid-section pb-20 bg-light">
        <div className="container mx-auto">
          <h2 className="text-center text-dark text-4xl lg:text-5xl font-semibold mb-10">Featured Posts</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {postData.map((post)=> {
              if(post.isFeatured) {
                return (
                  <BlogCard post={post}/>
                )
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}
