import NavBar from "./NavBar";
import Article from "./Article";
import React, { useState } from "react";



function Page() {
    const [markedCount, setMarkedCount] = useState(0);
  
    function updateMarkedCount(isMarked) {
      if (isMarked) {
        setMarkedCount(markedCount - 1);
      } else {
        setMarkedCount(markedCount + 1);
      }
    }
  
    return (
      <div>
        <NavBar markedCount={markedCount} />
        {articles.map(article => (
          <Article
            key={article.id}
            image={article.image}
            title={article.title}
            paragraph1={article.paragraph1}
            paragraph2={article.paragraph2}
            paragraph3={article.paragraph3}
            updateMarkedCount={updateMarkedCount}
          />
        ))}
      </div>
    );
  }

  const articles = [
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
      title: "Article 1",
      paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
      paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
    },{
        id: 7,
        image: "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg",
        title: "Article 7",
        paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
        paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
      }
];
 export default Page;