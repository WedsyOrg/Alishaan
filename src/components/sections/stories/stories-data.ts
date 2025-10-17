export interface StoryImage {
  id: number;
  mainImage: string;
  testimonial: string;
  thumbnail: string;
}

export const storiesData: StoryImage[] = [
  {
    id: 1,
    mainImage: '/assets/stories/1.png',
    testimonial: "We've had such a wonderful experience, no stress, no hassle, all thanks to all the team efforts they have put together",
    thumbnail: '/assets/stories/1.png'
  },
  {
    id: 2,
    mainImage: '/assets/stories/2.png',
    testimonial: "From planning to execution, everything was perfect. Our wedding day was magical thanks to their attention to detail",
    thumbnail: '/assets/stories/2.png'
  },
  {
    id: 3,
    mainImage: '/assets/stories/3.png',
    testimonial: "The team made our dream wedding come true. Every moment was beautifully captured and perfectly orchestrated",
    thumbnail: '/assets/stories/3.png'
  },
  {
    id: 4,
    mainImage: '/assets/stories/4.png',
    testimonial: "Outstanding service and incredible results. Our families are still talking about how wonderful everything was",
    thumbnail: '/assets/stories/4.png'
  },
  {
    id: 5,
    mainImage: '/assets/stories/5.png',
    testimonial: "Professional, creative, and absolutely delightful to work with. They exceeded all our expectations",
    thumbnail: '/assets/stories/5.png'
  }
] as const;

export type StoriesData = typeof storiesData;
