import React from "react";
import './ModalFilter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';
import {
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
    ModalBody,
    Lorem
  } from "@chakra-ui/react"


function VerticallyCenter() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()

  return (
    <div className="modal">
      <Button onClick={onOpen}>
        <FontAwesomeIcon icon={faSortAmountDownAlt} />
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal de los cojones</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cierra que se escapa el gato</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export {VerticallyCenter}