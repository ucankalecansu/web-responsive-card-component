import React from "react";
import "./card.scss";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import cardImg from "../assets/logo192.png";

const Projects = () => {
  const cards = [
    {
      id: 2,
      image: cardImg,
      title: "Card-1 Title",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      githubLink: "",
      youtube: "",
      liveLink: "",
    },
    {
      id: 3,
      image: cardImg,
      title: "Card-2 Title",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      githubLink: "",
      liveLink: "",
    },
    {
      id: 4,
      image: cardImg,
      title: "Card-3 Title",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      githubLink: "",
      liveLink: "",
    },
  ];
  return (
    <section id="cards" className="cards section container">
      <div className="cardsContainer grid">
        {cards.map((item) => {
          return (
            <div key={item.id} className="singleCard">
              <div className="externalLinks flex">
                <div className="youtubeIcon">
                  <a href={item.youtube} terget="_blank">
                    <AiFillYoutube className="icon" />
                  </a>
                </div>
                <div className="githubIcon">
                  <a href={item.githubLink} terget="_blank">
                    <AiFillGithub className="icon" />
                  </a>
                </div>
              </div>

              <div className="imgDiv">
                <a href={item.liveLink} target="_blank">
                  <img src={item.image} alt={item.title} />
                </a>
              </div>

              <div className="cardTitle">
                <h3>{item.title}</h3>
              </div>

              <div className="desc">{item.desc}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
