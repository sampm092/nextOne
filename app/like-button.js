'use client'

import { useState } from "react";

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function HandleClick() {
        setLikes(likes + 1);
    }

    return <button onClick={HandleClick}>Like {likes}</button>;
}