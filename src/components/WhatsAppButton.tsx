"use client";

import React from "react";

export default function WhatsAppButton() {
  const whatsappNumber = "919876543210"; // Placeholder Indian number
  const message = "Hi Hidden Ants Media! I would like to get a consultation for my business.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.004 0C5.378 0 0 5.378 0 12.004c0 2.115.548 4.183 1.59 6.015L0 24l6.15-1.616c1.782 1.01 3.824 1.54 5.85 1.544h.005c6.623 0 12.002-5.378 12.002-12.004C24 5.378 18.625 0 12.004 0zm0 21.996c-1.87 0-3.7-.5-5.31-1.445l-.38-.225-3.66.96.975-3.565-.248-.395c-1.04-1.656-1.587-3.593-1.586-5.59.004-5.514 4.49-10 10.007-10 2.668.001 5.178 1.04 7.062 2.926 1.884 1.886 2.92 4.394 2.918 7.06-.004 5.518-4.49 10.006-10.008 10.006zm5.485-7.487c-.3-.15-1.77-.872-2.046-.973-.275-.1-.475-.15-.675.15-.2.3-.775.973-.95 1.173-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.794-1.49-1.77-1.665-2.07-.175-.3-.02-.463.13-.61.137-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.588-.49-.51-.675-.52-.172-.007-.372-.01-.572-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.22 5.116 4.516.715.31 1.273.496 1.71.635.717.227 1.37.195 1.885.118.574-.085 1.77-.724 2.02-1.385.25-.66.25-1.225.175-1.385-.075-.16-.275-.26-.575-.41z" />
      </svg>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 ease-out whitespace-nowrap">
        Chat With Us
      </span>
    </a>
  );
}
