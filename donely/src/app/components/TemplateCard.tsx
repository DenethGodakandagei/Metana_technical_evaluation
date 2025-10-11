import Image from "next/image";
import { ArrowRight } from "lucide-react";


interface TemplateCardProps {
  title: string;
  description: string;
  image: string;
}

export default function TemplateCard({ title, description, image }: TemplateCardProps) {
  return (
    <div className="bg-gray-100 rounded-xl border  transition cursor-pointer ">
      <Image
        src={image}
        alt={title}
        width={320}
        height={250}
        className="rounded-xl border border-white p-1 m-1 transition-colors shadow-xl"
      />
      <div className="p-3">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <span className="text-sm text-gray-500 flex justify-between">{description}    <ArrowRight className="w-4 h-4" /></span>
      </div>
    </div>
  );
}
