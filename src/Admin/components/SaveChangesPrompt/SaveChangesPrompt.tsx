import * as React from 'react'

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

export interface SaveChangesPromptProps {
  when: any;
  onCancel: any;
  onConfirm: any;
}

export const SaveChangesPrompt: React.SFC<SaveChangesPromptProps> = (props) => {
  return (
    <Modal isOpen={props.when} toggle={()=>{props.onCancel()}}>
    <ModalHeader>Changes Have Not Been Saved</ModalHeader>

    <ModalBody>Changes have been made to the form and have not been saved, do you want to cancel or proceed?</ModalBody>

    <ModalFooter>
      <Button onClick={()=>{props.onCancel()}}>Cancel</Button>
      <Button onClick={()=>{props.onConfirm()}}>Proceed</Button>
    </ModalFooter>
  </Modal>
  )
 }

 export default SaveChangesPrompt;