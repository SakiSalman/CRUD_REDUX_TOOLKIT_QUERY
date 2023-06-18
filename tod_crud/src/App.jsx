import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import { useCreateTodoMutation, useDeleteTodoMutation, useFetchDataQuery, useUpdateTodoMutation } from "./features/api/apiSlice";
import Form from "./components/Modal/Form";
function App() {
  const [input, setInput] = useState({
    name : ''
  })
  const [modal, setModal] = useState(false)
  const [createTodo, {isLoading, isError, isSuccess}] = useCreateTodoMutation()
  const {data, isLoading:getLoading, isError:getError, isSuccess:getSuccess} = useFetchDataQuery()
  const [ deleteTodo] = useDeleteTodoMutation()
  const [ updateTodo] = useUpdateTodoMutation()
  // create todo
  const handleCreateTodo = (e) => {
      e.preventDefault()
      console.log(input);
    createTodo({name : input}).then((res) => {
      if (res.data) {
        setModal(false)
      }
    })
  }
  // delete todo
  const handleDeleteTodo = (id) => {
      deleteTodo(id)
  }

  return (
    <>
      <div className="container py-5">
        <div className="row py-5">
          <div className="col">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h3>Todos</h3>
                <div className="btn btn-md btn-success" onClick={() => setModal(!modal)}>Add New</div>
              </div>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th >#</th>
                      <th>Name</th>
                      <th >Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      getSuccess && data.map((data,index)=> {
                        return   <tr>
                        <td>{index + 1}</td>
                        <td>{data.name}</td>
                        <td><button className={`btn btn-outline-${data.status ? 'success' : 'danger'}`}>{data.status ? 'Completed' : 'Pending'}</button></td>
                        <td>
                          <button className="btn btn-sm btn-danger" onClick={() => handleDeleteTodo(data._id)}>Delete</button>
                          {
                            !data.status && <button className="btn btn-sm btn-success" 
                            onClick={() => updateTodo(data._id)}>Complete</button>
                          }
                        </td>
                      </tr>
                      })
                    }
                  
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    {
      modal &&  <Modal  modal={modal} setModal={setModal}> 
      
        <Form handleCreateTodo={handleCreateTodo}  setInput={setInput} input={input}></Form>
      </Modal>
    }
     
    </>
  );
}

export default App;
