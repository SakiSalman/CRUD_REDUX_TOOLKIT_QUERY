import React from "react";

const Modal = ({ children, modal, setModal }) => {
  return (
    <div>
      <div className="modal-wrapper">
        <div className="modal-innter w-50">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <span className="btn btn-danger btn-sm" onClick={() =>setModal(!modal)}>X</span>
                  </div>
                  <div className="card-body">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
