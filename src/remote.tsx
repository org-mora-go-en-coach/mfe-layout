import React from "react";
import {createRoot} from "react-dom/client";
import {flushSync} from "react-dom";
import {AppName,LayoutApp} from "./LayoutApp";
import "./style.css";
function ensureStylesheet(){const id="mfe-layout-styles";if(document.getElementById(id))return;const link=document.createElement("link");link.id=id;link.rel="stylesheet";link.href=new URL("./assets/mfe-layout.css",import.meta.url).href;document.head.append(link)}
export type LayoutController={contentElement:HTMLDivElement;setActive:(app:AppName)=>void;setStatus:(status:string)=>void;unmount:()=>void};
export function mount(element:HTMLElement,options:{version?:string;onNavigate:(app:AppName)=>void}):LayoutController{ensureStylesheet();const root=createRoot(element);let active:AppName="lesson";let status="Loading your learning space…";let contentElement:HTMLDivElement|null=null;const render=()=>flushSync(()=>root.render(<LayoutApp active={active} version={options.version??"1.0.0"} status={status} onNavigate={options.onNavigate} contentRef={node=>{contentElement=node}}/>));render();if(!contentElement)throw new Error("Layout content host is unavailable");return{contentElement,setActive(app){active=app;render()},setStatus(next){status=next;render()},unmount(){root.unmount()}}}
