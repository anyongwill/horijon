// src/components/sections/Team/Team.jsx
import React from 'react';
import './Team.scss';
import ProfileCard from '../../ProfileCard/ProfileCard';

const Team = () => {
  const teamMembers = [
    {
      image: "./Images/Team Headshot/Will4.jpg",
      title: "Will Kwon",
      subtitle: "Leader",
      description: "Entrepreneur with experience across fashion, textile, and journalism. McKinsey Associate Partner in Amsterdam, San Francisco, and Seoul. CFA (Chartered Financial Analyst) Charterholder. World Economic Forum's GSC Seoul hub leader. MPA from Harvard Kennedy School. BA in Applied Statistics and International Studies from Yonsei University."
    },
    {
      image: "./Images/Team Headshot/Jaeo.jpg",
      title: "Jaeo Shin",
      subtitle: "Engineer",
      description: "Software Engineer and Back-end Developer. Entrepreneur experience in fashion e-commerce and logistics. Ex-engineer at Hyundai Heavy Industry. MS in Computer Science and BS in Mechanical Engineering from Busan National University."
    },
    {
      image: "./Images/Team Headshot/Kelvin 2.jpg",
      title: "Kelvin Hu",
      subtitle: "Designer",
      description: "Designer and Architect. Entrepreneur experience in 3D/Metaverse. Work experience in fashion and real estate. Harvard Graduate School of Design. BA in Architecture Pratt Institute with minor in Museum and Gallery Practices."
    },
    {
      image: "./Images/Team Headshot/Gabby.jpg",
      title: "Gabby Vukomanovic",
      subtitle: "Engineer",
      description: "Front-end application developer. Computer Science major at Brandeis University (Dean's list, multiple awards). Led development of multiple 3D/Gaming projects"
    },
    {
      image: "./Images/Team Headshot/Delanie.png",
      title: "Delanie Pon",
      subtitle: "Designer",
      description: "Illustrator and Graphic Designer. Animation major at Massachusetts College of Art and Design (Honor student, multiple awards). Leader of MassArt Game Design Club."
    },
    {
      image: "./Images/Team Headshot/Masaki.jpg", 
      title: "Masaki Shiraishi",
      subtitle: "Analyst",
      description: "Marketer and Researcher. Harvard Graduate School of Education. Publication reviewer at University of Minnesota. BA in Linguistics from University of Minnesota (High distinction)"
    },
  ];

  return (
    <section id="team" className="team">
      <h2>Team horijon</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <ProfileCard
            key={index}
            image={member.image}
            title={member.title}
            subtitle={member.subtitle}
            description={member.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;