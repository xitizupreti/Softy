import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardData from "./common/CardData";
import { Separator } from "@/components/ui/separator";

export default function Categories() {
  return (
    <>
      <Separator />
      <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-white">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text text-transparent">
          Explore our Categories
        </h1>

        <p className="mt-4 text-lg text-center text-gray-700 max-w-2xl">
          Discover the wide range of products we offer for your personal and
          professional hygiene needs.
        </p>
        <div className="flex items-center justify-center w-full mt-8">
          <Carousel className="w-[90%] max-w-3xl lg:max-w-6xl">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <Card className="h-[250px] w-[250px] justify-self-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    <CardContent className="flex h-[400px] w-[250px] items-center justify-center rounded-lg">
                      <CardData image="/c1.jpg" heading="Diaper" />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
