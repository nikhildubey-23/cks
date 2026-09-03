export type Program = { id: string; name: string; age: string; desc: string; color: string };

export type Activity = { name: string; icon: string; desc: string; color: string };

export const programs: Program[] = [
  {
    id: "playgroup",
    name: "Playgroup",
    age: "1.5 – 2.5 years",
    desc: "A gentle introduction to school — songs, sensory play, bonding and first friendships in a safe, loving space.",
    color: "sky",
  },
  {
    id: "nursery",
    name: "Nursery",
    age: "2.5 – 3.5 years",
    desc: "Structured, playful learning — storytelling, rhymes, art and motor-skill games that build confidence.",
    color: "candy",
  },
  {
    id: "preschool",
    name: "Pre-School (Montessori)",
    age: "3.5 – 5.5 years",
    desc: "The Montessori method with reading, numbers, practical life and creative projects that spark curiosity.",
    color: "mint",
  },
];

export const activities: Activity[] = [
  { name: "Art & Craft", icon: "art", desc: "Finger painting, clay modelling, paper tearing & pasting.", color: "candy" },
  { name: "Storytime", icon: "book", desc: "Listening to stories and dramatics that build imagination.", color: "sky" },
  { name: "Music & Dance", icon: "music", desc: "Singing, rhymes and movement that fill every day with joy.", color: "mint" },
  { name: "Nature Walks", icon: "leaf", desc: "Exploring the garden and outdoors — curiosity in action.", color: "sunny" },
  { name: "Outdoor Games", icon: "ball", desc: "Physical coordination, teamwork and lots of giggling.", color: "lilac" },
  { name: "Festivals", icon: "flag", desc: "Diwali, Holi, Christmas, Rakhi & more celebrated with kids.", color: "sunny" },
];

export const routine = [
  "Welcome circle & rhymes",
  "Montessori work time",
  "Outdoor play & nature walks",
  "Storytime & dramatics",
  "Art & craft sessions",
  "Snack time & free play",
];

export const festivals = [
  "Diwali",
  "Holi",
  "Raksha Bandhan",
  "Janmashtami",
  "Dussehra",
  "Christmas",
  "Republic Day",
  "Children's Day",
];