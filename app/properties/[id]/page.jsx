"use client";
import PropertyDetails from "@/components/PropertyDetails";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const PropertyPage = async ({ params }) => {
  await connectDB();
  const property = await Property.findById(params.id).lean();

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>

      <section className="bg-blue-50">
        <div className=" m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-[70%_30%] w-full gap-6">
            {/* property info  */}
            <PropertyDetails property={property} />
          </div>
        </div>
      </section>
    </>
  );
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
