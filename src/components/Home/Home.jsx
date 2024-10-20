import Main from "../Main/Main";
import ImageRow from "../ImageRow/ImageRow";
import Work from "../Work/Work";

function Home() {
  return (
    <>
      <Main />
      <ImageRow
        leftImage="model-girl.jpg"
        rightImage="model-boy.jpg" 
      />
      <ImageRow
        leftImage="phone.jpg"
        rightImage="computer.jpg" 
      />
      <ImageRow
        leftImage="books.jfif"
        rightImage="coffee.jpg" 
      />
      <Work />
    </>
  );
}

export default Home;