import React from "react";

const Form = ({handleCreateTodo, input, setInput}) => {
  return (
    <div>
      <form className="needs-validation">
        <div className="col my-2">
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            value={input.name}
            onChange={(e) => setInput(e.target.value)}
            required
            placeholder="Todo Name"
          />
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit" onClick={handleCreateTodo}>
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
