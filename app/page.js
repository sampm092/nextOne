'use client'

import LikeButton from "./like-button";
import Avatar from "./avatar";
import { AvatarLocal } from "./avatar";
import { useState } from "react";
import { sculptureList } from "./data";

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
  const [index, setIndex] = useState(0);

  function nextButton() {
    setIndex(index + 1);
  }

  let sculpt = sculptureList[index];

  return (
    <main>
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
        <LikeButton />
      </div>
      <div>
        <Avatar
          size={100}
          person={{
            name: "Katsuko Saruhashi",
            imageID: "YfeOqp2",
          }}
        />
        <AvatarLocal size={100} person={"gibran"} />
      </div>
      <div>
        <button onClick={nextButton}>Next</button>
        <h2>
          <i>{sculpt.name}</i>
          by {sculpt.artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
        <img src={sculpt.url} alt={sculpt.alt} />
        <p>{sculpt.description}</p>
      </div>
    </main>
  );
}
