"use client";

const PropertyPage = ({ params }) => {
  return <div>property page {params.id}</div>;
};

export default PropertyPage;

// import {
//   useRouter,
//   useParams,
//   useSearchParams,
//   usePathname,
// } from "next/navigation";

// const router = useRouter();
// console.log(router);
// const params = useParams();
// const searchParams = useSearchParams();
// const pathname = usePathname();

// {
//   /* <button onClick={() => router.replace("/")}>Go Home</button> */
// }
// {
//   /* Property page {params.id} */
// }
// {
//   /* <div>property page {searchParams.get("name")}</div> */
// }
// {
//   /* <div>Property page {pathname}</div> */
// }
