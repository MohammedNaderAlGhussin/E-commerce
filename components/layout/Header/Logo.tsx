"use client";

import Image from "next/image";
import Dark from "@/public/images/kaufra-dark.png";
import Light from "@/public/images/kaufra-light.png";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/useMounted";
import { APP_NAME } from "@/lib/constants";
import Link from "next/link";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <Link href="/" className="flex-start">
      <Image
        src={resolvedTheme === "dark" ? Light : Dark}
        alt={`${APP_NAME} logo`}
        width={60}
        height={50}
        priority
      />
      <span className="hidden lg:block font-bold text-2xl ml-3">
        {APP_NAME}
      </span>
    </Link>
  );
};

export default Logo;
