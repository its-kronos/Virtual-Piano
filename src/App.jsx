import Black_Key from "./components/Black_Key.jsx"
import White_Key from "./components/White_Key.jsx"


function App() {
  return <div className="Parent_Div">
    <White_Key note="C" keyboard_key="Q"></White_Key>
    <Black_Key note="C#" keyboard_key="W"></Black_Key>
    <White_Key note="D" keyboard_key="E"></White_Key>
    <Black_Key note="D#" keyboard_key="R"></Black_Key>
    <White_Key note="E" keyboard_key="T"></White_Key>
    <White_Key note="F" keyboard_key="Y"></White_Key>
    <Black_Key note="F#" keyboard_key="U"></Black_Key>
    <White_Key note="G" keyboard_key="I"></White_Key>
    <Black_Key note="G#" keyboard_key="O"></Black_Key>
    <White_Key note="A" keyboard_key="P"></White_Key>
    <Black_Key note="A#" keyboard_key="A"></Black_Key>
    <White_Key note="B" keyboard_key="S"></White_Key>
    <White_Key note="C" keyboard_key="D"></White_Key>
  </div>
}

export default App
