/** biome-ignore-all lint/style/noHeadElement: off */
// import "@fontsource-variable/dancing-script";
// import "@fontsource-variable/lexend";
// import { imageFrom } from "@ec/domain/utils/images";
// import { publicStore, setHeaderHoveredId, setIsScrolled } from "@ec/ui/lib/stores";
// import { HEADER, HEADER_T, HEADER_V } from "@ec/ui/styles/app/header";
// import { SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";
import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { GridBackground } from "@/components/grid-background";
// import { createServerFn } from "@tanstack/react-start";
// import { useStore } from "@tanstack/react-store";
// import { Image } from "@unpic/react";
// import { motion, useMotionValueEvent, useScroll } from "motion/react";
// import { type PropsWithChildren, type ReactNode, useCallback } from "react";
import appCss from "@/styles.css?url";

// SERVER ----------------------------------------------------------------------------------------------------------------------------------
// const readPublicLayout = createServerFn({ method: "GET" }).handler(async () => convex.query(api.layouts.readPublic, {}));

// ROUTE -----------------------------------------------------------------------------------------------------------------------------------
export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: "stylesheet", href: appCss }],
    meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title: "@ec/tanstack" }],
  }),
  component: RootLayout,
  loader: async () => {
    // const { logoImg } = await readPublicLayout();
    // const navs = [
    //   { id: "qui-suis-je", text: "Qui suis-je?", href: "/qui-suis-je" },
    //   { id: "oeuvres", text: "Œuvres", href: "/oeuvres" },
    //   { id: "contact", text: "Contact", href: "/#contact" },
    // ];
    // return { logoImg, navs };
  },
});

// LAYOUT ----------------------------------------------------------------------------------------------------------------------------------
function RootLayout() {
  // const { logoImg, navs } = Route.useLoaderData();

  // const socials = [
  //   { id: "instagram", text: "Instagram", icon: <SiInstagram />, href: "/" },
  //   { id: "youtube", text: "Youtube", icon: <SiYoutube />, href: "/" },
  // ];

  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden antialiased">
        <GridBackground />
        {/* <RootLayoutHeader image={imageFrom(logoImg)} navs={navs} socials={socials} /> */}
        <main className="relative mt-20 flex-1 sm:mt-28 md:mt-40">
          <Outlet />
        </main>
        <section className="relative flex justify-between bg-neutral-700 p-4 text-white">
          <span>© 2025 Eliana Corré</span>
          <Link to="/">Mentions légales</Link>
        </section>
        <Scripts />
      </body>
    </html>
  );
}
