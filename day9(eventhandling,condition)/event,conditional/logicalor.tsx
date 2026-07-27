function OR() {
  const name = "";

  return (
    <div style={{margin:"20px"}}>
        <hr />
    <p>logical or</p>
    <h1>{name || "Guest"}</h1>
    {name && <h2>welcome</h2>}
    {!name && <h2>Please enter your name</h2>}
    <hr />
    </div>

  );
}

export default OR;