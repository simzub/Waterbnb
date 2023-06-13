import ModalBottom from './ModalBottom';
import { useState } from 'react';
import Destinations from './Destinations';

function GlobeIcon() {
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
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
}

function UpIcon() {
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
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  );
}

function PrivacyIcon() {
  return (
    <svg width="26" height="12" fill="none">
      <rect x="0.5" y="0.5" width="25" height="11" rx="5.5" fill="#fff"></rect>
      <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path>
      <path
        d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
        stroke="#06F"
        stroke-linecap="round"
      ></path>
      <path
        d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
        stroke="#fff"
        stroke-linecap="round"
      ></path>
      <rect
        x="0.5"
        y="0.5"
        width="25"
        height="11"
        rx="5.5"
        stroke="#06F"
      ></rect>
    </svg>
  );
}

export default function Footer() {
  const [openLanguageModal, setOpenLanguageModal] = useState(false);
  return (
    <div className="sticky bottom-0 z-20 bg-gray-50 ">
      {openLanguageModal && (
        <ModalBottom open={openLanguageModal} setOpen={setOpenLanguageModal}>
          <Destinations />
        </ModalBottom>
      )}
      <footer className="w-full flex justify-between px-10 py-3 border-t-[1px] border-[#dddddd] text-sm">
        <div className="flex ">
          <span>© {new Date().getFullYear()} Waterbnb, Inc.</span>
          <span className="mx-2">·</span>
          <span className="flex">
            <ol className="flex">
              <li>
                <a className="hover:underline cursor-pointer">Terms</a>
              </li>
              <li>
                <span className="mx-2">·</span>
                <a className="hover:underline cursor-pointer">Sitemap</a>
              </li>
              <li>
                <span className="mx-2">·</span>
                <a className="hover:underline cursor-pointer">Privacy</a>
              </li>
              <li className="flex ">
                <span className="mx-2">·</span>
                <a className="flex justify-center items-center hover:underline cursor-pointer">
                  <span>Your Privacy Choices</span>
                  <span className="ml-2">
                    <PrivacyIcon />
                  </span>
                </a>
              </li>
            </ol>
            <span className="mx-2">·</span>
            <button
              className="hover:underline cursor-pointer"
              onClick={() => setOpenLanguageModal(true)}
            >
              Destinations
            </button>
          </span>
        </div>
        <div className="flex font-medium gap-4">
          <div className="flex">
            <span className="mr-4">
              <button className="flex">
                <span className="mr-2">
                  <GlobeIcon />
                </span>
                <span className="hover:underline">English (US)</span>
              </button>
            </span>
            <button>
              <span className="mr-2">€</span>
              <span className="hover:underline">EUR</span>
            </button>
          </div>
          <button className="flex">
            <span className="hover:underline">Support & resources</span>
            <span className="ml-1">
              <UpIcon />
            </span>
          </button>
        </div>
      </footer>
    </div>
  );
}
