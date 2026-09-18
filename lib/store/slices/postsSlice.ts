import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlogPost, Comment } from "@/lib/types";
import { INITIAL_POSTS } from "@/lib/data/posts";

interface PostsState {
  posts: BlogPost[];
  selectedPost: BlogPost | null;
  loading: boolean;
  error: string | null;
  searchQuery: string;
  selectedCategory: string;
  currentPage: number;
  postsPerPage: number;
}

const initialState: PostsState = {
  posts: INITIAL_POSTS,
  selectedPost: null,
  loading: false,
  error: null,
  searchQuery: "",
  selectedCategory: "All",
  currentPage: 1,
  postsPerPage: 30,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess(state, action: PayloadAction<BlogPost[]>) {
      state.posts = action.payload;
      state.loading = false;
    },
    fetchPostsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    createPostStart(state, _action: PayloadAction<Omit<BlogPost, "id" | "comments" | "publishedAt">>) {
      state.loading = true;
      state.error = null;
    },
    createPostSuccess(state, action: PayloadAction<BlogPost>) {
      state.posts.unshift(action.payload);
      state.loading = false;
    },
    createPostFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    updatePostStart(state, _action: PayloadAction<BlogPost>) {
      state.loading = true;
    },
    updatePostSuccess(state, action: PayloadAction<BlogPost>) {
      const idx = state.posts.findIndex((p) => p.id === action.payload.id);
      if (idx !== -1) {
        state.posts[idx] = action.payload;
      }
      if (state.selectedPost?.id === action.payload.id) {
        state.selectedPost = action.payload;
      }
      state.loading = false;
    },
    updatePostFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    deletePostStart(state, _action: PayloadAction<string>) {
      state.loading = true;
    },
    deletePostSuccess(state, action: PayloadAction<string>) {
      state.posts = state.posts.filter((p) => p.id !== action.payload);
      state.loading = false;
    },
    deletePostFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addCommentStart(state, _action: PayloadAction<{ postId: string; comment: Omit<Comment, "id" | "createdAt"> }>) {
      state.loading = true;
    },
    addCommentSuccess(state, action: PayloadAction<{ postId: string; comment: Comment }>) {
      const post = state.posts.find((p) => p.id === action.payload.postId);
      if (post) {
        post.comments.push(action.payload.comment);
      }
      if (state.selectedPost && state.selectedPost.id === action.payload.postId) {
        state.selectedPost.comments.push(action.payload.comment);
      }
      state.loading = false;
    },
    addCommentFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    setSelectedPost(state, action: PayloadAction<BlogPost | null>) {
      state.selectedPost = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  createPostStart,
  createPostSuccess,
  createPostFailure,
  updatePostStart,
  updatePostSuccess,
  updatePostFailure,
  deletePostStart,
  deletePostSuccess,
  deletePostFailure,
  addCommentStart,
  addCommentSuccess,
  addCommentFailure,
  setSelectedPost,
  setSearchQuery,
  setSelectedCategory,
  setCurrentPage,
} = postsSlice.actions;

export default postsSlice.reducer;
