import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface ModalBottomProps {
  open: any;
  setOpen: any;
  children: React.ReactNode;
}

function XMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function ModalBottom(props: ModalBottomProps) {
  const handleModalClose = () => props.setOpen(false);
  return (
    <Transition show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={props.setOpen}>
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div
            className="fixed inset-0 transition-all"
            onClick={handleModalClose}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <Dialog.Panel className="fixed bottom-0 left-0 right-0 bg-white rounded-t-lg ">
            {/* Modal content */}
            <div
              className="absolute top-4 left-4 cursor-pointer rounded-full hover:bg-gray-50 p-2 w-fit"
              onClick={handleModalClose}
            >
              <XMark />
            </div>
            <div className="px-20 mt-12 mb-16">
              <div>{props.children}</div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
