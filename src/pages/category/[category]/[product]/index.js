import CustomBreadcrumb, { titles } from "@/components/Breadcrumb";
import { Viewbox } from "@/components/Viewbox";
import mockData from "@/content/mockData.json";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { ProductWrapper } from "@/views/ProductWrapper";
import { ReviewWrapper } from "@/views/ReviewWrapper";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function ProductDetails({ params }) {
  const { data, eachCategory } = params;
  const { mobView } = useMediaQueries();
  const {
    query: { category },
    asPath,
  } = useRouter();

  const newTitle = [
    ...titles,
    ...[
      { label: eachCategory.title, href: `/category/${category}` },
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

  const dataList = await fetch(
    `${process.env.DOMAIN}api/category/${category}/${product}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const categories = await fetch(
    `${process.env.DOMAIN}api/category/${category}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  const eachData = await dataList?.json();
  const eachCategory = await categories?.json();

  return {
    props: {
      params: { data: eachData, eachCategory },
    },
  };
}

export async function getStaticPaths() {
  // const categories = Object.keys(mockData); //instead of prerendering all data . passing below few categories//
  const categories = ["indoor", "outdoor"];
  const paths = categories.flatMap((category) =>
    mockData[category].data.map((product) => ({
      params: { category, product: product.uuid },
    }))
  );

  return { paths, fallback: true };
}
