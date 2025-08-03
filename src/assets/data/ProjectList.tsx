import PersonalSite from "./../media/portfolio/PersonalSite_vieo.webp";
import InsaneLuvBanner from "./../media/portfolio/InsaneLuv_Banner.png";

type ProjectInt = {
  id: number,
  type: string,
  tag: string[],
  name: string,
  desc: string,
  img: string,
  link1name?: string,
  link1?: string,
  link2name: string,
  link2: string
}

const initProject: Array<ProjectInt> = [
  {
    id: 1,
    type: "Дизайн",
    tag: ["Графический дизайн", "Веб дизайн"],
    name: "Insane Luv",
    desc: "Личный проект, в ходе которого я создавал дизайны на заказ. Вел социальные сети для продвижения.",
    img: InsaneLuvBanner,
    link1name: "Discord сервер",
    link1: "https://discord.gg/RTwRUZdxw3",
    link2name: "Telegram канал",
    link2: "https://t.me/InsaneLuvDSGN"
  },
  {
    id: 2,
    type: "FrontEnd",
    tag: ["React", "TypeScript", "Styled Components", "React Router Dom", "firebase"],
    name: "Личный сайт",
    desc: "Первый проект, посвященный разработке личного сайта портфолио-резюме.",
    img: PersonalSite,
    link1name: "Рабочий прототип",
    link1: "https://insaneluv.ru/",
    link2name: "Git",
    link2: "https://github.com/insaneluvvv/insaneluv.ru"
  }
]

export default initProject;