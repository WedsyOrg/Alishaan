const CLOUDFRONT_URL = process.env.NEXT_PUBLIC_CLOUDFRONT_URL;
const S3_URL = process.env.NEXT_PUBLIC_S3_URL;

export const getImageUrl = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Use CloudFront if available, fallback to S3
  const baseUrl = CLOUDFRONT_URL || S3_URL;
  return `${baseUrl}/${cleanPath}`;
};

export const getVideoUrl = (path: string): string => {
  return getImageUrl(path);
};