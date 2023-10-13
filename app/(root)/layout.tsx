import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      {children}
      <div className="fdex">
        LeftSidebar
        <section className="flex min-h-screen flex-1 flex-col bg-amber-700 px-6 pb-6 pt-36 max-md:pb-14 sm:px-14"></section>
        RightSidebar
      </div>
    </main>
  );
};

export default Layout;
