import { useEffect, useRef } from 'react';
import { useModalStore } from '@stores/useModalStore';
import { MODAL_COMPONENTS } from '@customTypes/modal';
import S from './style';

export default function BaseModal() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { isOpen, modalType, modalProps, close } = useModalStore();

  useEffect(() => {
    if (!dialogRef.current) return;

    if (isOpen && !dialogRef.current.open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [close]);

  if (!isOpen || !modalType) return null;

  const SpecificModalConfig = MODAL_COMPONENTS[modalType as keyof typeof MODAL_COMPONENTS];
  if (!SpecificModalConfig) return null;

  const { Component: SpecificModal, disableOutsideClick } = SpecificModalConfig;

  const handleOutsideClick = (event: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    if (!disableOutsideClick && dialogRef.current && event.target === dialogRef.current) {
      close();
    }
  };

  return (
    <S.ModalOverlay
      ref={dialogRef}
      onClick={handleOutsideClick}
    >
      <SpecificModal
        {...modalProps}
        onClose={close}
      />
    </S.ModalOverlay>
  );
}
