'use client'
import { toast } from "sonner";
import { Button } from "./ui/button";

const Test = () => {
  const handleClick = (mode) => {
    mode ? toast.success("Toast success") : toast.error("Toast failed");
  };

  return (
    <div className="flex gap-4">
      <Button className="bg-green-500 text-white" onClick={() => handleClick(true)}>
        Success
      </Button>
      <Button className="bg-red-500 text-white" onClick={() => handleClick(false)}>
        Error
      </Button>
    </div>
  );
};

export default Test;
