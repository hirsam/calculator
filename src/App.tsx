import Calculator from "./components/Calculator";

function App() {

  return (
    <div className="App">
    <Calculator/>
    </div>
  );
}

export default App;

/*
    so... what to say? Not bad, but I still have smth to say)))
    Firstly, I think it'd be better if you declare functions right in the files where they should be used.
    I mean the logic of button creations or string building can be placed in "Keypad.tsx".
    This will reduce the number of props u use and make your code clearer.
    If you need the result of calculations in other components, set them as props.

    Secondly, code style. Use at least standard one. What is more, there is a great plugin for IDEA -  Prettier.
    Install it with the command `npm install --save-dev --save-exact prettier` and turn on the plugin

    Thirdly, useless imports, delete them, please

    What is more, do NOT shorten the names of variables/functions as Indian guys do))
    It's hard to clarify what "ops" is until u see the array

    Another thing, there is an opportunity to declare buttons with numbers using functional programming in js,
     ask uncle Google for that
*/
