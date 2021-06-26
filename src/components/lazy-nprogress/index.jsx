
import { useEffect } from "react";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';

const navBarStyle = `
  height: 5px;
  background: #C20C0C;
`;
const navPegStyle = `
  box-shadow: 0 0 10px #C20C0C, 0 0 5px #C20C0C;
`;

// 一级路由切换时给body添加顶部进度条
export default function ZHNavNProgress(props) {
  const { isSubNav } = props;
  // console.log('lazy-nprogress');

  NProgress.configure({ 
    template: ( 
    `
      <div class="bar" role="bar" style="${navBarStyle};">
        <div class="peg" style="${navPegStyle}"></div>
      </div>
    `),

    easing: 'ease-in-out',
    // minimum: 0.2,
    // speed:  100,
    // parent: '#root',
    // trickle: false,
    trickleSpeed: 150,
    showSpinner: isSubNav,
  });

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });

  return '';

};
