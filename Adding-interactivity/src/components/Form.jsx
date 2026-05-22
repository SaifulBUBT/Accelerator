import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://react.dev/images/docs/scientists/Sd1AgUOm.jpg",
    },
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
      artwork: {
        ...person.artwork,
        [e.target.name]: e.target.value,
      },
    });
  }

  // function handleTitleChange(e) {
  //   setPerson({
  //     ...person,
  //     artwork: {
  //       ...person.artwork,
  //       title: e.target.value,
  //     },
  //   });
  // }

  // function handleCityChange(e) {
  //   setPerson({
  //     ...person,
  //     artwork: {
  //       ...person.artwork,
  //       city: e.target.value,
  //     },
  //   });
  // }

  // function handleImageChange(e) {
  //   setPerson({
  //     ...person,
  //     artwork: {
  //       ...person.artwork,
  //       image: e.target.value,
  //     },
  //   });
  // }

  return (
    <>
      <label>
        Name:
        <input name="name" value={person.name} onChange={handleChange} />
      </label>
      <label>
        Title:
        <input
          name="title"
          value={person.artwork.title}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          name="city"
          value={person.artwork.city}
          onChange={handleChange}
        />
      </label>
      <label>
        Image:
        <input
          name="image"
          value={person.artwork.image}
          onChange={handleChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}
