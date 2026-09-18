"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  createPostStart,
  updatePostStart,
  deletePostStart,
} from "@/lib/store/slices/postsSlice";
import { loginSuccess, logout } from "@/lib/store/slices/authSlice";
import { BlogPost } from "@/lib/types";
import {
  Plus,
  Trash2,
  Edit3,
  ExternalLink,
  Lock,
  X,
  Check,
  ShieldCheck,
  LogOut,
  Menu,
} from "lucide-react";
import DashboardMenu from "@/components/DashboardMenu";

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.posts);
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  // Modal / Form state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  // Form Fields
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Hospital Care");
  const [readTime, setReadTime] = useState("5 min read");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState(
    "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1200&q=85"
  );

  // If user is not authenticated, show the Protected Route Auth Gate
  if (!isAuthenticated) {
    return (
      <div className="mx-auto max-w-md space-y-6 px-4 py-16 text-center sm:py-24">
        <div className="w-16 h-16 rounded-3xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
          <Lock className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Protected Admin Route
          </h1>
          <p className="text-sm text-zinc-500">
            You must be signed in with administrative permissions to access the post management dashboard.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <button
            onClick={() => {
              dispatch(
                loginSuccess({
                  id: "demo_admin",
                  name: "Admin User",
                  email: "admin@techpulse.dev",
                  role: "admin",
                  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
                })
              );
            }}
            className="w-full rounded-xl bg-[#0b63ce] px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#0956b3]"
          >
            ⚡ One-Click Sign In (Demo Admin)
          </button>
          <Link
            href="/login"
            className="w-full py-2.5 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-medium transition-colors"
          >
            Go to Login Page
          </Link>
        </div>
      </div>
    );
  }

  const handleOpenCreateModal = () => {
    setEditingPost(null);
    setTitle("");
    setCategory("Hospital Care");
    setReadTime("5 min read");
    setExcerpt("");
    setContent("");
    setCoverImage(
      "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1200&q=85"
    );
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setCategory(post.category);
    setReadTime(post.readTime);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setCoverImage(post.coverImage);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this article?")) {
      dispatch(deletePostStart(id));
    }
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    if (editingPost) {
      // Update existing post
      dispatch(
        updatePostStart({
          ...editingPost,
          title,
          category,
          readTime,
          excerpt: excerpt || title,
          content,
          coverImage,
        })
      );
    } else {
      // Create new post
      dispatch(
        createPostStart({
          title,
          slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          category,
          readTime,
          excerpt: excerpt || title,
          content,
          coverImage,
          featured: false,
          author: {
            name: user?.name || "Abby Admin",
            avatar: user?.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Abby",
            role: "Content Contributor",
          },
        })
      );
    }

    setIsModalOpen(false);
  };

  return (
    <div className="relative mx-auto max-w-7xl space-y-6 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
      <DashboardMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      {/* Top Header */}
      <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <button onClick={() => setIsMenuOpen(true)} className="rounded-lg border border-slate-200 p-2 text-[#0b63ce] transition hover:bg-blue-50" aria-label="Open admin menu">
              <Menu className="h-5 w-5" />
            </button>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#0b63ce]">
              <ShieldCheck className="h-3.5 w-3.5" /> Admin
            </span>
          </div>
          <h1 className="sr-only">Admin</h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleOpenCreateModal}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0b63ce] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-[#0956b3]"
          >
            <Plus className="w-4 h-4" /> Add Hospital Note
          </button>
          <button
            onClick={() => dispatch(logout())}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-sm font-medium transition-colors"
          >
            <LogOut className="w-4 h-4" /> Log out
          </button>
        </div>
      </div>

      {/* Posts Table */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
            Hospital Journal ({posts.length})
          </h2>
          <span className="text-xs text-zinc-400">Synced via Redux-Saga side effects</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-950/60 text-zinc-500 uppercase text-[11px] font-semibold tracking-wider border-b border-zinc-200 dark:border-zinc-800">
              <tr>
                <th className="px-6 py-4">Journal Entry</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Care Team</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Comments</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="hover:bg-zinc-50/70 dark:hover:bg-zinc-800/40 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3 max-w-sm">
                      <div className="relative w-12 h-10 rounded-lg overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-700 bg-zinc-100">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="truncate">
                        <Link
                          href={`/blog/${post.id}`}
                          className="font-bold text-zinc-900 dark:text-white hover:text-indigo-600 transition-colors truncate block"
                        >
                          {post.title}
                        </Link>
                        <p className="text-xs text-zinc-400 truncate">{post.excerpt}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {post.category}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-zinc-600 dark:text-zinc-300 text-xs font-medium">
                    {post.author.name}
                  </td>

                  <td className="px-6 py-4 text-zinc-500 text-xs">
                    {post.publishedAt}
                  </td>

                  <td className="px-6 py-4 text-zinc-500 text-xs">
                    {post.comments.length}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/blog/${post.id}`}
                        target="_blank"
                        className="p-1.5 text-zinc-400 hover:text-indigo-600 transition-colors"
                        title="View Public Post"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleOpenEditModal(post)}
                        className="p-1.5 text-zinc-400 hover:text-amber-500 transition-colors"
                        title="Edit Post"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-1.5 text-zinc-400 hover:text-red-500 transition-colors"
                        title="Delete Post"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create / Edit Post Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                {editingPost ? "Edit Article" : "Create New Article"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSavePost} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Article Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Next.js 15 Server Actions"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  >
                    <option value="Next.js">Next.js</option>
                    <option value="Redux">Redux</option>
                    <option value="Design">Design</option>
                    <option value="Security">Security</option>
                    <option value="Performance">Performance</option>
                    <option value="DevOps">DevOps</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Estimated Read Time
                  </label>
                  <input
                    type="text"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    placeholder="e.g. 5 min read"
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Cover Image URL
                </label>
                <input
                  type="url"
                  required
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Short Excerpt / Summary
                </label>
                <textarea
                  rows={2}
                  required
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Brief summary of the article..."
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Article Content (Supports markdown headers & code blocks)
                </label>
                <textarea
                  rows={6}
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Full article body content..."
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md transition-all"
                >
                  <Check className="w-4 h-4" />
                  {editingPost ? "Save Changes" : "Publish Post"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
