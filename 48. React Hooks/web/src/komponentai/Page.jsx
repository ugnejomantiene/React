import NavBar from "./NavBar";
import Article from "./Article";
import React, { useState } from "react";
import Form from "./Form";

function Page() {
  const [markedCount, setMarkedCount] = useState(0);
  const [articles, setArticles] = useState([{
    id: 1,
    image: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
    title: "Article 1",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
    paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
},{
    id: 7,
    image: "https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=jpg&w=1824",
    title: "Article 2",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
    paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
},{
    id: 7,
    image: "https://media.istockphoto.com/id/1368264124/photo/extreme-close-up-of-thrashing-emerald-ocean-waves.jpg?b=1&s=170667a&w=0&k=20&c=qha_PaU54cu9QCu1UTlORP4-sW0MqLGERkdFKmC06lI=",
    title: "Article 3",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
    paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
},{
    id: 7,
    image: "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
    title: "Article 4",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
    paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
},{
    id: 7,
    image: "https://kinsta.com/wp-content/uploads/2020/09/imag-file-types-1024x512.png",
    title: "Article 5",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
    paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
},{
    id: 7,
    image: "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg",
    title: "Article 6",
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
},{
    id: 7,
    image: "https://media.istockphoto.com/id/1255604833/photo/happy-energetic-smiling-young-african-american-woman-jumping.jpg?s=612x612&w=0&k=20&c=ZsgJwN3LHD9vQPlgpuYdE0PsOnUusZwSzBTt23xesPA=",
    title: "Article 8",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
    paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
},{
    id: 7,
    image: "https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=jpg&w=1824",
    title: "Article 9",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
    paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
},{
    id: 7,
    image: "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg",
    title: "Article 10",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
    paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
},{
    id: 7,
    image: "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg",
    title: "Article 11",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
    paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
},{
    id: 7,
    image: "https://media.istockphoto.com/id/1255604833/photo/happy-energetic-smiling-young-african-american-woman-jumping.jpg?s=612x612&w=0&k=20&c=ZsgJwN3LHD9vQPlgpuYdE0PsOnUusZwSzBTt23xesPA=",
    title: "Article 12",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
    paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
},{
    id: 7,
    image: "https://www.oberlo.com/media/1603969791-image-1.jpg?fit=max&fm=jpg&w=1824",
    title: "Article 13",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
    paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
},{
    id: 7,
    image: "https://media.istockphoto.com/id/1136438219/photo/cheerful-happy-girl-jumping-in-the-air-with-raised-fists-if-she-is-winner-isolated-on-yellow.jpg?s=612x612&w=0&k=20&c=xtyBT-t53ZZk9IF3FxhcweHrGIezon2_um2pHyj0tqM=",
    title: "Article 14",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
    paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
},{
    id: 7,
    image: "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg",
    title: "Article 15",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
    paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
},{
    id: 7,
    image: "https://media.istockphoto.com/id/1136438219/photo/cheerful-happy-girl-jumping-in-the-air-with-raised-fists-if-she-is-winner-isolated-on-yellow.jpg?s=612x612&w=0&k=20&c=xtyBT-t53ZZk9IF3FxhcweHrGIezon2_um2pHyj0tqM=",
    title: "Article 16",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
    paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
},{
    id: 7,
    image: "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg",
    title: "Article 17",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
    paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
},{
    id: 7,
    image: "https://kinsta.com/wp-content/uploads/2020/09/imag-file-types-1024x512.png",
    title: "Article 7",
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
},{
    id: 7,
    image: "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg",
    title: "Article 7",
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
},{
    id: 7,
    image: "https://kinsta.com/wp-content/uploads/2020/09/imag-file-types-1024x512.png",
    title: "Article 7",
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
},{
    id: 7,
    image: "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg",
    title: "Article 7",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
    paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
},{
    id: 7,
    image: "https://kinsta.com/wp-content/uploads/2020/09/imag-file-types-1024x512.png",
    paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    paragraph2: "Sed auctor, magna non bibendum bibendum, velit risus...",
    paragraph3: "In hac habitasse platea dictumst. Sed vitae aliquam quam..."
}]);

  function updateMarkedCount(isMarked) {
    if (isMarked) {
      setMarkedCount(markedCount - 1);
    } else {
      setMarkedCount(markedCount + 1);
    }
  }
  
  const handleAddArticle = (article) => {
    setArticles([...articles, article]);
  }

  return (
    <div className="allPage">
      <NavBar markedCount={markedCount} />
      <Form handleAddArticle={handleAddArticle} />

      <div className="Box">
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
    </div>
  );
}

export default Page;