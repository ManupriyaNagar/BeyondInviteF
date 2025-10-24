import { useRouter } from "next/navigation";
import Image from "next/image";

export default function TemplateList({ templates }) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {templates.map((template) => (
        <div
          key={template.id}
          onClick={() => {
            router.push(`/template/${template.id}`, { state: { template } });
          }}
          className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="aspect-square relative">
            <Image
              src={template.images[0]}
              alt={template.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-1">{template.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{template.category}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-[#37514D]">₹{template.price}</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{template.rating}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
