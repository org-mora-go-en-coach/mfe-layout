import React from "react";
import {createRoot} from "react-dom/client";
import {flushSync} from "react-dom";
import {AppName,LayoutApp} from "./1-page/layout";
import "./style.css";
import "./mobile.css";
function ensureStylesheet(){const id="mfe-layout-styles";if(document.getElementById(id))return;const link=document.createElement("link");link.id=id;link.rel="stylesheet";const entryUrl=new URL(import.meta.url);const stylesheetUrl=new URL("./assets/mfe-layout.css",entryUrl);stylesheetUrl.search=entryUrl.search;link.href=stylesheetUrl.href;document.head.append(link)}
export type LayoutController={contentElement:HTMLDivElement;setActive:(app:AppName)=>void;setStatus:(status:string)=>void;unmount:()=>void};
export function mount(element:HTMLElement,options:{version?:string;onNavigate:(app:AppName)=>void}):LayoutController{ensureStylesheet();const root=createRoot(element);let active:AppName="lesson";let status="학습 공간을 불러오는 중…";let contentElement:HTMLDivElement|null=null;const render=()=>flushSync(()=>root.render(<LayoutApp active={active} version={options.version??"1.0.0"} status={status} onNavigate={options.onNavigate} contentRef={node=>{contentElement=node}}/>));render();if(!contentElement)throw new Error("레이아웃 콘텐츠 영역을 사용할 수 없습니다.");return{contentElement,setActive(app){active=app;render()},setStatus(next){status=next;render()},unmount(){root.unmount()}}}
