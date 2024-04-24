import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "./store/slice";
import Card from "./Card";
import natureImg from "./images/nature.jpg";

const HomePage = () => {
  const [inputChange, setInputChange] = useState("");
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  const loading = useSelector((state) => state.posts.loading);

  const updateData = useMemo(() => {
    let res = [];
    if (inputChange !== "") {
      res = posts.filter((post) =>
        post.title.toLowerCase().includes(inputChange.toLocaleLowerCase())
      );
    } else {
      res = posts;
    }
    return res;
  }, [inputChange, posts]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  console.log(posts, "--------------------------");
  return (
    <div className="conatiner">
      <h2>Social Media For Travellers</h2>
      <div className="filter_change">
        <input
          placeholder="Search..."
          value={inputChange}
          onChange={(e) => setInputChange(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card_container">
          {updateData?.map((post) => (
            <Card
              key={post.id}
              title={post?.title ?? ""}
              description={post.body ?? ""}
              id={post.id ?? ""}
              imageSrc={natureImg}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
