import InsaneLuvBanner from "./../media/portfolio/InsaneLuv_Banner.png";

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
    img: InsaneLuvBanner,
    link: "logofolio",
  },
  {
    id: 2,
    tag: ["React"],
    name: "Сервис длся обучения Kandinsky",
    desc: "Первый проект, посвященный разработке личного сайта портфолио-резюме.",
    img: InsaneLuvBanner,
    link: "kandinsky",
  }
]

export default initProject;