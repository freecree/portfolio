export default function getImageUrl(image: string) {
  return new URL(`../assets/${image}`, import.meta.url).href;
}