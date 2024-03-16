import CustomBreadcrumb, { titles } from "@/components/Breadcrumb";
import { Viewbox } from "@/components/Viewbox";
import { useMediaQueries } from "@/hooks/useMediaQueries";
import { ProductWrapper } from "@/views/ProductWrapper";
import { ReviewWrapper } from "@/views/ReviewWrapper";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function ProductDetails() {
  const { mobView } = useMediaQueries();

  const {
    query: { category, product },
    asPath,
  } = useRouter();

  const newTitle = [
    ...titles,
    ...[
      { label: category, href: `/category/${category}` },
      { label: product, href: asPath },
    ],
  ];
  return (
    <Fragment>
      <CustomBreadcrumb currentPath={newTitle} />
      <Viewbox
        sx={{ maxWidth: mobView ? `100% !important` : `85% !important` }}
      >
        <ProductWrapper />
        <ReviewWrapper />
      </Viewbox>
    </Fragment>
  );
}
