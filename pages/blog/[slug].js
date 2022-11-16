
import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import { posts } from "../../data";

// console.log(posts);

const BlogSingle = () => {
    const [postData, setPostdata] = useState({});
    const router = useRouter();
    const { slug } = router.query;
    // console.log(slug);

    // console.log(post);

    useEffect(()=>{
        if (router.isReady) {
            const post = posts.find(p => p.slug == slug);
            setPostdata(post);
        }
    
    }, [router.isReady]);




    return (
        <>
        <section className="py-20 bg-light">
            <div className="container mx-auto">
                <div className="grid gap-5 grid-cols-12">
                    <div className="bg-white col-span-12 lg:col-span-8 p-5 md:p-6 lg:p-7 mb-6">
                        <div className="mb-8">
                            <img src={postData.thumbnail} alt={postData.title} className="w-full" />
                        </div>
                        <h2 className="text-4xl lg:text-5xl fw-semibold mb-6">{postData.title}</h2>
                        <div>
                            {postData.content}
                        </div>
                    </div>
                    <div className="col-span-4"></div>
                </div>
            </div>
        </section>
        </>
    )
}

export default BlogSingle;
