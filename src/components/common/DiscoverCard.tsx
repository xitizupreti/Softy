import { LucideIcon } from "lucide-react";

interface DiscoverCardProps {
  heading: string;
  description: string;
  icon?: LucideIcon;
  iconBg?: string;
  iconColor?: string;
}

const DiscoverCard = ({
  heading,
  description,
  icon: Icon,
  iconColor = "text-primary", // default color
  iconBg = "bg-primary/10", // default background
}: DiscoverCardProps) => {
  return (
    <>
      <div className="w-[100%] h-50 rounded-lg lg:w-[90%]">
        <div className="flex flex-col float-left">
          {Icon && (
            <Icon className={`w-9 h-9 p-1 mb-4 ${iconBg} ${iconColor}`} />
          )}
          <p className="text-[20px] font-medium leading-[30px] text-left text-[rgba(10,1,23,1)]">
            {heading}
          </p>
          <p className="text-[#979496] font-medium text-sm leading-[25.2px] tracking-wider flex items-center">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default DiscoverCard;
