import './index.css'
export default function TOdoList({ todos }) {
  return (
    <>
      {todos.map((todo, i) => {
        return <li key={i}>{todo}</li>;
      })}
    </>
  );
}
