import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { BsUpload } from "react-icons/bs";
import './ModalWorkspace.css';
import UploadWorkspace from '../Upload/UploadWorkspace/UploadWorkspace'
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


function ModalWorkspace() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()

  return (
    <div className="bmodal">
      <Button onClick={onOpen}>
        <FontAwesomeIcon icon={faUpload} />
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
          

          <UploadWorkspace />
          
          
          <ModalFooter>
          <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export {ModalWorkspace}