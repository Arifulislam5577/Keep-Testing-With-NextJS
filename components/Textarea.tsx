"use client";
import { Textarea } from "keep-react-demo";

const TextAreaComponent = () => {
  return (
    <Textarea
      id="comment"
      placeholder="Leave a comment..."
      withBg={true}
      border={false}
      color="gray"
      rows={4}
      helperText={
        <span className="font-medium text-slate-500">
          Info that helps a user with this field!
        </span>
      }
    />
  );
};

export default TextAreaComponent;
