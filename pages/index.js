function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1>TWINS13's website</h1>
      <h2 style={{ marginBottom: '10rem' }}>click the buttons below</h2>
      <button
        style={{
          padding: '1rem',
          fontSize: '2rem',
          background: '#e01090',
          color: '#e0cb10'
        }}
        onClick={() => alert('Hello there')}
      >
        Welcome
      </button>
      <button
        style={{
          padding: '1rem',
          fontSize: '2rem',
          background: '#8212de',
          color: '#7fd615',
          marginTop: '2rem'
        }}
        onClick={() => {
          let name = prompt("What's your name?");
          if (name) {
            alert('Nice to meet you, ' + name + '!');
          } else {
            alert('Nice to meet you, stranger');
          }
        }}
      >
        {"What's your name?"}
      </button>
    </div>
  );
}