import React from 'react';
import { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects at web apps. Here are some of my projects.
        </Desc>
        {/* <ToggleButtonGroup>
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'frontend app' ?
            <ToggleButton active value="frontend app" onClick={() => setToggle('frontend app')}>FrontEnd APP'S</ToggleButton>
            :
            <ToggleButton value="frontend app" onClick={() => setToggle('frontend app')}>FrontEnd APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'backend app' ?
            <ToggleButton active value="backend app" onClick={() => setToggle('backend app')}>BackEnd APP'S</ToggleButton>
            :
            <ToggleButton value="backend app" onClick={() => setToggle('backend app')}>BackEnd APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'full stack' ?
            <ToggleButton active value="full stack" onClick={() => setToggle('full stack')}>Full Stack APP'S</ToggleButton>
            :
            <ToggleButton value="full stack" onClick={() => setToggle('full stack')}>Full Stack APP'S</ToggleButton>
          }
        </ToggleButtonGroup> */}
        <CardContainer>
          {toggle === 'all' && projects.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;