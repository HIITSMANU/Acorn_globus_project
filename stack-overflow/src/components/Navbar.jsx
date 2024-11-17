import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FiSearch, FiBell, FiMessageSquare } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";


const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white-800 border rounded-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.png"
                className="h-8 w-auto text-white"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4 ml-6">
                <Input
                  className={"p-1.5 border rounded-xl pr-[120px] text-sm "}
                  placeholder="Search your answers here......"
                />
                <span className="bg-white border-secondary ">
                  <FiSearch className="text-muted ml-[-40px] mt-2" />
                </span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4 ml-6">
                <Input
                  className={"p-1.5 border rounded-xl pr-[120px] text-sm "}
                  placeholder="Products.."
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="hidden gap-5 sm:flex">
            <FiBell className="text-2xl text-muted cursor-pointer" />
            <FiMessageSquare className="text-2xl text-muted cursor-pointer" />
            <AiOutlineUser className="text-2xl text-muted cursor-pointer" />
            </div>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton>
          <div className="flex space-x-4 ">
                <Input
                  className={"p-1.5 border rounded-xl pr-[120px] text-sm "}
                  placeholder="Search your answers here......"
                />
                <span className="bg-white border-secondary ">
                  <FiSearch className="text-muted ml-[-40px] mt-2" />
                </span>
              </div>
              <div className="flex space-x-4  mt-1">
                <Input
                  className={"p-1.5 border rounded-xl pr-[120px] text-sm "}
                  placeholder="Products.."
                />
              </div>
              <div className="gap-5 flex mt-2">
            <FiBell className="text-2xl text-muted cursor-pointer" />
            <FiMessageSquare className="text-2xl text-muted cursor-pointer" />
            <AiOutlineUser className="text-2xl text-muted cursor-pointer" />
            </div>
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
