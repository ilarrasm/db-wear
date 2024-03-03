import { useAppSelector } from "@/redux/store";

export default function useIsMobile() {
  const { isMobile } = useAppSelector(({ appStatus }) => appStatus);
  return isMobile;
}
