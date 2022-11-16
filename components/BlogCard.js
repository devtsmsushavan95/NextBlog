import Link from "next/link";

const BlogCard = ({post}) => {
    return (
        <div className="article-card drop-shadow-lg bg-white rounded-sm overflow-hidden">
        <div className="article-card__header blog-card-aspect-ratio">
          <Link href={`/blog/${post.slug}`} className="w-full h-full block">
            <img src={post.thumbnail} alt="Blog Title" width="600" height="256" className="object-cover w-full h-full"/>
          </Link>
        </div>
        <div className="article-card__body p-4">
          <div className="article-card__title mb-2 line-clamp-2">
            <Link href={`/blog/${post.slug}`} className="text-dark hover:text-primary text-xl font-semibold">{post.title}</Link>
          </div>
          <p className="text-para article-card__exercpt mb-3 line-clamp-2">{post.exercpt}</p>
          <Link href={`/blog/${post.slug}`} className="inline-block text-primary font-semibold hover:underline">Read More</Link>
        </div>
      </div>
    )
}

export default BlogCard;