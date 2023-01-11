import Card from "./card";

const Cards = (props) => {
  return (
    <>
      
        {
          props.data.map((item, index) => {
            return (
              <Card
                data={item}
                key={index}
              />
            )
          })
        }
    
    </>
  );
}

export default Cards;