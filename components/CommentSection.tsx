"use client";

import { useState } from "react";
import Image from "next/image";
import { Comment } from "@/lib/types";
import { useAppDispatch } from "@/lib/store/hooks";
import { addCommentStart } from "@/lib/store/slices/postsSlice";
import { MessageSquare, Send } from "lucide-react";

interface CommentSectionProps {
  postId: string;
  comments: Comment[];
}

export default function CommentSection({ postId, comments }: CommentSectionProps) {
  const dispatch = useAppDispatch();
  const [authorName, setAuthorName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const finalName = authorName.trim() || "Anonymous Reader";
    const avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(finalName)}`;

    dispatch(
      addCommentStart({
        postId,
        comment: {
          author: finalName,
          avatar,
          content: commentText.trim(),
        },
      })
    );

    setCommentText("");
    setAuthorName("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center gap-2 mb-8">
        <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
          Comments ({comments.length})
        </h3>
      </div>

      {/* Add comment form */}
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 mb-10 space-y-4"
      >
        <h4 className="font-semibold text-sm text-zinc-900 dark:text-white">
          Join the conversation
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your name (optional)"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
        </div>

        <textarea
          rows={3}
          placeholder="Share your thoughts or questions..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none"
        />

        <div className="flex items-center justify-between">
          {submitted ? (
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              ✓ Comment posted successfully!
            </span>
          ) : (
            <span className="text-xs text-zinc-400">Be respectful and constructive.</span>
          )}

          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-all shadow-sm shadow-indigo-600/20"
          >
            <Send className="w-3.5 h-3.5" />
            Post Comment
          </button>
        </div>
      </form>

      {/* Existing comments list */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-sm text-zinc-500 italic">
            No comments yet. Be the first to share your perspective!
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="flex gap-4 p-4 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/70 dark:border-zinc-800"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-700 bg-zinc-100">
                <Image
                  src={comment.avatar}
                  alt={comment.author}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-zinc-900 dark:text-white">
                    {comment.author}
                  </span>
                  <span className="text-xs text-zinc-400">{comment.createdAt}</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {comment.content}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
