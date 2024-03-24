import CustomBreadcrumb, { titles } from "@/components/Breadcrumb";
import { Viewbox } from "@/components/Viewbox";
import mockData from "@/content/mockData.json";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { getProductsByCategory, getProductsData } from "@/utils/getMockData";
import { ProductWrapper } from "@/views/ProductWrapper";
import { ProductSkeletonWrapper } from "@/views/ProductWrapper/skeleton";
import { ReviewWrapper } from "@/views/ReviewWrapper";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function ProductDetails(props) {
  const { data, title } = props;
  const { mobView } = useMediaQueries();
  const {
    query: { category },
    asPath,
    isFallback,
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
        {isFallback ? (
          <ProductSkeletonWrapper />
        ) : (
          <>
            <ProductWrapper data={data} />
            <ReviewWrapper />
          </>
        )}
      </Viewbox>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const {
    params: { category, product },
  } = context;

  const productData = await getProductsData(category, product);
  const eachCategory = await getProductsByCategory(category);

  if (!productData || !eachCategory) {
    return { notFound: true };
  }

  return {
    props: {
      data: productData ?? null,
      title: eachCategory?.title ?? null,
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
