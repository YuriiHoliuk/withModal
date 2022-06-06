import { FC, ReactNode, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

interface Props {
  title: string;
  children: ReactNode;
  renderButtons?: (close: () => void) => ReactNode;
}

export const Modal: FC<Props> = ({ title, children, renderButtons }) => {
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
              {children}
              {renderButtons && renderButtons(close)}
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