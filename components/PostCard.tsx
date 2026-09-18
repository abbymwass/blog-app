import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/types";
import { Calendar, Clock, MessageSquare, ArrowRight } from "lucide-react";

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  if (featured) {
    return (
      <article className="group grid grid-cols-1 items-center gap-5 overflow-hidden rounded-[1.8rem] bg-white p-3 shadow-sm ring-1 ring-black/5 sm:p-4 lg:grid-cols-12">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.4rem] bg-[#fff0ea] lg:col-span-7">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3">
            <span className="inline-flex items-center rounded-full bg-[#16324a] px-3 py-1 text-xs font-bold text-white shadow-md">
              {post.category}
            </span>
          </div>
        </div>

        <div className="flex flex-col space-y-3 px-2 pb-2 lg:col-span-5">
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-[#12b5a8]" />
              {post.publishedAt}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#ff7a6e]" />
              {post.readTime}
            </span>
          </div>

          <Link href={`/blog/${post.id}`}>
            <h2 className="font-display text-2xl leading-tight tracking-tight text-[#16324a] transition-colors group-hover:text-[#12b5a8] sm:text-3xl">
              {post.title}
            </h2>
          </Link>

          <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between border-t border-orange-100 pt-3">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-extrabold leading-none text-[#16324a]">
                  {post.author.name}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">{post.author.role}</p>
              </div>
            </div>

            <Link
              href={`/blog/${post.id}`}
              className="inline-flex items-center gap-1 text-sm font-bold text-[#ff7a6e] transition-transform group-hover:translate-x-1"
            >
              Read <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#fff0ea]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-extrabold text-[#16324a] backdrop-blur-sm">
            {post.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between space-y-3 p-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-[#12b5a8]" />
              {post.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-[#ff7a6e]" />
              {post.readTime}
            </span>
          </div>

          <Link href={`/blog/${post.id}`}>
            <h3 className="font-display text-lg leading-snug text-[#16324a] transition-colors line-clamp-2 group-hover:text-[#12b5a8]">
              {post.title}
            </h3>
          </Link>

          <p className="line-clamp-2 text-xs leading-5 text-slate-600">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-orange-100 pt-3">
          <div className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-slate-100">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <span className="text-xs font-bold text-[#16324a]">
              {post.author.name}
            </span>
          </div>

          <span className="flex items-center gap-1 text-xs text-slate-400">
            <MessageSquare className="h-3.5 w-3.5" />
            {post.comments.length}
          </span>
        </div>
      </div>
    </article>
  );
}
