
function Button() {

    const styles = {
        backgroundColor: "hsl(0, 0%, 20%)",
        color: "gray",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(
        <button style={styles}>Click me</button>
    );
}

export default Button