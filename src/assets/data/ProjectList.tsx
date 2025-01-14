interface ProjectInt {
  id: number,
  tag: string,
  name: string,
  desc: string,
  img: string,
  link?: string,
  git: string
}

const initProject: Array<ProjectInt> = [
  {
    id: 1,
    tag: "Пет проект",
    name: "Личный сайт",
    desc: "test",
    img: "/src/assets/media/portfolio/Portfolio_record.webp",
    link: "https://insaneluv.ru/",
    git: "https://github.com/insaneluvvv/insaneluv.ru"
  },
  {
    id: 2,
    tag: "Пет проект",
    name: "Личный сайт",
    desc: "test",
    img: "/src/assets/media/portfolio/Portfolio_record.webp",
    link: "https://insaneluv.ru/",
    git: "https://github.com/insaneluvvv/insaneluv.ru"
  }
]

export default initProject;