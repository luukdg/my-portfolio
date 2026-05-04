import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ImageCarousel({
  image,
}: {
  image?: { type: string; src: string }[];
}) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {image?.map((item, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-video w-full overflow-hidden rounded-md bg-muted">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  muted
                  autoPlay
                  loop
                  className="absolute inset-0 w-full h-full object-contain"
                />
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {image && image.length > 1 && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
}
