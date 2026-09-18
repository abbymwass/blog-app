"use client";

import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  setSearchQuery,
  setSelectedCategory,
  setCurrentPage,
  fetchPostsStart,
} from "@/lib/store/slices/postsSlice";
import PostCard from "@/components/PostCard";
import Pagination from "@/components/Pagination";

export default function BlogListPage() {
  const dispatch = useAppDispatch();
  const { posts, searchQuery, selectedCategory, currentPage, postsPerPage } = useAppSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPostsStart());
  }, [dispatch]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(start, start + postsPerPage);
  }, [filteredPosts, currentPage, postsPerPage]);

  const featured = paginatedPosts.find((post) => post.featured) ?? paginatedPosts[0];
  const rest = paginatedPosts.filter((post) => post.id !== featured?.id);

  return (
    <div className="mx-auto max-w-7xl space-y-5 px-4 py-5 sm:px-6 lg:px-8">
      {paginatedPosts.length === 0 ? (
        <div className="space-y-3 rounded-3xl border border-dashed border-orange-200 bg-white py-20 text-center">
          <p className="text-lg font-bold text-[#16324a]">
            No articles found matching your criteria
          </p>
          <p className="text-sm text-slate-500">
            Try tweaking your search term or select a different category filter.
          </p>
          <button
            onClick={() => {
              dispatch(setSearchQuery(""));
              dispatch(setSelectedCategory("All"));
            }}
            className="mt-2 px-4 py-2 text-xs font-semibold text-[#12b5a8] hover:underline"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <>
          {featured && <PostCard post={featured} featured />}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => dispatch(setCurrentPage(page))}
      />
    </div>
  );
}
