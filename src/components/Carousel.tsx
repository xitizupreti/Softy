import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselDemo() {
  // Array of different images to display
  const images = ["/c1.jpg", "/c2.jpg"];

  return (
    <div className="w-full " style={{ height: "400px", maxHeight: "400px" }}>
      <Carousel className="w-full  h-[400px] max-h-[400px]">
        <CarouselContent className="h-[400px] mt-10 max-h-[400px]">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-[400px] max-h-[400px]">
              <Card className="w-full h-[400px] max-h-[400px] border-0 rounded-none">
                <CardContent className="w-full h-[400px] max-h-[400px] p-0 flex items-center justify-center overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`carousel image ${index + 1}`}
                    width={1920}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority={index === 0}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel controls */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white hover:bg-black/60" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white hover:bg-black/60" />
      </Carousel>
    </div>
  );
}
