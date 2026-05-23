import { useState } from "react";

// const artistsData = [
//   {
//     id: 1,
//     name: "Langston Hughes",
//   },
//   {
//     id: 2,
//     name: "Frederick Douglass",
//   },
// ];

export default function AddingItems() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  let nextId = 0;

  return (
    <>
      <h2>Inspiring sculptors:</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          const newArtist = {
            id: nextId++,
            name: name,
          };
          setArtists([...artists, newArtist]);
          setName("");
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
