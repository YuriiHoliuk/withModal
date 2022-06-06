import { FC } from 'react';
import './App.css';
import { ConfirmationModal } from './ConfirmationModal';



export const App: FC = () => {
  return (
    <div>
      <ConfirmationModal title="Are you sure?" />
    </div>
  );
}
