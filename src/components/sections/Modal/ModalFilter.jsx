import React from "react";
import './ModalFilter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Upload from '../../sections/Upload/Upload';
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
        <FontAwesomeIcon icon={faUserCircle} />
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
        <Upload />
          
          </ModalBody>
          <ModalFooter>
          <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export {VerticallyCenter}