// import type { Images } from "@ec/domain/schemas/images";
import { Image } from "@unpic/react";
import { domAnimation, LazyMotion, type Transition } from "motion/react";
import { div as Mdiv } from "motion/react-m";
import type { ComponentProps, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import type { Images } from "@/data/images";
import { ButtonAnimated } from "./button-animated";

// STYLES ----------------------------------------------------------------------------------------------------------------------------------
const heroStyles = tv({
  slots: {
    aside:
      "lg:-mr-20 relative hidden aspect-square w-full flex-none rounded-2xl border-[12px] border-white bg-neutral-200 shadow-2xl outline-1 outline-neutral-200 md:border-[16px] lg:flex lg:w-md lg:rotate-6 lg:transition-transform lg:hover:rotate-8 xl:mr-0 xl:w-xl 2xl:w-2xl",
    base: "container relative z-10 mx-auto flex flex-col items-center gap-8 px-4 py-8 sm:px-8 lg:flex-row lg:items-start xl:items-center",
    content: "text-balance text-center font-light text-lg sm:text-xl lg:text-start 2xl:text-2xl",
    img: "size-full object-cover",
    main: "flex flex-col items-center gap-8 lg:items-start",
    title: "flex flex-col items-center font-black text-[42px] leading-none sm:text-7xl lg:items-start 2xl:text-8xl",
    titleRow: "flex items-center gap-1 whitespace-nowrap text-primary",
    titleRowContent: "w-0 overflow-hidden leading-tight",
    titleRowCursor: "h-10 w-1 rounded-sm bg-primary opacity-0 sm:h-16",
  },
});
const HERO = heroStyles();

// TRANSITIONS -----------------------------------------------------------------------------------------------------------------------------
export const HERO_T = {
  content: { duration: 2, ease: "linear", delay: 1 },
  cursor: { duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
} satisfies Record<string, Transition>;

// ROOT ------------------------------------------------------------------------------------------------------------------------------------
export function Hero({ button, children, className: C = {}, image, title }: HeroProps) {
  image.src += "&ar=1&fit=crop";
  return (
    <section className={HERO.base({ className: C.base })}>
      <main className={HERO.main({ className: C.main })}>
        <h1 className={HERO.title({ className: C.title })}>
          <span>{title[0]}</span>
          <HeroTitleEffect text={title[1]} />
        </h1>
        <div className={HERO.content({ className: C.content })}>{children}</div>
        {button && <ButtonAnimated>{button}</ButtonAnimated>}
      </main>
      <aside className={HERO.aside({ className: C.aside })}>
        <Image
          {...image}
          className={HERO.img()}
          priority
          sizes="(min-width: 1536px) 724px, (min-width: 1280px) 612px, (min-width: 1024px) 406px, (min-width: 768px) 670px, (min-width: 640px) 576px, 100vw"
        />
      </aside>
    </section>
  );
}
type HeroProps = Omit<ComponentProps<"section">, "className" | "title"> &
  HeroStyles & { button?: ReactNode; image: Images["Entity"]; title: string[] };

// EFFECT-----------------------------------------------------------------------------------------------------------------------------------
function HeroTitleEffect({ className: C = {}, text }: HeroTitleEffectProps) {
  return (
    <div className={HERO.titleRow({ className: C.titleRow })}>
      <LazyMotion features={domAnimation}>
        <Mdiv
          className={HERO.titleRowContent({ className: C.titleRowContent })}
          transition={HERO_T.content}
          whileInView={{ width: "fit-content" }}
        >
          {text}
        </Mdiv>
        <Mdiv animate={{ opacity: 1 }} className={HERO.titleRowCursor({ className: C.titleRowCursor })} transition={HERO_T.cursor} />
      </LazyMotion>
    </div>
  );
}
type HeroTitleEffectProps = HeroVariants & {
  className?: Pick<HeroClass, "titleRow" | "titleRowContent" | "titleRowCursor">;
  text?: string;
};

// TYPES -----------------------------------------------------------------------------------------------------------------------------------
type HeroClass = Partial<(typeof heroStyles)["slots"]>;
type HeroStyles = HeroVariants & { className?: HeroClass };
type HeroVariants = VariantProps<typeof heroStyles>;
