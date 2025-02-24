import React from "react";
import './TeamMemberCard.css';

const TeamMemberCard = ({ data }) => {
    return (
        <div className="team-container">
            {data.length > 0 ? (
                data.map((el, i) => (
                    <div key={i} className="team-member">
                        <h2 className="member-name">{el.name}</h2>
                        <p className="member-title">{el.title}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default TeamMemberCard;
