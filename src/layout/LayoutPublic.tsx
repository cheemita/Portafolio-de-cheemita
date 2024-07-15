import { Outlet } from "react-router-dom";

export const LayoutPublic = () => {
  return (
    <div className="flex overflow-hidden min-h-min max-h-min w-screen">
      <div className="flex-1 0">
        <Outlet />
      </div>
    </div>
  );
};
