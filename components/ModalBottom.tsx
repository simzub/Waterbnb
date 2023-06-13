import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface ModalBottomProps {
  open: any;
  setOpen: any;
}

export default function ModalBottom(props: ModalBottomProps) {
  const handleModalClose = () => props.setOpen(false);
  return (
    <Transition show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div
            className="fixed inset-0 transition-all"
            onClick={handleModalClose}
          >
            <div className="absolute inset-0 bg-black opacity-75"></div>
          </div>
          <Dialog.Panel className="fixed bottom-0 left-0 right-0 bg-white rounded-t-lg p-4">
            {/* Modal content */}
            <Dialog.Title className="text-xl font-bold mb-4">
              Modal Title
            </Dialog.Title>
            <p className="mb-4">Modal body text goes here.</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleModalClose}
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
