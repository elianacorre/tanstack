// ROOT ------------------------------------------------------------------------------------------------------------------------------------
// export function RootLayoutHeader({ image, navs, socials }: RootLayoutHeaderProps) {
//   const { location } = useRouterState();
//   const { scrollY } = useScroll();
//   const isScrolled = useStore(publicStore, (state) => state.isScrolled);

//   useMotionValueEvent(scrollY, "change", (latest) => setIsScrolled(latest > 1));

//   const handleOnMouseLeave = useCallback(() => setHeaderHoveredId(), []);

//   return (
//     <motion.header className={HEADER.base({ isScrolled })} layoutRoot transition={HEADER_T.base}>
//       <motion.div
//         animate={isScrolled ? "scrolled" : "top"}
//         className={HEADER.content()}
//         layout
//         onMouseLeave={handleOnMouseLeave}
//         transition={HEADER_T.content}
//         variants={HEADER_V.content}
//       >
//         <Link to="/">
//           <HeaderLogo>
//             <Image {...image} background="transparent" sizes="(min-width: 768px) 160px, 80px" />
//           </HeaderLogo>
//         </Link>
//         <div className={HEADER.navs()}>
//           {navs.map((nav) => (
//             <Link key={nav.id} to={nav.href}>
//               <HeaderNav isActive={location.pathname === nav.href} nav={nav} />
//             </Link>
//           ))}
//         </div>
//         <div className={HEADER.icons()}>
//           <div className={HEADER.socials()}>
//             {socials.map((social) => (
//               <HeaderSocial key={social.id} social={social} />
//             ))}
//           </div>
//           {/* <Sheet>
// 						<SheetTrigger
// 							onMouseEnter={() => setHeaderHoveredId("menu")}
// 							onClick={() => setHeaderHoveredId(undefined)}
// 							className={BURGER()}
// 						>
// 							{headerHoveredId === "menu" && <motion.div layoutId="hovered" className={STAIN({ intent: "primary" })} />}
// 							<MenuIcon className={STAIN_CONTENT()} />
// 						</SheetTrigger>
// 						<SheetContent>
// 							<SheetHeader>
// 								<SheetTitle>Are you absolutely sure?</SheetTitle>
// 								<SheetDescription>
// 									This action cannot be undone. This will permanently delete your account and remove your data from our servers.
// 								</SheetDescription>
// 							</SheetHeader>
// 						</SheetContent>
// 					</Sheet> */}
//         </div>
//       </motion.div>
//     </motion.header>
//   );
// }
// export type RootLayoutHeaderProps = {
//   image: { height: number; width: number; alt: string; src: string };
//   navs: { href: string; id: string; text: string }[];
//   socials: { href: string; icon: ReactNode; id: string; text: string }[];
// };

// // LOGO ------------------------------------------------------------------------------------------------------------------------------------
// export function HeaderLogo({ children }: HeaderLogoProps) {
//   const isScrolled = useStore(publicStore, (state) => state.isScrolled);

//   return (
//     <button className={HEADER.logo()} type="button">
//       <motion.div className={HEADER.logoContent({ isScrolled })} layout transition={HEADER_T.logoContent}>
//         {children}
//       </motion.div>
//     </button>
//   );
// }
// export type HeaderLogoProps = PropsWithChildren;

// // NAV -------------------------------------------------------------------------------------------------------------------------------------
// export function HeaderNav({ isActive, nav }: HeaderNavProps) {
//   const { id, text } = nav;
//   const isVisible = useStore(publicStore, ({ headerHoveredId }) => headerHoveredId === id || (!headerHoveredId && isActive));

//   const handleOnMouseEnter = useCallback(() => setHeaderHoveredId(id), [id]);

//   return (
//     <button className={HEADER.nav()} onMouseEnter={handleOnMouseEnter} type="button">
//       {isVisible && <motion.div className={HEADER.stain()} layoutId="hovered" />}
//       <span className={HEADER.stainContent()}>{text}</span>
//     </button>
//   );
// }
// export type HeaderNavProps = { isActive: boolean; nav: { id: string; text: string; href: string } };

// // SOCIAL ----------------------------------------------------------------------------------------------------------------------------------
// export function HeaderSocial({ social }: HeaderSocialProps) {
//   const { href, icon, id } = social;
//   const isHovered = useStore(publicStore, ({ headerHoveredId }) => headerHoveredId === id);

//   const handleOnMouseEnter = useCallback(() => setHeaderHoveredId(id), [id]);

//   return (
//     <a className={HEADER.social()} href={href} key={id} onMouseEnter={handleOnMouseEnter}>
//       {isHovered && <motion.div className={HEADER.stain({ intent: "primary" })} layoutId="hovered" />}
//       <span className={HEADER.stainContent()}>{icon}</span>
//     </a>
//   );
// }
// export type HeaderSocialProps = { social: { icon: ReactNode; id: string; href: string; text: string } };
