import React from "react";
import "./Review.css";
import ReviewContainer from "./Components/ReviewContainer";
import img1 from "../assets/reviews/1.png";
import img2 from "../assets/reviews/2.png";
import img3 from "../assets/reviews/3.png";
import img4 from "../assets/reviews/4.png";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const Review = () => {
  const imageList = [img1, img2, img3, img4];
  //states
  const [data, setData] = useState([]);

  //handlers
  useEffect(() => {
    const fetchData = async () => {
      const unsub = onSnapshot(collection(db, "reviews"), (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        console.log(list);
        setData(list);
        console.log(data);
        return;
      });
      return () => {
        unsub();
      };
    };
    fetchData();
  }, []);

  return (
    <div
      id="carousel reviews"
      class="carousel slide"
      data-bs-ride="carousel"
      data-pause="hover"
    >
      {data.map((d) => {
        return (
          <div class="carousel-inner">
            <div class="carousel-item active text-center">
              <ReviewContainer
                img={imageList[Math.floor(Math.random() * imageList.length)]}
                reviewer={d["reviewer"]}
                review={d["review"]}
                key={d["reviewer"]}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
