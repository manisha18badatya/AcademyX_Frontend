// components/userdata.js
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function useUserData() {
  const { isLoggedIn } = useAuth();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/v1/dashboards", {
          method: "GET",
          credentials: "include", // important if using cookies
        });

        const userdata = await res.json();
        if (userdata?.data[0]) {
          setUser(userdata.data[0]);
        } else {
          console.warn("User not found");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // ✅ Correct conditional fetch
    if (isLoggedIn) {
      fetchUser();
    } else {
      setIsLoading(false); // avoid hanging if not logged in
    }
  }, [isLoggedIn]); // 👈 include dependency

  return { user, isLoading };
}
