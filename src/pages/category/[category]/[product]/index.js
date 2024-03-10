import CustomBreadcrumb, { titles } from "@/components/Breadcrumb";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function ProductDetails() {
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
    </Fragment>
  );
}
