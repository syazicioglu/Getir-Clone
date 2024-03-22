import { useEffect, useRef } from "react";

function Modal({ open, onClose, children }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed z-50 inset-0 flex justify-center items-center transition-opacity ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {open && (
        <>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div ref={modalRef} className="relative">
            {children}
          </div>
        </>
      )}
    </div>
  );
}

export default Modal;
