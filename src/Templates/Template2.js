import { Container, Paper } from "@mui/material";
import React from "react";
import "../Styles/Template2.css";
import TemplateHeader from "../Component/TemplateHeader";
import TemplateHeading from "../Component/TemplateHeading";
import { data } from "../Data/data";
import TemplateOneExperienceComponent from "../Component/TemplateOneExperienceComponent";
import TemplateEducationComponent from "../Component/TemplateEducationComponent";
import TemplateKeySkillComponent from "../Component/TemplateKeySkillComponent";

const Template2 = (props) => {
  // console.log(
  //   props.personalinfo,
  //   props.workexperience,
  //   props.educationinfo,
  //   props.skills
  // );
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : data.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : data.work_experience;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : data.education_details;
  const skills = props.skills ? props.skills : data.key_skills;

  return (
    <Paper
      sx={{
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "550px",
        },
        height: {
          xs: "500px",
          sm: "550px",
          md: "600px",
          lg: "650px",
          xl: "700px",
        },
      }}
      id={`${props.index}report`}
      elevation={3}>
      <TemplateHeader
        primaryColor={"white"}
        secondaryColor={"white"}
        bgColor={"Gray"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        <TemplateHeading color={"Gray"} title={"Professional Experience"} />
        <ul style={{ marginBottom: 10 }}>
          {workexperience.map((experience, index) => {
            return (
              <TemplateOneExperienceComponent
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        <TemplateHeading color={"Gray"} title={"Education"} />
        <TemplateEducationComponent education={educationinfo} />
        <TemplateHeading color={"Gray"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => {
            return <TemplateKeySkillComponent key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template2;