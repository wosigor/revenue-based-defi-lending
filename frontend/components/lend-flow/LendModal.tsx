import Button from "components/ui/Button";
import Modal, { ModalHeader } from "components/ui/Modal";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  borrowerId: string | number;
  borrowerName: string;
};

const LendModal = ({ isOpen, setIsOpen, borrowerId, borrowerName }: Props) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleLendRequest = () => {

  }
  return (
    <Modal isOpen={isOpen} closeModal={closeModal} size="sm">
      <ModalHeader className="text-xl mb-4 font-medium text-gray-700">
        Lend {borrowerName}
      </ModalHeader>
      <div className="space-y-4">
        <div>
          <div className="text-gray-600 font-medium text-sm">
            Borrower Address :
          </div>
          <div className="text-sm text-gray-500">
            0xAF1cB165fC9e95769292f6af8b106395f346bb77
          </div>
        </div>
        <div>
          <div className="text-gray-600 font-medium text-sm">Lend Amount :</div>
          <div className="text-sm text-gray-500">10000 EUR</div>
        </div>
        <div>
          <div className="text-gray-600 font-medium text-sm">Interest Rate</div>
          <div className="text-sm text-gray-500">10 %</div>
        </div>
        <div>
          <div className="text-gray-600 font-medium text-sm">You will be repaid</div>
          <div className="text-sm text-gray-500">10100 EUR</div>
        </div>
        <div className="flex items-center justify-end gap-4">
          <Button onClick={closeModal}>Cancel</Button>
          <Button onClick={handleLendRequest} variant="primary">Confirm Lend</Button>
        </div>
      </div>
    </Modal>
  );
};

export default LendModal;
