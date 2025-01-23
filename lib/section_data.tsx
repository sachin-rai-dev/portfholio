export interface skills {
  name: string;
  icon: string;
}

export interface skill {
  Teck: string;
  skills: skills[];
}

export const SkillSectionData: skill[] = [
  {
    Teck: "frontend",
    skills: [
      { name: "HTML", icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
      { name: "CSS", icon: "https://img.icons8.com/?size=100&id=4d9YPiN04osD&format=png&color=000000" },
      { name: "javascript", icon: "https://img.icons8.com/?size=100&id=YX2eDFImIaWh&format=png&color=000000" },
      { name: "react.js", icon: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000" },
      { name: "next.js", icon: "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000" },
      { name: "react Native", icon: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000" },
      { name: "expo", icon: "https://img.icons8.com/?size=100&id=N9liZ1WtT44z&format=png&color=000000" },
      { name: "tailwindcss", icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" },
      { name: "typescript", icon: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" },
      { name: "redux", icon: "https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000" },
      { name: "shad/cn", icon: "https://th.bing.com/th/id/OIP.pm9Kgu_pE5Qiys5c0oNxiwAAAA?rs=1&pid=ImgDetMain" },
      { name: "clerk auth", icon: "" },
    ],
  },
  {
    Teck: "backend",
    skills: [
      { name: "node.js", icon: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000" },
      { name: "express.js", icon: "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000" },
      { name: "socket.io", icon: "" },
      { name: "mongoose", icon: "https://img.icons8.com/?size=100&id=gKfcEStXI1Hm&format=png&color=000000" },
      { name: "Drizzle ORM", icon: "https://avatars.githubusercontent.com/u/108468352?s=200&v=4" },
      {name:"npm",icon:"https://img.icons8.com/?size=100&id=24895&format=png&color=000000"}
    ],
  },
  {
    Teck: "database",
    skills: [
      { name: "mongodb", icon: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" },
      { name: "firebase", icon: "https://img.icons8.com/?size=100&id=87330&format=png&color=000000" },
      { name: "postgresql", icon: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000" },
    ],
  },
  {
    Teck: "tools",
    skills: [
      { name: "git", icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
      { name: "github", icon: "https://img.icons8.com/?size=100&id=4Z2nCrz5iPY2&format=png&color=000000" },
      { name: "vscode", icon: "https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000" },
      { name: "figma", icon: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" },
      { name: "postman", icon: "https://img.icons8.com/?size=100&id=QEQQKirln6Tf&format=png&color=000000" },
    ],
  },
];
