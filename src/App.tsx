import { Button } from "@cristianps1988/ds-template";
import "@cristianps1988/ds-template/src/Button/button.css";

function App() {
  const clicked = () => {
    console.log("Soy un botón");
  };

  return (
    <div className="container">
      <h1 className="title">Componente creado con Storybook</h1>
      <Button children="Soy Primary" color="primary" onClick={clicked} />
      <Button children="Soy Secondary" color="secondary" onClick={clicked} />
      <div className="sizes">
        <Button children="Soy SM" color="primary" size="sm" onClick={clicked} />
        <Button children="Soy MD" color="primary" size="md" onClick={clicked} />
        <Button children="Soy LG" color="primary" size="lg" onClick={clicked} />
      </div>
    </div>
  );
}

export default App;
