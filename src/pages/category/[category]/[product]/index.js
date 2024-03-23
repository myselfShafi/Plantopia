import CustomBreadcrumb, { titles } from "@/components/Breadcrumb";
import { Viewbox } from "@/components/Viewbox";
import mockData from "@/content/mockData.json";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { getProductsByCategory, getProductsData } from "@/utils/getMockData";
import { ProductWrapper } from "@/views/ProductWrapper";
import { ReviewWrapper } from "@/views/ReviewWrapper";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function ProductDetails({ params }) {
  const { data, title } = params;
  const { mobView } = useMediaQueries();
  const {
    query: { category },
    asPath,
  } = useRouter();

  const newTitle = [
    ...titles,
    ...[
      { label: title, href: `/category/${category}` },
      { label: data?.name, href: asPath },
    ],
  ];
  return (
    <Fragment>
      <CustomBreadcrumb currentPath={newTitle} />
      <Viewbox
        sx={{ maxWidth: mobView ? `100% !important` : `85% !important` }}
      >
        <ProductWrapper data={data} />
        <ReviewWrapper />
      </Viewbox>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const {
    params: { category, product },
  } = context;

  const productData = getProductsData(category, product);
  const eachCategory = getProductsByCategory(category);

  return {
    props: {
      params: { data: productData, title: eachCategory?.title },
    },
  };
}

export async function getStaticPaths() {
  const categories = ["indoor", "outdoor"];
  const paths = categories.flatMap((category) =>
    mockData[category].data.map((product) => ({
      params: { category, product: product.uuid },
    }))
  );

  return { paths, fallback: true };
}
