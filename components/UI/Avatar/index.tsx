import Image from "next/image";

interface AvatarProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const Avatar = ({
  src,
  alt = "Avatar Image",
  width = 24,
  height = 24,
  className = "",
}: AvatarProps) => {
  return (
    <Image
      unoptimized
      className="rounded-full object-cover"
      width={width}
      height={height}
      src={src}
      alt={alt}
    />
  );
};

export default Avatar;
