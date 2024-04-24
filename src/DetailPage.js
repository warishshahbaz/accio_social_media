// components/DetailPage.js
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./store/slice";
import Card from "./Card";
import natureImg from "./images/nature.jpg";

const DetailPage = () => {
  const [toggleBtn, setToggleBtn] = useState("detail");
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.posts.loading);
  const post = useSelector((state) =>
    state.posts.items.find((p) => p.id === Number(id))
  );
  const posts = useSelector((state) => state.posts.items);

  const updateData = useMemo(() => {
    return posts?.filter((val) => val?.id !== id);
  }, [posts, id]);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  return (
    <div className="conatiner">
      <h1>Post Number {id}</h1>
      {post && (
        <div className="detail_container">
          <div>
            <Card
              imageSrc={natureImg}
              title={post.title}
              description={post.body}
            />
          </div>

          <div className="detailPage">
            <div className="btn_box">
              <button
                style={{
                  backgroundColor: toggleBtn === "detail" ? "#f05a22" : "white",
                }}
                onClick={() => setToggleBtn("detail")}
              >
                Detail
              </button>
              <button
                style={{
                  backgroundColor: toggleBtn === "user" ? "#f05a22" : "white",
                }}
                onClick={() => setToggleBtn("user")}
              >
                User
              </button>
            </div>
            <div className="dscr_detail">
              {toggleBtn === "detail" ? (
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              ) : (
                <p>Post was posted By {id}</p>
              )}
            </div>
          </div>
        </div>
      )}

      <h2 className="morePost">More Post</h2>
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

export default DetailPage;
