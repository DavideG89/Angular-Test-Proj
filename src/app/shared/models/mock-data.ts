import { Project } from "src/app/models/Projects";

export const PROJECTS: Project[] = [
  {
    id: 1,
    code: 'NHusYJl',
    name: 'Progetto Alpha',
    description: 'Lorem ipsum dolor sit amet.',
    start: new Date(2021, 1, 30),
    end: new Date(2021, 3, 15),
    priority: 'medium',
    done: true,
    tasks: []
  },
  {
    id: 2,
    code: 'SJieYKL',
    name: 'Progetto Beta',
    description: 'Lorem ipsum dolor sit amet.',
    start: new Date(2019, 3, 30),
    end: new Date(2019, 6, 15),
    priority: 'low',
    done: true,
    tasks: []
  },
  {
    id: 3,
    code: 'POjeGBs',
    name: 'Progetto Gamma',
    description: 'Lorem ipsum dolor sit amet.',
    start: new Date(2019, 8, 15),

    priority: 'low',
    done: false,
    tasks: []
  }
]
