import { getWebApps } from "../data/webAppsSource";
import Projects from "./Projects";

export default function Web() {
  const webApps = getWebApps();

  return <Projects data={webApps} />;
}
