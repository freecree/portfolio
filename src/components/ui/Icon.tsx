import Icons from '../../assets/icons.svg';

interface IconProps {
  name: string,
  width: number,
  height: number,
  color?: string,
  className?: string
}

function Icon({name, width, height, color = '#1C0425', className} : IconProps ) {
  return ( 
    <svg className={className} width={width} height={height} fill={color}>
      <use href={Icons + `#${name}`} />
      <linearGradient id="mygradient" x1="80.86%" x2="19.14%" y1="0%" y2="100%">
        <stop offset="5.02%" stopColor="#3B78ED"/>
        <stop offset="94.03%" stopColor="#FC33E8"/>
      </linearGradient>
   </svg>
   );
}

export default Icon;