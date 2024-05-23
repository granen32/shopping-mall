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
  const onMaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose && onClose();
    }
  };
  const close = () => {
    if (onClose) {
      onClose();
    }
  };
  useEffect(() => {
    if (visible) {
      const scrollY = window.scrollY;
      document.body.classList.add("fixed", "top-0", "left-0", "right-0");
      document.body.style.top = `-${scrollY}px`;

      return () => {
        document.body.classList.remove("fixed", "top-0", "left-0", "right-0");
        document.body.style.top = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [visible]);
  return (
    <Portal elementId={className}>
      <div
        className={`modal-overlay ${
          visible ? "block" : "hidden"
        } fixed inset-0 bg-black bg-opacity-60 z-[50]`}
        aria-label="modal-overlay"
      />
      <div
        onClick={maskClosable ? onMaskClick : undefined}
        aria-label="modal-wrapper"
        tabIndex={-1}
        className={`modal-wrapper ${
          visible ? "block" : "hidden"
        } fixed inset-0 z-[100] overflow-auto outline-none  ${className}`}>
        <div
          tabIndex={0}
          className={`modal-inner px-[50px] box-border py-[10px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[5px] min-w-[300px]`}>
          {closable && (
            <button
              onClick={close}
              aria-label="onclose"
              className="modal-close absolute top-[10px] right-[10px] cursor-pointer flex flex-col items-center text-white text-sm z-50">
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
              <span className="text-sm text-black">(Esc)</span>
            </button>
          )}
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
