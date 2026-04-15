import { createBrowserRouter } from "react-router-dom";

import App        from "./App";
import Home       from "./pages/Home";
import About      from "./pages/About";
import Psychiatric from "./pages/Psychiatric";
import WeightLoss from "./pages/WeightLoss";
import IVHydration from "./pages/IVHydration";
import TMS        from "./pages/TMS";
import Telehealth from "./pages/Telehealth";
import Insurance  from "./pages/Insurance";
import Financing  from "./pages/Financing";
import Blog       from "./pages/Blog";
import Contact    from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,          // App renders <Navbar /> + <Outlet /> + <Footer />
    children: [
      { index: true,               element: <Home />        },
      { path: "about",             element: <About />       },
      { path: "psychiatric",       element: <Psychiatric /> },
      { path: "weight-loss",       element: <WeightLoss />  },
      { path: "iv-hydration",      element: <IVHydration /> },
      { path: "tms",               element: <TMS />         },
      { path: "telehealth",        element: <Telehealth />  },
      { path: "insurance",         element: <Insurance />   },
      { path: "financing",         element: <Financing />   },
      { path: "blog",              element: <Blog />        },
      { path: "contact",           element: <Contact />     },
    ],
  },
]);

export default router;