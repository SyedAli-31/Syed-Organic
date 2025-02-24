import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-01-01", // Ensure this is defined
  useCdn: false, // Keep false if fetching dynamic data
  token: process.env.SANITY_API_TOKEN, // Needed for authenticated requests
});
