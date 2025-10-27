export interface StoryImage {
  id: number;
  mainImage: string;
  testimonial: string;
  thumbnail: string;
}

export const storiesData: StoryImage[] = [
  {
    id: 1,
    mainImage: "/assets/stories/1.webp",
    testimonial:
      "We've had such a wonderful experience, no stress, no hassle, all thanks to all the team efforts they have put together",
    thumbnail: "/assets/stories/1.webp",
  },
  {
    id: 2,
    mainImage: "/assets/stories/2.jpg",
    testimonial:
      "From planning to execution, everything was perfect. Our wedding day was magical thanks to their attention to detail",
    thumbnail: "/assets/stories/2.jpg",
  },
  {
    id: 3,
    mainImage: "/assets/stories/3.webp",
    testimonial:
      "The team made our dream wedding come true. Every moment was beautifully captured and perfectly orchestrated",
    thumbnail: "/assets/stories/3.webp",
  },
  {
    id: 4,
    mainImage: "/assets/stories/4.webp",
    testimonial:
      "Outstanding service and incredible results. Our families are still talking about how wonderful everything was",
    thumbnail: "/assets/stories/4.webp",
  },
  {
    id: 5,
    mainImage: "/assets/stories/5.webp",
    testimonial:
      "Professional, creative, and absolutely delightful to work with. They exceeded all our expectations",
    thumbnail: "/assets/stories/5.webp",
  },
] as const;

export type StoriesData = typeof storiesData;
