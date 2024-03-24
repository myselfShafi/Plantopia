import { useRouter } from "next/router";

export const GetCurrentTitle = () => {
  const { asPath } = useRouter();
  const splitpath = asPath
    .split("/")
    .filter((path) => path != "")
    .join(" | ");

  const formattedTitle = `Plantopia ${splitpath && "|"} ${splitpath}`;
  return formattedTitle;
};
