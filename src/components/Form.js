import { useContext } from "react";
import UserContext from "../context/UserContext";
import "../App.css";
import Header from "./Header";

function Form() {
  const context = useContext(UserContext);
  const { user } = context;
  const [name, updateName] = user;

  let $nameInput = document.querySelector("#name");

  return (
    <section className="text-center App-section">
      <Header />
      <h2 className="title">
        Hola <span className="titleSpan">{name}</span>
      </h2>

      <form className="form">
        <div>
          <input placeholder="Tu nombre" type="text" id="name" />
        </div>
        <div>
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              updateName($nameInput.value);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
export default Form;
