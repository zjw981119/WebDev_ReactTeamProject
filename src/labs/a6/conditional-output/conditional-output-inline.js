const ConditionalOutputInline = () => {
    const loggedIn = false;
    return (
        <div>
            { loggedIn && <h2>Welcome Inline</h2>}
            {!loggedIn && <h2>Please login Inline</h2>}
        </div>
    );
};
export default ConditionalOutputInline;
