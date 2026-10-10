
import { useState } from "react";
import RoleMenu from "./components/RoleMenu";
import RoleInfo from "./components/RoleInfo";
import "./App.css";

const roleData = {
  Frontend: {
    skills: ["HTML", "CSS", "JS/TS", "GIT", "REACT", "VUE", "ANGULAR"],
    duration: "6 oy",
    type: "Online",
  },
  Backend: {
    skills: ["Node.js", "Express", "MySQL", "API"],
    duration: "8 oy",
    type: "Online",
  },
  Menejer: {
    skills: ["Boshqaruv", "Rejalashtirish", "Muloqot"],
    duration: "4 oy",
    type: "Offline",
  },
  Tester: {
    skills: ["Testing", "Postman", "SQL"],
    duration: "3 oy",
    type: "Online",
  },
};

export default function App() {
  const [selectedRole, setSelectedRole] = useState("Frontend");

  return <>
    <RoleMenu selectedRole={selectedRole} onSelect={setSelectedRole}  />
    <RoleInfo info={roleData[selectedRole]} />
    
  </>
}
