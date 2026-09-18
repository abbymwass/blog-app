import { BlogPost } from "@/lib/types";

export const INITIAL_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "A kinder rhythm for your heart",
    slug: "kinder-rhythm-for-your-heart",
    excerpt:
      "Soft walks, colorful plates, and quiet check-ins that help your heart feel supported—not stressed.",
    content: `Your heart loves small, friendly habits more than dramatic overhauls. Think of care as a gentle daily playlist rather than a strict rulebook.

### Start with movement that feels kind
A 20-minute stroll after lunch, stairs instead of the lift, or dancing while you cook all count. The photo-perfect gym session is optional. Consistency is the cute part.

### Feed the beat
Berries, leafy greens, beans, and olive oil are everyday heart allies. Pair them with water you actually enjoy—sparkling, citrus, mint.

### Listen early
Chest tightness, unusual fatigue, or a racing pulse after rest deserves a clinician’s ear. Booking a cardiology visit is an act of self-kindness, not drama.`,
    coverImage:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1400&q=85",
    category: "Cardiology",
    author: {
      name: "Dr. Sarah Jenkins",
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
      role: "Cardiologist",
    },
    publishedAt: "Sep 12, 2026",
    readTime: "5 min read",
    featured: true,
    comments: [
      {
        id: "c1",
        author: "Amina Otieno",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amina",
        content: "The walking tip is so doable. I started after lunch and I feel lighter already.",
        createdAt: "Sep 13, 2026",
      },
      {
        id: "c2",
        author: "David Kim",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        content: "Love that this does not make heart care sound scary. Bookmarking for my dad.",
        createdAt: "Sep 14, 2026",
      },
    ],
  },
  {
    id: "2",
    title: "Little checkups, big brave smiles",
    slug: "little-checkups-brave-smiles",
    excerpt:
      "How to make pediatric visits feel playful—so kids (and parents) leave calmer than they arrived.",
    content: `Clinic days go smoother when children know what to expect. A favorite toy, a simple story, and a clinician who kneels to their eye level can change the whole mood.

### Make the waiting room a story
Talk through the visit like a tiny adventure: “We will listen to your heartbeat drum.” Avoid promising “no needles” if you are unsure.

### Growth is more than height
Sleep, play, vaccines, and curious questions all belong in a well-child visit. Bring notes—parents remember the nights, not the dates.

### After you leave
Celebrate the bravery. Stickers, a park stop, or a shared snack tell a child that care can feel safe.`,
    coverImage:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1400&q=85",
    category: "Pediatrics",
    author: {
      name: "Dr. Elena Rostova",
      avatar:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=200&q=80",
      role: "Pediatrician",
    },
    publishedAt: "Sep 10, 2026",
    readTime: "6 min read",
    featured: true,
    comments: [
      {
        id: "c3",
        author: "Grace Njeri",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grace",
        content: "We tried the ‘heartbeat drum’ line. My son actually giggled at the stethoscope.",
        createdAt: "Sep 11, 2026",
      },
    ],
  },
  {
    id: "3",
    title: "Sleep is a superpower (yes, even on weeknights)",
    slug: "sleep-is-a-superpower",
    excerpt:
      "A cozy, science-soft guide to winding down so your brain can rest, repair, and wake up clearer.",
    content: `Sleep is not a luxury add-on. It is how memory, mood, and immunity recharge. A prettier bedtime is still a medical win.

### Dim the world an hour early
Softer lights, a paper book, and phones charging outside the bedroom tell your nervous system it is safe to slow down.

### Keep the bed boring (in a good way)
Cool room, dark curtains, same wake time—even on Saturdays. Your brain loves a predictable lullaby.

### When rest will not come
If snoring, gasping, or months of poor sleep show up, talk with a clinician. Sleep studies are not scary; they are maps.`,
    coverImage:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1400&q=85",
    category: "Wellness",
    author: {
      name: "Dr. Marcus Vance",
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80",
      role: "Neurologist",
    },
    publishedAt: "Sep 08, 2026",
    readTime: "5 min read",
    featured: false,
    comments: [],
  },
  {
    id: "4",
    title: "A brighter smile without the clinic jitters",
    slug: "brighter-smile-without-jitters",
    excerpt:
      "Gentle dental habits—and why a pastel toothbrush can be as important as the latest whitening trend.",
    content: `Healthy teeth like routine more than perfection. Two minutes, twice a day, is still the cutest flex.

### Brush like you mean it, softly
A soft brush, fluoride toothpaste, and small circles along the gumline. Floss is the quiet hero between teeth.

### Snacks that sparkle (or don’t)
Constant sipping of sweet drinks bathes enamel in sugar. Water between meals is the stylish choice.

### Visit before it hurts
Preventive cleanings catch little issues while they are still little. Anxiety is common—tell your dentist; they can slow the pace.`,
    coverImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=85",
    category: "Dental",
    author: {
      name: "Dr. James Mwangi",
      avatar:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80",
      role: "Dentist",
    },
    publishedAt: "Sep 05, 2026",
    readTime: "4 min read",
    featured: false,
    comments: [
      {
        id: "c4",
        author: "Tom Harris",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom",
        content: "Finally a dental article that does not scold. Switching to a softer brush tonight.",
        createdAt: "Sep 06, 2026",
      },
    ],
  },
  {
    id: "5",
    title: "Plates that look like a garden (and taste like joy)",
    slug: "plates-that-look-like-a-garden",
    excerpt:
      "Build meals with color, crunch, and comfort—nutrition that feels like a treat, not a chore.",
    content: `You do not need a perfect meal plan. You need a plate that makes you feel looked after.

### Color is a checklist you can see
Aim for two colors besides beige. Tomato with greens. Mango with yogurt. Purple cabbage in a wrap.

### Protein that plays nicely
Eggs, beans, fish, tofu, or yogurt help energy last past 4 p.m. Pair with something crunchy so the meal feels complete.

### Kindness over guilt
One festive slice of cake does not undo a week of care. The next meal is always a fresh start.`,
    coverImage:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=85",
    category: "Nutrition",
    author: {
      name: "Dr. Chloe Chen",
      avatar:
        "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=200&q=80",
      role: "Preventive Care",
    },
    publishedAt: "Sep 02, 2026",
    readTime: "5 min read",
    featured: false,
    comments: [],
  },
  {
    id: "6",
    title: "Joints that thank you for showing up",
    slug: "joints-that-thank-you",
    excerpt:
      "Easy mobility rituals for desks, pitches, and playgrounds—so your knees and shoulders stay in the story.",
    content: `Strong joints like variety: walk, stretch, lift gently, rest. Pain is a message, not a personality trait.

### Warm up like a human, not a robot
Two minutes of arm circles, ankle rolls, and a walk before you sprint. Your cartilage prefers a hello.

### Strength is a love language
Sit-to-stands, wall push-ups, and light bands keep knees and shoulders supported. Form first, ego later.

### When to call sports medicine
Swelling that lasts, a joint that “gives way,” or pain after a twist deserves imaging and a plan—not just ice forever.`,
    coverImage:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=85",
    category: "Orthopedics",
    author: {
      name: "Dr. Robert Alvarez",
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80",
      role: "Sports Medicine",
    },
    publishedAt: "Aug 29, 2026",
    readTime: "6 min read",
    featured: false,
    comments: [],
  },
];
