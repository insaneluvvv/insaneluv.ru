import PersonalSite from "./../media/portfolio/development/personalsite.png";

type ProjectInt = {
  id: number,
  tag: string[],
  name: string,
  desc: string,
  img: string,
  link: string,
}

const initProject: Array<ProjectInt> = [
  {
    id: 1,
    tag: ["React", "TypeScript", "Styled Components", "React Router Dom", "firebase"],
    name: "Личный сайт",
    desc: "Первый проект, посвященный разработке личного сайта портфолио-резюме.",
    img: PersonalSite,
    link: "personal-site",
  }
]

export default initProject;