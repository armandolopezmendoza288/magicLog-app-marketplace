interface RedirectionablesProps {
  [key: string]: string;
}

export interface DynamicRouteProps {
  name: string;
  url: string;
}

export interface AllowedRoutesPerUserProps {
  [key: string]: Array<DynamicRouteProps>;
}

export const allowedRoutesPerUser: AllowedRoutesPerUserProps = {
  1: [
    {
      name: "Dashboard",
      url: "/admin/dashboard",
    },
  ],
  2: [
    { name: "Dashboard", url: "/seller/dashboard" },
  ],
};

const redirectionables: RedirectionablesProps = {
  1: "/admin/dashboard",
  2: "/seller/dashboard",
};

export default redirectionables;
