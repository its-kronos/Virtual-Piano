function Black_Key({ note, keyboard_key }) {
    return <div className="black_key" piano_key="true" note={note} key={keyboard_key}>{note}<br /><br /><br />keyboard key:{keyboard_key}</div>
}

export default Black_Key