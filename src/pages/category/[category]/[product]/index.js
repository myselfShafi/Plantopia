import { useRouter } from "next/router";

export default function ProductDetails(second) {
  const {
    query: { product },
  } = useRouter();
  return <div>{product}</div>;
}
