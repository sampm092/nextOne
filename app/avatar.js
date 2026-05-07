import { getImageURL } from "./utils";

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