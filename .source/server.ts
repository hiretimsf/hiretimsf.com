// @ts-nocheck
import * as __fd_glob_31 from "../content/projects/tshirt-design-app.mdx?collection=projects"
import * as __fd_glob_30 from "../content/projects/sign-language-kotlin.mdx?collection=projects"
import * as __fd_glob_29 from "../content/projects/runmusic-kotlin.mdx?collection=projects"
import * as __fd_glob_28 from "../content/projects/renewable-energy-project.mdx?collection=projects"
import * as __fd_glob_27 from "../content/projects/project-marketing-materials.mdx?collection=projects"
import * as __fd_glob_26 from "../content/projects/product-landing-page.mdx?collection=projects"
import * as __fd_glob_25 from "../content/projects/portfolio-website-v3.mdx?collection=projects"
import * as __fd_glob_24 from "../content/projects/portfolio-website-v2.mdx?collection=projects"
import * as __fd_glob_23 from "../content/projects/portfolio-website-v1.mdx?collection=projects"
import * as __fd_glob_22 from "../content/projects/portfolio-website-v0.mdx?collection=projects"
import * as __fd_glob_21 from "../content/projects/portfolio-app-kotlin.mdx?collection=projects"
import * as __fd_glob_20 from "../content/projects/portfolio-app-java.mdx?collection=projects"
import * as __fd_glob_19 from "../content/projects/local-market-place-app.mdx?collection=projects"
import * as __fd_glob_18 from "../content/projects/full-stack-blog-app.mdx?collection=projects"
import * as __fd_glob_17 from "../content/pages/about.mdx?collection=pages"
import * as __fd_glob_16 from "../content/experience/unitel.mdx?collection=experience"
import * as __fd_glob_15 from "../content/experience/tesla-production-associate.mdx?collection=experience"
import * as __fd_glob_14 from "../content/experience/tesla-material-handler.mdx?collection=experience"
import * as __fd_glob_13 from "../content/experience/self-employed-frontend.mdx?collection=experience"
import * as __fd_glob_12 from "../content/experience/self-employed-frontend-2025.mdx?collection=experience"
import * as __fd_glob_11 from "../content/experience/self-employed-android.mdx?collection=experience"
import * as __fd_glob_10 from "../content/experience/self-employed-android-early.mdx?collection=experience"
import * as __fd_glob_9 from "../content/experience/self-employed-android-early-2012.mdx?collection=experience"
import * as __fd_glob_8 from "../content/experience/renewable-energy.mdx?collection=experience"
import * as __fd_glob_7 from "../content/experience/morningstar.mdx?collection=experience"
import * as __fd_glob_6 from "../content/experience/mercedes-benz.mdx?collection=experience"
import * as __fd_glob_5 from "../content/experience/driver.mdx?collection=experience"
import * as __fd_glob_4 from "../content/education/sf-state.mdx?collection=education"
import * as __fd_glob_3 from "../content/education/hs-mittweida.mdx?collection=education"
import * as __fd_glob_2 from "../content/education/eli.mdx?collection=education"
import * as __fd_glob_1 from "../content/education/dsh.mdx?collection=education"
import * as __fd_glob_0 from "../content/education/bcc.mdx?collection=education"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const education = await create.docs("education", "content/education", {}, {"bcc.mdx": __fd_glob_0, "dsh.mdx": __fd_glob_1, "eli.mdx": __fd_glob_2, "hs-mittweida.mdx": __fd_glob_3, "sf-state.mdx": __fd_glob_4, });

export const experience = await create.docs("experience", "content/experience", {}, {"driver.mdx": __fd_glob_5, "mercedes-benz.mdx": __fd_glob_6, "morningstar.mdx": __fd_glob_7, "renewable-energy.mdx": __fd_glob_8, "self-employed-android-early-2012.mdx": __fd_glob_9, "self-employed-android-early.mdx": __fd_glob_10, "self-employed-android.mdx": __fd_glob_11, "self-employed-frontend-2025.mdx": __fd_glob_12, "self-employed-frontend.mdx": __fd_glob_13, "tesla-material-handler.mdx": __fd_glob_14, "tesla-production-associate.mdx": __fd_glob_15, "unitel.mdx": __fd_glob_16, });

export const pages = await create.docs("pages", "content/pages", {}, {"about.mdx": __fd_glob_17, });

export const projects = await create.docs("projects", "content/projects", {}, {"full-stack-blog-app.mdx": __fd_glob_18, "local-market-place-app.mdx": __fd_glob_19, "portfolio-app-java.mdx": __fd_glob_20, "portfolio-app-kotlin.mdx": __fd_glob_21, "portfolio-website-v0.mdx": __fd_glob_22, "portfolio-website-v1.mdx": __fd_glob_23, "portfolio-website-v2.mdx": __fd_glob_24, "portfolio-website-v3.mdx": __fd_glob_25, "product-landing-page.mdx": __fd_glob_26, "project-marketing-materials.mdx": __fd_glob_27, "renewable-energy-project.mdx": __fd_glob_28, "runmusic-kotlin.mdx": __fd_glob_29, "sign-language-kotlin.mdx": __fd_glob_30, "tshirt-design-app.mdx": __fd_glob_31, });