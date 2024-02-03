const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-30 backdrop-blur-sm justify-center items-center flex overflow-auto">
      {children}
    </div>
  );
};

export default Modal;
