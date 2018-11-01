// // TODO: add password error

// import * as React from 'react';
// // import {
// //   Button,
// //   Modal,
// //   Form,
// //   FormGroup,
// //   FormControl,
// //   ControlLabel,
// // } from 'react-bootstrap';

// export interface EnterPasswordModalProps {
//   showModal: boolean;
//   submit: any;
//   cancel: any;
//   success: any;
// }

// export class EnterPasswordModal extends React.Component<EnterPasswordModalProps> {
//   render() {
//     return (
//       <Modal show={this.props.showModal} 
//       onHide={()=>this.props.cancel()}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Enter Password</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <FormGroup controlId="formEnterPassword">
//               <ControlLabel>Enter Password</ControlLabel>
//               <FormControl
//                 type="password"
//                 onChange={e => {
//                   console.log(e);
//                 }}
//               />
//             </FormGroup>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             onClick={e => {
//               this.props.success();
//               this.props.submit();
//             }}
//           >
//             Submit
//           </Button>
//           <Button
//             onClick={e => {
//               this.props.cancel();
//             }}
//           >
//             Cancel
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }
// }

// export default EnterPasswordModal;
