import { useEffect } from "react";

export default function useTitle(title) {
  useEffect(() => {
    document.title = `${title} | Redux Cart`

  },[title])
  return null;
}
