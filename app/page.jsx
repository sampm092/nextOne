'use client'

import { useState } from "react";
/* Header is for React to distinguish it with header(HTML)*/
function Header(props) {
  return <h1>{`Cool ${props.title}`}</h1>;
}

function SubTitle(subprops) {
  const a = subprops.title;
  return <h2>{a ? a : "Default Sub-Title"} </h2>;
}

export default function HomePage() {
  const arrayName = ["Asu", "Koke", "Ayama", "Taure"];
  // const state -> [value, updateFunction] = React.useState(initalValue)
  const [likes, setLikes] = useState(0);

  function HandleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      {" "}
      HomePage
      {/* Nesting the Header component */}
      <Header title="Dev Sonethign somthing" />
      <SubTitle />
      <Header title="Second Title" />
      <ul>
        {arrayName.map((insides) => (
          <li key={insides}>{insides}</li>
        ))}
      </ul>
      <button onClick={HandleClick}>Like {likes}</button>
    </div>
  );
}