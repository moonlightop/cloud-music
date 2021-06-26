
import React, { memo,Fragment } from 'react';

import { FooterTitle,FooterIcon } from '@common/local-data/app-footer';

import { 
  AppFooterWrapper,
  LeftContent,
  RightContent 
} from './style.js';

export default memo(function ZHAppFooter() {
  return (
    <AppFooterWrapper>
      <div className="content wrap-v2">
        <LeftContent>
          <p className="titles">
            {
              FooterTitle.map(item => {
                const { link,title } = item;
                return (
                  <Fragment key={link}>
                    <a href={link} target="_blank" className="item s-fc4" rel="noreferrer">{title}</a>
                    <span className="line">|</span>
                  </Fragment>
                )
              })
            }
          </p>
          <p>
            <span className="gap">网易公司版权所有©1997-2021</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" target="_blank" rel="noreferrer">浙网文[2018]3506-263号</a>
          </p>
          <p>
            <span className="gap">违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：</span>
            <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
          </p>
          <p>
            <a className="gap" href="https://beian.miit.gov.cn/#/Integrated/index" rel="noreferrer" target="_blank">
              粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站</a>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" rel="noreferrer" target="_blank">
            <span className="police-logo"></span>
            <span className="police-text">浙公网安备 33010902002564号</span>
            </a>
          </p>
        </LeftContent>

        <RightContent>
          {
            FooterIcon.map((icon) => {
              const { link,title } = icon;
              return (
                <li key={link} className="item">
                  <a className="link" href={link} key={link} target="_blank" rel="noreferrer">{title}</a>
                  <span className="title"></span>
                </li>
              )
            })
          }
        </RightContent>
      </div>
    </AppFooterWrapper>
  )
})
