import BorderWord from "./BorderWord";

function Hello ({to, color, size, element}) {
    return (
        <h1 style={ {
            color: color,
            fontSize: size
        } }>
            {element} <BorderWord word={to} />
        !</h1>
    );
}

export default Hello;