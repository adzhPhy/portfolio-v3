import { createClient, groq, type SanityClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export interface AboutProps {
  title: string;
  description: string;
  imgUrl: string;
}

export interface WorkProps {
  name: string | null;
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  imgUrl: string;
  tags: string[];
  images: any[];
}

export interface SkillProps {
  name: string;
  BgColor: string | null;
  icon: string;
}

export const client: SanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  useCdn: true,
  apiVersion: "2022-02-01",
  dataset: "production",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: string) => builder.image(source);

export async function getAbouts() {
  const query = groq`*[_type == "abouts"]{title,description,imgUrl}`;
  return client.fetch(query);
}

export async function getWorks() {
  const query = groq`*[_type == "works"]{name,title,description,projectLink,codeLink,tags,imgUrl,images}`;
  return client.fetch(query);
}

export async function getSkills() {
  const query = groq`*[_type == "skills"]{name,"icon":icon.asset->url}`;
  return client.fetch(query);
}
