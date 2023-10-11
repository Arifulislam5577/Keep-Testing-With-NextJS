"use client";
import { Badge } from "keep-react-demo";

const BadgeComponent = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Badge size="xs" colorType="light" color="info">
        Default
      </Badge>
      <Badge size="xs" colorType="light" color="gray">
        Gray Badge
      </Badge>
      <Badge size="xs" colorType="light" color="error">
        Error Badges
      </Badge>
      <Badge size="xs" colorType="light" color="success">
        Success Badges
      </Badge>
      <Badge size="xs" colorType="light" color="warning">
        Warning Badges
      </Badge>
    </div>
  );
};

export default BadgeComponent;
