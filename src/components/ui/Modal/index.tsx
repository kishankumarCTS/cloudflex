"use client";

import React, { useEffect, useState, useRef, ReactNode } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import { Button } from "../Button";

type ModalVariant = "centered" | "fullscreen";

type FooterButton = {
  variant: "primary" | "secondary" | "text";
  children: ReactNode;
  onClick: () => void;
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  variant?: ModalVariant;
  container?: HTMLElement | null;
  size?: "medium" | "large" | "xl";
  withOverlay?: boolean;
  closeOnOverlayClick?: boolean;
  lockScroll?: boolean;
  footerButtons?: FooterButton[];
  customFooter?: React.ReactNode;
}

// TODO: centered modal is not able to center if scroll is locked
// TODO: how to go about size, max width in pixels (not responsive as w-full is applied id width is less than max width) or width in percentages (then responsive but if container is main then there is scroll which is breaking responsive)
// TODO: typography for title
//TODO: have to make main relative so that the modal is absolute to main is there any other way to do it

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  variant = "centered",
  container,
  size = "large",
  withOverlay = true,
  closeOnOverlayClick = true,
  lockScroll = true,
  footerButtons = [],
  customFooter,
}) => {
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || (variant !== "fullscreen" && !lockScroll)) return;
    if (variant === "fullscreen") {
      document.body.style.overflow = "hidden";
    } else {
      const target = container ?? document.body;
      // const target = document.body; //TODO: lock scroll only works if applied on body

      // const prevOverflow = target.style.overflow;
      target.style.overflow = "hidden";
      if (target !== document.body) {
        if (getComputedStyle(target).position === "static") {
          target.style.position = "relative";
        }
      }
    }

    return () => {
      if (variant === "fullscreen") {
        document.body.style.overflow = "auto";
      } else {
        const target = container ?? document.body;
        target.style.overflow = "auto";
        if (target !== document.body) {
          if (getComputedStyle(target).position === "relative") {
            target.style.position = "static";
          }
        }
      }
    };
  }, [isOpen, container, lockScroll, variant]);

  const handleOverlayClick: React.MouseEventHandler = (e) => {
    if (!closeOnOverlayClick) return;
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!mounted || !isOpen) return null;

  const target = container ?? document.body;

  // // Detect if container is body → fixed overlay
  const isBody = target === document.body;

  return ReactDOM.createPortal(
    <div
      className={clsx(
        variant === "fullscreen" || isBody
          ? "fixed inset-0 z-50 flex items-center justify-center"
          : "absolute inset-0 z-50 flex items-center justify-center",
        !withOverlay && "pointer-events-none"
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      {withOverlay && (
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-overlay-background/40"
          onMouseDown={handleOverlayClick}
        />
      )}

      <div
        className={clsx(
          "relative bg-themeWhite-900 shadow-lg flex flex-col",
          variant === "fullscreen"
            ? "w-full h-full"
            : `${
                size === "medium"
                  ? "max-w-md"
                  : size === "large"
                  ? "max-w-2xl"
                  : "max-w-5xl"
              } max-h-[70vh] mx-auto my-3 p-6 rounded-[20px]`
        )}
        // size === "medium"
        //           ? "w-[40%]"
        //           : size === "large"
        //           ? "w-[60%]"
        //           : "w-[80%]"
      >
        {title && (
          <div
            className={`${
              variant === "fullscreen" ? "py-3 px-6" : "mb-3"
            } flex justify-between items-center`}
          >
            <h2 id="modal-title" className="font-semibold text-lg">
              {title}
            </h2>
          </div>
        )}

        <div
          className={`flex-1 ${
            variant === "fullscreen" ? "py-3 px-6" : "mb-3"
          } overflow-y-auto`}
        >
          {children}
        </div>

        {customFooter ? (
          <div
            className={`flex justify-end gap-3 ${
              variant === "fullscreen" &&
              "py-3 px-6 shadow-[0_0_10px_0_rgba(0,0,0,0.15)]"
            }`}
          >
            {customFooter}
          </div>
        ) : footerButtons?.length > 0 ? (
          <div
            className={`flex justify-end gap-3 ${
              variant === "fullscreen" &&
              "py-3 px-6 shadow-[0_0_10px_0_rgba(0,0,0,0.15)]"
            }`}
          >
            {footerButtons?.map((button, index) => (
              <Button
                key={index}
                variant={button.variant}
                onClick={button.onClick}
              >
                {button.children}
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </div>,
    variant === "fullscreen" ? document.body : target
  );
};
