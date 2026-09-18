import type { Comment } from "@/lib/types";

const API_BASE = "https://dummyjson.com";

interface DummyPost {
  id: number;
  title: string;
  body: string;
  tags?: string[];
  userId: number;
}

interface DummyComment {
  id: number;
  body: string;
  postId: number;
  user: {
    username: string;
    fullName: string;
  };
}

interface DummyUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  accessToken?: string;
  refreshToken?: string;
}

const HOSPITAL_STORIES = [
  {
    title: "A calmer first step into urgent care",
    excerpt: "What to expect when you arrive at the hospital, from triage and vital checks to a clear plan for the next hour.",
    content: "Walking into urgent care can feel disorienting. A simple sequence helps: bring your medication list, describe when symptoms started, and ask what will happen next. The care team will assess urgency first, then explain tests, treatment, and follow-up in plain language.",
    image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1200&q=85",
    category: "Urgent Care",
  },
  {
    title: "How specialist teams work together",
    excerpt: "A look inside multidisciplinary hospital care and why one connected team can make complex treatment feel simpler.",
    content: "Specialist care works best when every clinician can see the same story. Nurses, physicians, pharmacists, therapists, and diagnostic teams share updates so decisions stay connected around the person, not just the condition.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
    category: "Specialist Care",
  },
  {
    title: "What your diagnostic results can tell you",
    excerpt: "A practical guide to blood work, imaging, and the questions worth asking before you leave an appointment.",
    content: "Diagnostics are one part of a larger picture. Ask what the result means, whether anything needs repeating, and which symptoms should prompt a call. Your care team can explain the difference between a screening result and a diagnosis.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
    category: "Diagnostics",
  },
  {
    title: "Small habits that support recovery",
    excerpt: "From rest and hydration to gentle movement, the quiet routines that help the body recover after treatment.",
    content: "Recovery is built from small, repeatable choices. Follow the discharge plan, keep follow-up appointments, drink enough water, and ask for help when a task feels too hard. Progress does not have to be dramatic to be meaningful.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
    category: "Recovery",
  },
  {
    title: "The people behind a safer hospital stay",
    excerpt: "Why nurses, porters, pharmacists, and support staff are essential to every safe and human hospital experience.",
    content: "Good hospital care is a relay. Behind every consultation are people checking medicines, preparing rooms, guiding families, and watching for small changes. Knowing who to ask makes the whole experience easier to navigate.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=85",
    category: "Hospital Life",
  },
  {
    title: "Preparing for a meaningful clinic visit",
    excerpt: "A short preparation checklist to help you use your appointment time well and leave with fewer unanswered questions.",
    content: "Before a clinic visit, write down your main concern, current medicines, allergies, and the questions you most want answered. Bring a support person when helpful, and repeat the plan back in your own words before you go.",
    image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=1200&q=85",
    category: "Patient Guide",
  },
] as const;

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options?.headers },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function login(username: string, password: string) {
  return request<DummyUser>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password, expiresInMins: 30 }),
  });
}

export function fetchPosts() {
  return request<{ posts: DummyPost[] }>("/posts?limit=30");
}

export function createPost(post: { title: string; body: string; userId: number }) {
  return request<DummyPost>("/posts/add", {
    method: "POST",
    body: JSON.stringify(post),
  });
}

export function updatePost(id: string, post: { title: string; body: string }) {
  return request<DummyPost>(`/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(post),
  });
}

export function deletePost(id: string) {
  return request<{ id: number }>(`/posts/${id}`, { method: "DELETE" });
}

export function fetchComments(postId: string) {
  return request<{ comments: DummyComment[] }>(`/posts/${postId}/comments`);
}

export function createComment(postId: string, body: string, userId = 1) {
  return request<DummyComment>(`/comments/add`, {
    method: "POST",
    body: JSON.stringify({ body, postId: Number(postId), userId }),
  });
}

export function toBlogPost(post: DummyPost, comments: Comment[] = []) {
  const story = HOSPITAL_STORIES[(post.id - 1) % HOSPITAL_STORIES.length];
  return {
    id: String(post.id),
    title: story.title,
    slug: story.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    excerpt: story.excerpt,
    content: story.content,
    coverImage: story.image,
    category: story.category,
    author: {
      name: `CareConnect Clinical Desk`,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${post.userId}`,
      role: "Hospital Health Desk",
    },
    publishedAt: "Updated today",
    readTime: `${Math.max(3, Math.ceil(post.body.split(" ").length / 45))} min read`,
    featured: post.id === 1,
    comments,
  };
}

export function toComment(comment: DummyComment) {
  return {
    id: String(comment.id),
    author: comment.user.fullName || comment.user.username,
    avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${comment.user.username}`,
    content: comment.body,
    createdAt: "Recently",
  };
}

export function toUser(user: DummyUser) {
  return {
    id: String(user.id),
    name: `${user.firstName} ${user.lastName}`.trim() || user.username,
    email: user.email,
    role: "admin" as const,
    avatar: user.image,
  };
}
