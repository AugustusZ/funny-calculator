import React , {useState} from 'react';
import './index.css';

/** 
 * 0
 * 1 2 3 4 5
 * 6 7
 * 8 9 10 11 12
 * 13
 * 14
 * 
 */
const Digit: React.FC = () => {
  const [digitState, setDigitState] = useState<{[index:number]: boolean}>({});
  const onClick = (event: any) => {
    const index = event.target.dataset['stroke'];
    setDigitState((prevDigitState) => ({...prevDigitState, [index]: !prevDigitState[index] }));
  }

  return (
    <div className="digit">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283 431">
        <g fill="#1B2124" fillRule="evenodd" >
          <path className={`stroke-0 ${digitState[0] ?  'on': ''}`} data-stroke="0" onClick={onClick} d="M242.479 0l12.805 13.045L241.575 26h-80.117l-13.834-14h-8.609l-14.811 14H44.086L31.284 13.045 45.002 0z" />
          <path className={`stroke-1 ${digitState[1] ?  'on': ''}`} data-stroke="1" onClick={onClick} d="M26.109 18l12.54 13.184-5.687 162.589L19.497 207 6.962 193.774l5.687-162.59z" />
          <path className={`stroke-2 ${digitState[2] ?  'on': ''}`} data-stroke="2" onClick={onClick} d="M61.047 33l56.568 113.507L116.024 192h-7.08L44.572 61.987 45.586 33z" />
          <path className={`stroke-3 ${digitState[3] ?  'on': ''}`} data-stroke="3" onClick={onClick} d="M142.109 18l12.54 13.184-5.687 162.589L135.497 207l-12.535-13.226 5.687-162.59z" />
          <path className={`stroke-4 ${digitState[4] ?  'on': ''}`} data-stroke="4" onClick={onClick} d="M237.586 33l-1.014 28.987L163.103 192h-7.079l1.591-45.493L222.124 33z" />
          <path className={`stroke-5 ${digitState[5] ?  'on': ''}`} data-stroke="5" onClick={onClick} d="M258.109 18l12.54 13.184-5.687 162.589L251.497 207l-12.535-13.226 5.687-162.59z" />
          <path className={`stroke-6 ${digitState[6] ?  'on': ''}`} data-stroke="6" onClick={onClick} d="M117.633 198l12.708 13.5-13.652 13.5H37.05l-12.709-13.5L37.994 198z" />
          <path className={`stroke-7 ${digitState[7] ?  'on': ''}`} data-stroke="7" onClick={onClick} d="M233.633 198l12.708 13.5-13.652 13.5H153.05l-12.709-13.5 13.653-13.5z" />
          <path className={`stroke-8 ${digitState[8] ?  'on': ''}`} data-stroke="8" onClick={onClick} d="M19.148 217l12.54 13.184L26 392.773 12.536 406 0 392.774l5.688-162.59z" />
          <path className={`stroke-9 ${digitState[9] ?  'on': ''}`} data-stroke="9" onClick={onClick} d="M33.062 391l1.014-28.987L107.544 232h7.08l-1.592 45.493L48.523 391z" />
          <path className={`stroke-10 ${digitState[10] ?  'on': ''}`} data-stroke="10" onClick={onClick} d="M135.148 217l12.54 13.184L142 392.773 128.536 406 116 392.774l5.688-162.59z" />
          <path className={`stroke-11 ${digitState[11] ?  'on': ''}`} data-stroke="11" onClick={onClick} d="M161.704 232l64.372 130.013L225.062 391h-15.461l-56.568-113.507L154.624 232z" />
          <path className={`stroke-12 ${digitState[12] ?  'on': ''}`} data-stroke="12" onClick={onClick} d="M251.148 217l12.54 13.184L258 392.773 244.536 406 232 392.774l5.688-162.59z" />
          <path className={`stroke-13 ${digitState[13] ?  'on': ''}`} data-stroke="13" onClick={onClick} d="M111.225 397l12.352 12.999h11.641L148.479 397h80.118l12.785 13.454L227.646 424H30.169l-12.787-13.546L31.108 397z" />
          <circle className={`stroke-14 ${digitState[14] ?  'on': ''}`} data-stroke="14" onClick={onClick} cx="266.908" cy="415" r="16" />
        </g>
      </svg>
    </div>
  );
};

export default Digit;
