import ImageComponent from './ImageComponent';
import NameForm from './NameForm';
import './App.css'

function App() {
  const imageUrls = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/96fe59109129681.5fcd236c76f08.png",
    "https://www.stellendesign.com/wp-content/uploads/2020/01/2019_Logos-03.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR69CI8OZ_yrvVk6A2-ylrzshd9d_r5zvxrQg&s",
    "https://cdn.dribbble.com/userupload/13198757/file/original-d8c1a37afb4fe9b790bb466677548f16.png?format=webp&resize=400x300&vertical=center",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8w_2-PQODYot7gk0UabMsX1YzjAGdmC10MA&s"
  ];

  return (
    <div>
      <NameForm />
      <div className='gap' style={{ display: 'flex'}}>
        {imageUrls.map((url, index) => (
          <ImageComponent key={index} imageUrl={url} />
        ))}
      </div>
    </div>
  );
}

export default App;



