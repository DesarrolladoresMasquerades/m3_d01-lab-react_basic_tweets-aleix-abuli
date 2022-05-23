export default function User(props) {
    return(
        <span className="user">
            <span className="name">{props.tweet.name}</span>
            <span className="handle">@{props.tweet.handle}</span>
        </span>
    );
};
