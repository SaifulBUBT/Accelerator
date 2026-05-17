export default function Button() {
  function handleClick() {
    alert("Button was clicked!");
  }

  return (
    <button className="btn" onClick={handleClick}>
      Click me
    </button>
  );
}
