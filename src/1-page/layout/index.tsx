import React from "react";
import type { AppName, LayoutAppProps } from "./type";
export type { AppName } from "./type";

const Icon = ({ children }: { children: React.ReactNode }) => <span className="mg-icon" aria-hidden="true">{children}</span>;

export function LayoutApp({ active, version, status, onNavigate, contentRef }: LayoutAppProps) {
  const [compact, setCompact] = React.useState(false);
  const [userView, setUserView] = React.useState("mypage");
  const openUser = (view: string) => {
    sessionStorage.setItem("mora-go:user-view", view);
    setUserView(view);
    onNavigate("user");
  };

  return <div className={compact ? "mg-app mg-compact" : "mg-app"}>
    <aside className="mg-sidebar" aria-label="주요 메뉴">
      <div className="mg-sidebar-top">
        <button className="mg-icon-button" aria-label="메뉴 전환" onClick={() => setCompact((value) => !value)}><Icon>☰</Icon></button>
        <button className="mg-brand" onClick={() => onNavigate("lesson")} aria-label="Mora Go 홈"><span className="mg-brand-mark">M</span><span>모라</span></button>
      </div>
      <nav>
        <button className="mg-new-chat" onClick={() => onNavigate("lesson")}><Icon>＋</Icon><span>새 학습</span><kbd>⌘ K</kbd></button>
        <button className={active === "lesson" ? "active" : ""} onClick={() => onNavigate("lesson")}><Icon>⌕</Icon><span>강의 둘러보기</span></button>
        <button className={active === "user" && userView === "saved" ? "active" : ""} onClick={() => openUser("saved")}><Icon>▢</Icon><span>보관함</span></button>
      </nav>
      <div className="mg-recents">
        <p>오늘</p>
        <button className={active === "user" && userView === "history" ? "active" : ""} onClick={() => openUser("history")}><span>매일 영어 워밍업</span></button>
        <button onClick={() => onNavigate("lesson")}><span>자신 있게 소개하기</span></button>
        <button onClick={() => onNavigate("lesson")}><span>업무에 유용한 표현</span></button>
      </div>
      <div className="mg-sidebar-footer">
        <button onClick={() => openUser("mypage")} aria-label="프로필 열기"><span className="mg-avatar">MG</span><span><strong>영어 학습자</strong><small>프로필 보기 · v{version}</small></span><Icon>•••</Icon></button>
      </div>
    </aside>
    <main className="mg-main">
      <header className="mg-header">
        <button className="mg-mobile-menu" aria-label="메뉴 전환" onClick={() => setCompact((value) => !value)}>☰</button>
        <button className="mg-model" onClick={() => onNavigate("lesson")}>모라 영어 <span>⌄</span></button>
        <div className="mg-actions"><button onClick={() => openUser("saved")}>공유</button><button className="mg-profile-button" onClick={() => openUser("mypage")} aria-label="프로필 열기">MG</button></div>
      </header>
      {status && <div className="mg-status"><span className="mg-spinner" /> {status}</div>}
      <div className="mg-content" ref={contentRef} />
    </main>
  </div>;
}
