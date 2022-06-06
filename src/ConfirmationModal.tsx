import { FC } from 'react';
import { withModal, ModalContentProps } from './withModal';

const ConfirmationModalContent: FC<ModalContentProps> = ({ close }) => (
  <>
    <div>
      <p>It is not undoable</p>
      <p>Rethink it!</p>
    </div>
    <button
      type="button"
      onClick={() => {
        console.log('Yes!');
        close();
      }}
    >
      Proceed!
    </button>
    <button
      type="button"
      onClick={() => {
        console.log('No!');
        close();
      }}
    >
      No!
    </button>
  </>
);

export const ConfirmationModal = withModal(ConfirmationModalContent);