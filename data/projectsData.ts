interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Free ADHD Test',
    description: `ADHD-Test.app is a free online self-assessment tool designed to help 
    adults evaluate potential symptoms of Attention-Deficit/Hyperactivity Disorder (ADHD) 
    using the WHO-endorsed ASRS v1.1 questionnaire.`,
    imgSrc: '/static/images/adhdtest.png',
    href: 'https://adhd-test.app',
  },
]

export default projectsData
