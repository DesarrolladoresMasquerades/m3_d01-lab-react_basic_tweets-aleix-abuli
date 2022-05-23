export default function Message(props) {
    return (
        <p className="message">
          {props.tweet.message}
        </p>
    );
}