import '../components/css/CreateButtonTodo.css'

function CreateButtonTodo() {
  return (
    <button 
      className="fab" 
      onClick={
        (event) => {
          console.log('Le diste click')
          console.log(event)
          console.log(event.target)
        }
      }>+</button>
  );
}

export { CreateButtonTodo };
