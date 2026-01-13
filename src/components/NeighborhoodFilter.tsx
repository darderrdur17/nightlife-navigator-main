import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";

interface NeighborhoodFilterProps {
  neighborhoods: string[];
  value: string;
  onChange: (value: string) => void;
}

export function NeighborhoodFilter({ neighborhoods, value, onChange }: NeighborhoodFilterProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full sm:w-[200px] border-2 border-foreground bg-background font-heading uppercase text-sm">
        <MapPin className="w-4 h-4 mr-2" />
        <SelectValue placeholder="All Neighborhoods" />
      </SelectTrigger>
      <SelectContent className="border-2 border-foreground bg-background">
        <SelectItem value="all" className="font-heading uppercase text-sm">
          All Neighborhoods
        </SelectItem>
        {neighborhoods.map((neighborhood) => (
          <SelectItem 
            key={neighborhood} 
            value={neighborhood}
            className="font-heading uppercase text-sm"
          >
            {neighborhood}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
