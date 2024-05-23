import Portal from "@/components/common/portal";
import { useEffect } from "react";

interface ModalProps {
  onClose?: () => void;
  maskClosable?: boolean;
  closable?: boolean;
  visible?: boolean;
  children?: React.ReactNode;
  className: string;
}

const Modal = ({
  onClose,
  maskClosable = true,
  closable = true,
  visible = false,
  children,
  className,
}: ModalProps) => {
  useEffect(() => {
    if (visible) {
      const scrollY = window.scrollY;
      document.body.style.cssText = `position: fixed; top: -${scrollY}px; left: 0; right: 0;`;

      return () => {
        document.body.style.cssText = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [visible]);
  const handleMaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && maskClosable && onClose) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <Portal elementId={className}>
      <div
        className={`modal-overlay ${
          visible ? "block" : "hidden"
        } fixed inset-0 bg-black bg-opacity-60 z-50`}
        aria-label="modal-overlay"
      />
      <div
        onClick={handleMaskClick}
        aria-label="modal-wrapper"
        tabIndex={-1}
        className={`modal-wrapper ${
          visible ? "block" : "hidden"
        } fixed inset-0 z-[100] overflow-auto outline-none ${className}`}>
        <div
          tabIndex={0}
          className="modal-inner px-[50px] box-border py-[35px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-5 min-w-300">
          {closable && (
            <button
              onClick={handleCloseClick}
              aria-label="close-modal"
              className="modal-close absolute top-[45px] right-[12px] cursor-pointer flex flex-col items-center text-sm z-50">
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
              <span className="text-black">(Esc)</span>
            </button>
          )}
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
