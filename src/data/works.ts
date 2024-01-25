interface Work {
  [key: string]: string;
  image: string;
  title: string;
  title_ukr: string;
  link: string;
}

const works:Work [] = [
  {
    image: 'work1.png',
    title: 'Site for dog kennel "Iz Vladeniya Akello"',
    title_ukr: 'Сайт для розплідника собак "Iz Vladeniya Akello"',
    link: 'https://freecree.github.io/pedigree/'
  },
  {
    image: 'work2.png',
    title: 'Landing page for Landing Studio',
    title_ukr: 'Лендінг для Landing Studio',
    link: 'https://freecree.github.io/land-site/'
  },
  {
    image: 'work3.png',
    title: 'Interface of CRM',
    title_ukr: 'Інтерфейс CRM системи',
    link: 'https://freecree.github.io/crm/'
  },
  {
    image: 'work4.png',
    title: 'Web system "Hand marking"', 
    title_ukr: 'Веб система "Hand marking"',
    link: 'http://51.20.77.94/'
  },
]

export default works;