import './Description.css';

function Description(props) {
    
    console.log("props: ", props);
    const description = props.text;
    console.log("description: ", description);
    const descriptionLength = description.length;
    const descriptionLimit = 180;
    let descriptionText = description;
    if (descriptionLength > descriptionLimit) {
        descriptionText = description.slice(0, descriptionLimit) + '...';
    }


    return (
        <div className="description-template">
            {/* <h2>{props.title}</h2> */}
            <p>{descriptionText}</p>
        </div>
    );
}

export default Description;