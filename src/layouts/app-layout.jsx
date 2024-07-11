import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main>
        {/* Header */}
        <Outlet />
      </main>

      {/* footer */}
    </div>
  );
};

export default AppLayout;
