"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/useMounted";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return null;
  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={400}
        height={400}
        priority
        className="min-h-75 object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrent(index)}
            className={cn(
              "border mr-2 cursor-pointer duration-300 hover:ring-2 hover:ring-orange-600",
              resolvedTheme === "light"
                ? current === index && "ring-2 ring-orange-500"
                : current === index && "ring-2 ring-orange-500"
            )}
          >
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
