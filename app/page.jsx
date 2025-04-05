import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";

const Homepage = () => {
  // console.log(process.env.MONGODB_URI);
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default Homepage;

// import Link from "next/link";
// {
//   /* <Link href="/properties">Go to Properties</Link> */
// }
