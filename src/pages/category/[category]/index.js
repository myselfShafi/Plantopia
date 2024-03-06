import { useRouter } from "next/router";

export default function Category({ params }) {
  const router = useRouter();
  const { category } = router.query;
  return <div>{category}</div>;
}
