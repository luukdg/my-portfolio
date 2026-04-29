import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ImageCarousel({ image }: { image?: string[] }) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {image?.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-video w-full overflow-hidden rounded-md bg-muted">
              <img
                src={src}
                alt={`Screenshot ${index + 1}`}
                className="absolute inset-0 w-full h-full object-contain"
              />
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
