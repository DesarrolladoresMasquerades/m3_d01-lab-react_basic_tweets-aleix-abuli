export default function ProfileImage(props) {
    console.log('PROFILE PIC', props)
    return(
        <img
            src={props.image}
            className="profile"
            alt="profile"
        />
    );
}

