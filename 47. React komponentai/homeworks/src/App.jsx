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
              src: 'https://images3.alphacoders.com/128/1289556.jpg',
              info: 'Text'
            },
            {
              src: 'https://w0.peakpx.com/wallpaper/168/617/HD-wallpaper-tv-show-wednesday.jpg',
              info: 'Text'
            },
            {
              src: 'https://www.thedigitalfix.com/wp-content/sites/thedigitalfix/2022/11/Wednesday-ending-explained.jpg',
              info: 'Text'
            },
            {
              src: 'https://bleedingcool.com/wp-content/uploads/2022/09/Wednesday-Addams-vs.-Thing-_-Official-Clip-_-Netflix-0-55-screenshot-1200x900.jpg',
              info: 'Text'
            },
            {
              src: 'https://cdn.flickeringmyth.com/wp-content/uploads/2022/09/Wednesday-Addams-vs.-Thing-_-Official-Clip-_-Netflix-0-20-screenshot.jpg',
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
