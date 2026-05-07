import { getImageLocal, getImageURL } from "./utils";

export default function Avatar({ person, size }) {
    return (
        <img 
        className="avatar"
        src={getImageURL(person)}
        alt={person.name}
        width={size}
        height={size}
        />
    );
}

export function AvatarLocal({ person, size }) {
    return (
        <img 
        className="avatar"
        src={getImageLocal(person)}
        alt={person.name}
        width={size}
        height={size}
        />
    );
}