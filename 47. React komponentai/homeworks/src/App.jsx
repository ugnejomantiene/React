import "./app.css";
import Header from "./komponentai/header";
import Info from "./komponentai/info";
import Cards from "./komponentai/cards";



function App() {
  return (
    <>
    <Header></Header>
    <main id="main">
      <section id="info">
      <Info></Info>
      </section>
      <section id="box">
        <Cards
        data={
          [
            {
              src: 'https://images8.alphacoders.com/127/1274390.jpg',
              info: 'Text'
            },
            {
              src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNHzkJmCCimk3ufC9CkdnSjDbsd2YeZbfpVhGnQYfH301R7VOGNh_QvcdICsoZbYcGdg&usqp=CAU',
              info: 'Text'
            },
            {
              src: 'https://w0.peakpx.com/wallpaper/168/617/HD-wallpaper-tv-show-wednesday.jpg',
              info: 'Text'
            },
            {
              src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPOJGG3rSzBzEgoPN-IVlCpkcGlJQdpaxGDG5dUo-zoUzeAYyExVzKBngiYdBsort-6k&usqp=CAU',
              info: 'Text'
            },
            {
              src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGctsk_HUD6rZNHQBeVsxvU_xxbicXggWaB-2s0hR2yCbTwOA2UuoskPkDelMaBj4C80&usqp=CAU',
              info: 'Text'
            },
            {
              src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83RYD8tTkSKsmnSJYKlTlqXEt09GtTZVlFGlymbxbrehDM_KhnGArJBYlX34H5EBoD1k&usqp=CAU',
              info: 'Text'
            }
          ]
        }
        />
      
        
     
      
      </section>   
    </main>
    

    </>
  );
}

export default App;
