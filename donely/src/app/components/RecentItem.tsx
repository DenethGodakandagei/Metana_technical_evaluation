import Image from "next/image";

interface RecentItemProps {
  title: string;
  author: string;
  date: string;
  image: string;
}

export default function RecentItem({ title, author, date, image }: RecentItemProps) {
  return (
    <div className="bg-white rounded-xl border hover:shadow-md transition cursor-pointer">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="rounded-t-xl"
      />
      <div className="p-3">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500">{author} • {date}</p>
      </div>
    </div>
  );
}
