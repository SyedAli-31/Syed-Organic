import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { getAllCategories } from "@/sanity/helpers/queries";
import React from "react";

interface CategoryPageProps {
  params: { slug: string }; // ✅ Fixed type (removed Promise)
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = params;

  try {
    const categories = await getAllCategories();

    return (
      <Container className="py-10">
        <Title className="text-xl">
          Products by Category
          {/* <span className="font-bold text-green-600 capitalize tracking-wide">
            {slug && slug}
          </span> */}
        </Title>
        <CategoryProducts categories={categories} slug={slug} />
      </Container>
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return (
      <Container className="py-10 text-red-600 text-center">
        Failed to load categories.
      </Container>
    );
  }
};

export default CategoryPage;
