import clsx from "clsx";
import { DetailedHTMLProps, forwardRef, TextareaHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  className?: string;
  error?: string;
  id?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(function Input(
  { label, error = "", className = "", ...props },
  ref
) {
  return (
    <div>
      <label className="w-full  ">
        {label && (
          <div className="mb-2 font-sora font-medium text-gray-700">
            {label}
          </div>
        )}
        <div
          className={`flex group p-4 items-center overflow-hidden  focus-within:border-brand-500 hover:shadow-xl focus-within:shadow-lg  active:border-brand-500 border-2 border-gray-400  duration-300 rounded-md ${
            error != "" &&
            "border-red-500 focus-within:border-red-500 active:border-red-500"
          }`}
        >
          <textarea
            className={clsx(
              "flex-1 bg-transparent focus:outline-none placeholder:text-gray-600",
              className
            )}
            id={props.id}
            ref={ref}
            {...props}
          />
        </div>
        {error !== "" && <div className="mt-1 text-red-600">{error}</div>}
      </label>
    </div>
  );
});
