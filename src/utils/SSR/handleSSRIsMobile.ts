import { chageIsMobile } from "@/redux/slices/appStatusSlice";
import { AppStore } from "@/redux/store";
import { IncomingMessage } from "http";

const handleSSRIsMobile = (req: IncomingMessage, store: AppStore) => {
  const userAgent = req.headers["user-agent"] || "";
  const isMobile = /(iPad|iPhone|Android|Mobile)/i.test(userAgent) || false;
  store.dispatch(chageIsMobile({ isMobile }));
  return isMobile;
};

export default handleSSRIsMobile;
