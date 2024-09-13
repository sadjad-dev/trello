import Spinner from "@/assets/icons/Loading.svg";
import { twMerge } from "tailwind-merge";

export default function ButtonLoading({ className }: { className?: string }) {
  return (
    <div className="flex items-center justify-center">
      <Spinner className={twMerge("h-6 w-6 animate-spin p-0.5", className)} />
    </div>
  );
}
