import Logofolio from "./../media/portfolio/design/logofolio.png";
import Kandinsky from "./../media/portfolio/design/kandinsky.jpg";


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
    tag: ["Графический дизайн", "Логотипы"],
    name: "Логофолио",
    desc: "Коллекция созданных логотипов.",
    img: Logofolio,
    link: "logofolio",
  },
  {
    id: 2,
    tag: ["React"],
    name: "Сервис длся обучения Kandinsky",
    desc: "Первый проект, посвященный разработке личного сайта портфолио-резюме.",
    img: Kandinsky,
    link: "kandinsky",
  }
]

export default initProject;