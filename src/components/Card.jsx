import React from 'react';
import { CiBookmark } from "react-icons/ci";

const Card = (props) => {
  return (
    <div className="card">
        <section>
            <div className="header">
                <img src={props.image} alt="logo"/>
                <div className="headerSection">
                    <p>Save</p>
                    <CiBookmark />
                </div>
            </div>
            <div className="name">
                <p>{props.companyName}</p>
                <p>{props.jobPosted}</p>
            </div>
            <p className="prof">{props.jobTitle}</p>
            <div className="workMode">
                <p>{props.jobType}</p>
                <p>{props.level}</p>
            </div>
        </section>
        <section className="section-2">
            <div className="footer">
                <p>${props.minSalary}-{props.maxSalary}/hr</p>
                <p>{props.location}, India</p>
            </div>
            <button>Apply Now</button>
      </section>

    </div>
  );
}

export default Card;
