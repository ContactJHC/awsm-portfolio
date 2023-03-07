import React from 'react'
// import { portfolio } from '../data/portfolio.js'
import PortfolioItem from './PortfolioItem'
import projetSix from '../assets/P6.JPG'
import projetSept from '../assets/P7.JPG'
import projetOnze from '../assets/P11.JPG'

export default function Portfolio() {
  const portfolio = [
    {
        id: 'pf1',
        title: 'Kasa',
        imgUrl: projetOnze,
        stack: [
            {
                element: 'HTML',
                id: 'st11'
            },
            {
                element : 'CSS',
                id: 'st12'
            },
            {
                element : 'JavaScript',
                id: 'st13'
            },
            {
                element: 'React',
                id: 'st14'
            },
        ],
        link: 'https://contactjhc.github.io/kasaDeux',
    },
    {
        id: 'pf2',
        title: 'Fisheye',
        imgUrl: projetSix,
        stack: [
            {
                element: 'HTML',
                id: 'st21'
            },
            {
                element : 'CSS',
                id: 'st22'
            },
            {
                element : 'JavaScript',
                id: 'st23'
            },
            {
                element: 'Vanilla',
                id: 'st24'
            },
        ],
        link: 'https://contactjhc.github.io/Front-End-Fisheye/',
    },
    {
        id: 'pf3',
        title: 'Les Petits Plats',
        imgUrl: projetSept,
        stack: [
            {
                element: 'HTML',
                id: 'st31'
            },
            {
                element : 'CSS',
                id: 'st32'
            },
            {
                element : 'JavaScript',
                id: 'st33'
            },
            {
                element: 'Vanilla',
                id: 'st34'
            },
        ],
        link: 'https://contactjhc.github.io/P7-Les-Petits-Plats',
    },
]
  return (
    <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='grid grid-cols-& md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {portfolio.map(project => (
              // <img src={projet} alt='test' key={project.id}/>
                <PortfolioItem
                    key= {project.id}
                    imgUrl={project.imgUrl}
                    title={project.title}
                    stack={project.stack}
                    link={project.link}
                />
            ))}
        </div>
    </div>
  )
}
