import PersonalSite from "./../media/portfolio/PersonalSite_vieo.webp";

type ProjectInt = {
  id: number,
  type: string,
  tag: string[],
  name: string,
  desc: string,
  img: string,
  link?: string,
  git: string
}

const initProject: Array<ProjectInt> = [
  {
    id: 1,
    type: "Пет проект",
    tag: ["React", "TypeScript", "Styled Components", "React Router Dom", "firebase"],
    name: "Личный сайт",
    desc: "Первый проект, посвященный разработке личного сайта портфолио-резюме.",
    img: PersonalSite,
    link: "https://insaneluv.ru/",
    git: "https://github.com/insaneluvvv/insaneluv.ru"
  },
  {
    id: 2,
    type: "Пет проект",
    tag: ["React", "TypeScript", "Styled Components", "React Router Dom", "firebase"],
    name: "Личный сайт",
    desc: "Первый проект, посвященный разработке личного сайта портфолио-резюме.",
    img: PersonalSite,
    link: "https://insaneluv.ru/",
    git: "https://github.com/insaneluvvv/insaneluv.ru"
  },
  {
    id: 3,
    type: "Пет проект",
    tag: ["React", "TypeScript", "Styled Components", "React Router Dom", "firebase"],
    name: "Личный сайт",
    desc: "Первый проект, посвященный разработке личного сайта портфолио-резюме.",
    img: PersonalSite,
    link: "https://insaneluv.ru/",
    git: "https://github.com/insaneluvvv/insaneluv.ru"
  },
  
]

export default initProject;