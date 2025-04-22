import { Separator } from "@/components/ui/separator";
import HygieneList from "./common/HygieneList";
import { Droplet, Baby, Shield, Layers } from "lucide-react";

export default function Hygiene() {
  return (
    <>
      <div className="pl-20 text-left flex flex-col items-start justify-center w-full h-full p-5  bg-[#f3eef6]">
        <p className="pb-6 text-2xl items-start bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text text-transparent">
          Nepal's No.1 Hygiene Brand
        </p>
        <h1 className="pb-6 text-4xl font-bold bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text text-transparent">
          Innovating Hygiene Solutions
        </h1>
        <p className="pb-6 text-lg text-gray-700 max-w-2xl">
          High-quality, safe, and hygienic products designed for the well-being
          of women, children, and families.
        </p>
        <HygieneList
          icon={Droplet}
          iconColor="text-purple-500"
          heading="Innovative Hygiene Solutions"
          description="Providing a diverse range of premium hygiene products, including wet wipes, tissues, and personal care items."
        />
        <HygieneList
          icon={Baby}
          iconColor="text-purple-500"
          heading="Comfortable Baby Diapers"
          description="Ensuring comfort and protection for your little ones."
        />
        <HygieneList
          icon={Shield}
          iconColor="text-purple-500"
          heading="Safe Sanitary Napkins"
          description="High quality hygiene solutions with ultra-soft top sheet, and superior absorbency for maximum comfort."
        />
        <HygieneList
          icon={Layers}
          iconColor="text-purple-500"
          heading="Versatile Tissue Papers"
          description="Daily hygiene essentials for homes and workplaces."
        />
        <Separator className="my-4" />
      </div>
    </>
  );
}
