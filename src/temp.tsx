// const temp = () => (
//   <View rootStyles={{ border: "2px solid blue" }} pa={5}>
//     {showModal && (
//       <Modal isOpen={showModal}>
//         <ModalHeader
//           title="Sample title"
//           onClose={() => {
//             setShowModal(false);
//           }}
//         />
//         <ModalBody pa={5}>Sample</ModalBody>
//       </Modal>
//     )}
//     {/* no theme */}
//     <Flex borderColor="green" mb={5}>
//       <Example name="john" />
//     </Flex>
//     {/* with theme */}
//     <Flex mb={5}>
//       <Example theme="light" name="john" />
//     </Flex>
//     <Flex mb={5}>
//       <Example theme="dark" name="john" />
//     </Flex>
//     {/* no theme, with className */}
//     <Flex mb={5}>
//       <Example name="john" rootClassName="example_app_styles" />
//     </Flex>
//     {/* with theme, with className */}
//     <Flex mb={5}>
//       <Example theme="light" name="john" rootClassName="example_app_styles" />
//     </Flex>
//   </View>
// );
