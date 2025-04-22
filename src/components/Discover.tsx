import { Separator } from "@/components/ui/separator";
import DiscoverCard from "./common/DiscoverCard";
import { Droplet, Award, Truck, Flag, Phone, Circle } from "lucide-react";

export default function Discover() {
  return (
    <>
      <Separator />
      <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-[#f2f2f4]">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text text-transparent">
          Discover the Softy Hygiene Advantage
        </h1>
        <p className="mt-4 text-lg text-center text-gray-700 max-w-2xl">
          Delivering innovative and high-quality hygiene solutions for every
          home and business.
        </p>
        <div className="w-full p-10 grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-4">
          <DiscoverCard
            icon={Droplet}
            iconBg="bg-blue-200 rounded-lg"
            heading="Innovative Hygiene Solutions"
            description="Providing a diverse range of premium hygiene products, including wet wipes, tissues, and personal care items."
          />
          <DiscoverCard
            icon={Award}
            iconBg="bg-green-200 rounded-lg"
            heading="Uncompromising Quality"
            description="Ensuring the highest standards in product quality to meet the hygiene needs of families and businesses."
          />
          <DiscoverCard
            icon={Truck}
            iconBg="bg-purple-200 rounded-lg"
            heading="Nationwide Distribution"
            description="Efficient and reliable delivery services that ensure timely availability of hygiene products across Nepal."
          />
          <DiscoverCard
            icon={Flag}
            iconBg="bg-orange-200 rounded-lg"
            heading="Proudly Made in Nepal"
            description="Softy Hygiene is a locally established brand, offering innovative and accessible hygiene products to every household."
          />
          <DiscoverCard
            icon={Phone}
            iconBg="bg-red-200 rounded-lg"
            heading="Dedicated Customer Support"
            description="Reach us at +01-5191390 or softy.corporate@gmail.com for queries and feedback. Located in Maitighar, Kathmandu."
          />
          <DiscoverCard
            icon={Circle}
            iconBg="bg-yellow-200 rounded-lg"
            heading="Committed to Growth"
            description="Focused on enhancing customer satisfaction while expanding into new markets and setting industry benchmarks."
          />
        </div>
        <Separator />
      </div>
    </>
  );
}
