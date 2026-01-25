import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

/**
 * TeamCard
 * props: { name, image, linkedin, instagram }
 */
const TeamCard = ({ name, image, linkedin, instagram }) => {
  return (
    <article className="team-card">
      <div className="card-media">
        <img src={image} alt={name} loading="lazy" />
      </div>

      <div className="card-body">
        <div className="card-name">{name}</div>

        <div className="card-socials">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer" title={`${name} on LinkedIn`}>
              <FaLinkedin />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noreferrer" title={`${name} on Instagram`}>
              <FaInstagram />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default TeamCard;
