import { useState, useEffect, useRef, ImgHTMLAttributes } from "react";

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
};

function Spinner() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <span className="animate-spin rounded-full h-16 w-16 border-b-2 border-black"></span>
    </div>
  );
}

export default function LazyImage(props: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          if (imageRef.current) observer.unobserve(imageRef.current); // Stop observing once loaded
        }
      });
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    // Cleanup function for useEffect
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [imageRef]);

  return (
    <div className={props.className} ref={imageRef}>
      {isLoaded ? (
        <img
          className="h-full w-full"
          style={{
            borderRadius: "inherit",
          }}
          src={props.src}
          alt={props.alt}
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
}
