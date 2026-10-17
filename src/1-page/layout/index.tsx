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
    <aside className="mg-sidebar" aria-label="Primary navigation">
      <div className="mg-sidebar-top">
        <button className="mg-icon-button" aria-label="Toggle navigation" onClick={() => setCompact((value) => !value)}><Icon>☰</Icon></button>
        <button className="mg-brand" onClick={() => onNavigate("lesson")} aria-label="Mora Go home"><span className="mg-brand-mark">M</span><span>Mora</span></button>
      </div>
      <nav>
        <button className="mg-new-chat" onClick={() => onNavigate("lesson")}><Icon>＋</Icon><span>New practice</span><kbd>⌘ K</kbd></button>
        <button className={active === "lesson" ? "active" : ""} onClick={() => onNavigate("lesson")}><Icon>⌕</Icon><span>Explore lessons</span></button>
        <button className={active === "user" && userView === "saved" ? "active" : ""} onClick={() => openUser("saved")}><Icon>▢</Icon><span>Library</span></button>
      </nav>
      <div className="mg-recents">
        <p>Today</p>
        <button className={active === "user" && userView === "history" ? "active" : ""} onClick={() => openUser("history")}><span>Daily English warm-up</span></button>
        <button onClick={() => onNavigate("lesson")}><span>Confident introductions</span></button>
        <button onClick={() => onNavigate("lesson")}><span>Useful phrases for work</span></button>
      </div>
      <div className="mg-sidebar-footer">
        <button onClick={() => openUser("mypage")} aria-label="Open profile"><span className="mg-avatar">MG</span><span><strong>English learner</strong><small>View profile · v{version}</small></span><Icon>•••</Icon></button>
      </div>
    </aside>
    <main className="mg-main">
      <header className="mg-header">
        <button className="mg-mobile-menu" aria-label="Toggle navigation" onClick={() => setCompact((value) => !value)}>☰</button>
        <button className="mg-model" onClick={() => onNavigate("lesson")}>Mora English <span>⌄</span></button>
        <div className="mg-actions"><button onClick={() => openUser("saved")}>Share</button><button className="mg-profile-button" onClick={() => openUser("mypage")} aria-label="Open profile">MG</button></div>
      </header>
      {status && <div className="mg-status"><span className="mg-spinner" /> {status}</div>}
      <div className="mg-content" ref={contentRef} />
    </main>
  </div>;
}
