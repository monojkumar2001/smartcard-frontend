// components/ProtectedRoute.js

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "./authContext";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return user ? <>{children}</> : null;
};

export default ProtectedRoute;
