import React from "react";
import "./Projects.css";
import ProjectContainer from "./Components/ProjectContainer";

import {
  collection,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const Projects = () => {
  //states
  const [data, setData] = useState([]);

  //handlers
  useEffect(() => {
    const fetchData = async () => {
      const unsub = onSnapshot(collection(db, "projects"), (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        console.log(list)
        setData(list);
        console.log(data)
        return;
      });
      return () => {
        unsub();
      };
    };
    fetchData();
  }, []);

  return (
    // TODO:Projects Container
    <div className="projects-outer-container text-center" id="projects">
      {data.map((d) => {
        return (
          <div className="individual-project text-center" key={d["project-name"]}>
            <div className="text-center">
              <div className="project-detail-container">
                <ProjectContainer
                  tag={d["project-tag"]}
                  alt={d["project-name"]}
                  head={d["project-name"]}
                  link={d["project-link"]}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
