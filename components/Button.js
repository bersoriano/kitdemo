export default function Button (props) {
    return (
    <button onClick={props.onClick} className={props.className}>
      {props.label}
      <style jsx>{`
        button {
            background-color: orange;
          padding: 1em;
          border: none;
          text-transform: uppercase;
        }
      `}</style>
    </button>
  );
}
