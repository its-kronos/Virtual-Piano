function white_key({ note, keyboard_key }) {
    return <div className="white_key" piano_key="true" note={note} key={keyboard_key}>{note}<br /><br /><br />keyboard key:{keyboard_key}</div>
}

export default white_key