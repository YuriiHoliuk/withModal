import {
  ComponentType, FC, useState, useCallback,
} from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

interface BaseModalProps {
  title: string;
}

export interface ModalContentProps {
  close: () => void;
}

export function withModal<P>(
  Inner: ComponentType<P & ModalContentProps>,
): ComponentType<P & BaseModalProps> {
  const Outer: FC<P & BaseModalProps> = ({ title, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const close = useCallback(() => setIsOpen(false), []);

    return (
      <div >
      <button
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Open
      </button>
      {
        isOpen && createPortal(
          (
            <div className={styles.wrapper}>
              <div className={styles.modal}>
              <h2>{title}</h2>
              
              <Inner
                {...props as unknown as P}
                close={close}
              />

              <button
                className={styles.close}
                type="button"
                onClick={() => setIsOpen(false)}
              >
                ❌
              </button>
            </div>
            </div>
          ),
          document.querySelector('#modals') as Element,
        )
      }
  </div>
    );
  };

  Outer.displayName = `withModal(${Inner.displayName || Inner.name || 'Anonymous'})`;

  return Outer;
};
