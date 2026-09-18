import { BlogPost, Comment } from "@/lib/types";
import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  addCommentFailure,
  addCommentStart,
  addCommentSuccess,
  createPostFailure,
  createPostStart,
  createPostSuccess,
  deletePostFailure,
  deletePostStart,
  deletePostSuccess,
  fetchPostsFailure,
  fetchPostsStart,
  fetchPostsSuccess,
  updatePostFailure,
  updatePostStart,
  updatePostSuccess,
} from "../slices/postsSlice";
import {
  createComment,
  createPost,
  deletePost,
  fetchComments,
  fetchPosts,
  toBlogPost,
  toComment,
  updatePost,
} from "@/lib/api";

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unable to reach the hospital journal";
}

function* handleFetchPosts() {
  try {
    const response: Awaited<ReturnType<typeof fetchPosts>> = yield call(fetchPosts);
    const posts: BlogPost[] = yield call(() => Promise.all(response.posts.map(async (post) => {
      const commentsResponse = await fetchComments(String(post.id));
      return toBlogPost(post, commentsResponse.comments.map(toComment));
    })));
    yield put(fetchPostsSuccess(posts));
  } catch (error: unknown) {
    yield put(fetchPostsFailure(getErrorMessage(error)));
  }
}

function* handleCreatePost(
  action: PayloadAction<Omit<BlogPost, "id" | "comments" | "publishedAt">>
) {
  try {
    const response: Awaited<ReturnType<typeof createPost>> = yield call(createPost, {
      title: action.payload.title,
      body: action.payload.content,
      userId: 1,
    });
    yield put(createPostSuccess(toBlogPost(response)));
  } catch (error: unknown) {
    yield put(createPostFailure(getErrorMessage(error)));
  }
}

function* handleUpdatePost(action: PayloadAction<BlogPost>) {
  try {
    const response: Awaited<ReturnType<typeof updatePost>> = yield call(updatePost, action.payload.id, {
      title: action.payload.title,
      body: action.payload.content,
    });
    yield put(updatePostSuccess(toBlogPost(response, action.payload.comments)));
  } catch (error: unknown) {
    yield put(updatePostFailure(getErrorMessage(error)));
  }
}

function* handleDeletePost(action: PayloadAction<string>) {
  try {
    yield call(deletePost, action.payload);
    yield put(deletePostSuccess(action.payload));
  } catch (error: unknown) {
    yield put(deletePostFailure(getErrorMessage(error)));
  }
}

function* handleAddComment(
  action: PayloadAction<{ postId: string; comment: Omit<Comment, "id" | "createdAt"> }>
) {
  try {
    const response: Awaited<ReturnType<typeof createComment>> = yield call(
      createComment,
      action.payload.postId,
      action.payload.comment.content
    );
    yield put(addCommentSuccess({ postId: action.payload.postId, comment: toComment(response) }));
  } catch (error: unknown) {
    yield put(addCommentFailure(getErrorMessage(error)));
  }
}

export function* postsSaga() {
  yield takeLatest(fetchPostsStart.type, handleFetchPosts);
  yield takeLatest(createPostStart.type, handleCreatePost);
  yield takeLatest(updatePostStart.type, handleUpdatePost);
  yield takeLatest(deletePostStart.type, handleDeletePost);
  yield takeLatest(addCommentStart.type, handleAddComment);
}
