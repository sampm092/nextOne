export function getImageURL(person, size = 's'){ // s as a default value if no value attached
    return(
        'https://react.dev/images/docs/scientists/' + person.imageID + size + '.jpg'
    );
}