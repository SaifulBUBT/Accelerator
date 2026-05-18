function Button({ onSmash, children }) {
  return (
    <button
      className="btn"
      onClick={(e) => {
        e.stopPropagation();
        onSmash();
      }}
    >
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayMovie() {
    alert(`Playing ${movieName}`);
  }
  return <Button onSmash={handlePlayMovie}>Play {movieName}</Button>;
}

function UploadButton() {
  return <Button onSmash={() => alert("Uploading")}>Uplaod Image</Button>;
}

function PropagationButton() {
  return (
    <div onClick={() => alert("Outer Div Clicked")}>
      <Button onSmash={() => alert("Button Clicked")}>Click Me</Button>
      <Button onSmash={() => alert("Run button clicked")}>Run</Button>
    </div>
  );
}

export default function Toolbar() {
  return (
    <>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
      <PropagationButton />
    </>
  );
}
