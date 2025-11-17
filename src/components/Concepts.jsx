const boxStyle = {
    maxWidth: "700px",
    margin: "80px auto",
    textAlign: "justify",
    padding: "10px",
    backgroundColor: "#f0ffe2"

};

const Concepts = () => {
    return (
        <div style={boxStyle}>
            <h2 style={{ textAlign: "center" }}>Concepts that I learnt</h2>

            <p>Totally I learnt 3 hooks in React:</p>
            <ul>
                <li>useState</li>
                <li>useEffect</li>
                <li>useNavigate</li>
            </ul>

            <h3 style={{ textAlign: "center" }}>Things I used in this project:</h3>

            <ol>
                <li>Created Vite App using template</li>
                <li>Installed Antd UI library and used Gradient style for Buttons</li>
                <li>Fetched data using axios (API call)</li>
                <li>Used React Router for routing</li>
                <li>Navigation using useNavigate</li>
                <li>Added Page_Not_Found with route path="*"</li>
            </ol>
        </div>
    );
};

export default Concepts;
