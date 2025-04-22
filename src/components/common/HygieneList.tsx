import { LucideIcon } from "lucide-react";

interface DiscoverCardProps {
  heading: string;
  description: string;
  icon?: LucideIcon;
  iconColor?: string;
}

const DiscoverCard = ({
  heading,
  description,
  icon: Icon,
  iconColor = "text-primary", // default color
}: DiscoverCardProps) => {
  return (
    <>
      <div className="w-[100%] h-fit p-4 rounded-lg lg:w-[90%]">
        <div className="flex items-start ">
          {Icon && (
            <Icon className={`w-[52px] h-[52px] mt-3 mr-4 ${iconColor}`} />
          )}
          <div className="flex flex-col float-left">
            <p className="text-[20px] font-medium leading-[30px] text-left text-[rgba(10,1,23,1)]">
              {heading}
            </p>
            <p className="text-[#979496] font-medium text-sm leading-[25.2px] tracking-wider flex items-center">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverCard;
