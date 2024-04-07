// rather than passing a string value we passed a variable in curly braces
// {styles.App} , this App is the actual class name that is difined in app.module.css
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
    </div>
  );
}

export default App;
