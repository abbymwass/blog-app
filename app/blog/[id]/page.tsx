"use client";

import { use, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { fetchPostsStart } from "@/lib/store/slices/postsSlice";
import CommentSection from "@/components/CommentSection";
import PostCard from "@/components/PostCard";
import { ArrowLeft, Calendar, Clock, Share2, Tag } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function BlogDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const postId = resolvedParams.id;
  const dispatch = useAppDispatch();

  const { posts, loading } = useAppSelector((state) => state.posts);
  const post = posts.find((p) => p.id === postId || p.slug === postId);

  useEffect(() => {
    dispatch(fetchPostsStart());
  }, [dispatch]);

  if (loading && !post) {
    return <div className="mx-auto max-w-3xl px-4 py-24 text-center text-sm text-zinc-500">Loading the clinical note...</div>;
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Article Not Found</h1>
        <p className="text-zinc-500">The article you are looking for does not exist or has been removed.</p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  // Related posts from same category
  const relatedPosts = posts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <article className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      {/* Back button */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-[#12b5a8]"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800">
          <Tag className="w-3 h-3" />
          {post.category}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.2]">
          {post.title}
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author metadata bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-y border-zinc-200 dark:border-zinc-800 py-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-zinc-100">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-sm text-zinc-900 dark:text-white leading-none">
                {post.author.name}
              </p>
              <p className="text-xs text-zinc-500 mt-1">{post.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-indigo-500" />
              {post.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-indigo-500" />
              {post.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Featured Cover Image */}
      <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 1024px) 100vw, 896px"
          priority
          className="object-cover"
        />
      </div>

      {/* Article Body */}
      <div className="prose prose-zinc dark:prose-invert max-w-none text-base sm:text-lg leading-relaxed space-y-6 pt-4">
        {post.content.split("\n\n").map((paragraph, index) => {
          if (paragraph.startsWith("### ")) {
            return (
              <h3 key={index} className="text-2xl font-bold text-zinc-900 dark:text-white pt-4">
                {paragraph.replace("### ", "")}
              </h3>
            );
          }
          if (paragraph.startsWith("```")) {
            const cleanCode = paragraph.replace(/```[a-z]*\n?/g, "");
            return (
              <pre
                key={index}
                className="bg-zinc-900 text-zinc-100 p-5 rounded-2xl overflow-x-auto text-sm font-mono border border-zinc-800 shadow-inner"
              >
                <code>{cleanCode}</code>
              </pre>
            );
          }
          return (
            <p key={index} className="text-zinc-700 dark:text-zinc-300">
              {paragraph}
            </p>
          );
        })}
      </div>

      {/* Post action bar */}
      <div className="flex items-center justify-between py-6 border-y border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-zinc-500">Category:</span>
          <span className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
            {post.category}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                alert("Article link copied to clipboard!");
              }
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" /> Share
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <CommentSection postId={post.id} comments={post.comments} />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="pt-12 border-t border-zinc-200 dark:border-zinc-800 space-y-6">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Related in {post.category}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((related) => (
              <PostCard key={related.id} post={related} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
