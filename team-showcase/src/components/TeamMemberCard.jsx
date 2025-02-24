import React from "react"

const TeamMemberCard = ({data}) => {
    console.log(data)
    return (
        <div>
            {
                data.length > 0 ? (
                    data.map((el,i) => (
                        <div key={i}>
                            <h1>Team Member's Name: {el.name}</h1>
                            <h1>Job Title: {el.title}</h1>
                        </div>
                    ))
                ):(
                    <p>Loading...</p>
                )
            }
        </div>
    )
}

export default TeamMemberCard