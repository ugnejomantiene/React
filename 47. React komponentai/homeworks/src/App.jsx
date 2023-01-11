import "./app.css";
import Header from "./komponentai/header";
import Info from "./komponentai/info";
import Card from "./komponentai/card";
import Other from "./komponentai/other";



function App() {
  return (
    <>
    <Header></Header>
    <main id="main">
      <section id="info">
      <Info></Info>
      </section>
      <section id="box">
        <Card/>
        <Card/>
        <Card/>
        <Other />
        <Other />
        <Other />
        
     
      
      </section>   
    </main>
    

    </>
  );
}

export default App;
