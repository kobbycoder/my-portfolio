"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelectedLayoutSegment } from "next/navigation";
import { motion } from "framer-motion"

const navigation = [
  { name: "Home 🛖", href: "/", targetSegment: null },
  { name: "About Me 👨‍💻", href: "/about", targetSegment: "about" },
  { name: "Projects ⚙️", href: "/projects", targetSegment: "projects" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 pl-8 sm:pl-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-emerald-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-end sm:items-stretch pr-8 sm:pr-0 sm:justify-between sm:mx-4">
                <motion.div 
                  initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                  }}
                  transition={{
                    duration: 0.5
                  }}
                className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 mt-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          activeSegment === item.targetSegment
                            ? "bg-gray-900 text-white"
                            : " text-gray-700 hover:text-teal-500",
                          "rounded-md px-3 py-2 text-xs flex items-center"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.icon ? item.icon : ""}
                        {item.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
                <motion.div 
                initial={{
                  x: 500,
                  opacity: 0,
                  scale: 0.5
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  duration:0.5
                }}
                className="md:mt-2">
                  <a href="/contact" className="bg-emerald-200 py-2 p-4 rounded-3xl text-gray-500 text-xs shadow-lg hover:bg-white">
                    Hire Me 🩶
                  </a>
                </motion.div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-xs text-gray-700"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
