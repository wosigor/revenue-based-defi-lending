import { Listbox, Transition } from "@headlessui/react";
import { HiCheck, HiSelector } from "react-icons/hi";
import React, { Fragment } from "react";

export type SelectOption = {
  name: string;
  id: number;
  value: string;
};

interface Props<T> {
  label?: string;
  value: T;
  setValue: any;
  options: T[];
}

const SelectInput: React.FC<Props<SelectOption>> = ({
  label,
  value,
  setValue,
  options,
}) => {
  return (
    <label className="w-full ">
      {label && <div className="mb-2 font-medium text-gray-800 ">{label}</div>}
      <Listbox value={value} onChange={setValue}>
        <div className="relative">
          <Listbox.Button className="relative font-normal font-body w-full py-2 pl-4 pr-10 text-left  ring-2 ring-gray-400   shadow-md rounded-lg cursor-pointer focus:ring-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75  focus-visible:ring-primary">
            <span className="block truncate">{value.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <HiSelector
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as="div"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full  z-10 p-2 mt-2 overflow-auto text-base bg-white border border-gray-400 shadow-xl   rounded-lg max-h-60 focus:outline-none sm:text-sm">
              {options.map((item) => (
                <Listbox.Option
                  key={item.id}
                  className={({ active }) =>
                    `${active ? "text-brand-500  bg-gray-200 " : "text-gray-600"}
                    cursor-pointer font-body select-none b  relative py-2.5 pl-10 pr-4 rounded-md`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium text-primary" : "font-normal"
                        } block truncate`}
                      >
                        {item.name}
                      </span>
                      {selected ? (
                        <span
                          className={` text-brand-500 absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <HiCheck className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </label>
  );
};

export default SelectInput;
