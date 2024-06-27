import React, { useEffect, useState } from "react";
import { getFakeImages } from "./services/fakerService";
import { FakeImage } from "./models/FakeData";

const FakeImageDisplay: React.FC = () => {
  const [images, setImages] = useState<FakeImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFakeImages();
        result.data.map((v: FakeImage) => {
          console.log(v.url);
        });
        setImages(result.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Fake Images</h1>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <h2>{image.title}</h2>
            <img src={image.url.replace("any", "people")} alt={image.title} />
            <p>{image.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FakeImageDisplay;
