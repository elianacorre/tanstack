// import { imageFrom } from "@ec/domain/utils/images";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ec/ui/components/form";
// import { Input } from "@ec/ui/components/input";
// import { Textarea } from "@ec/ui/components/textarea";
// import { QUOTE } from "@ec/ui/styles/app/index";
import { createFileRoute } from "@tanstack/react-router";
// import { useForm } from "react-hook-form";
// import { SubscribeButton } from "@/components/button-subscribe";
// import { GridBackground } from "@/components/grid-background";
// import { Hero } from "@/components/hero";
// import { Section, SectionContent, SectionImage, SectionMain, SectionTitle } from "@/components/section";
// import { WorksGrid } from "@/components/works-grid";

// SERVER ----------------------------------------------------------------------------------------------------------------------------------
// const readIndexPage = createServerFn({ method: "GET" }).handler(async () => convex.query(api.pages.readIndex, {}));

// ROUTE -----------------------------------------------------------------------------------------------------------------------------------
export const Route = createFileRoute("/")({
  component: IndexPage,
  // loader: async () => await readIndexPage(),
});

// PAGE ------------------------------------------------------------------------------------------------------------------------------------
function IndexPage() {
  // const { contact, hero, quote, works } = Route.useLoaderData();

  return (
    <>
      {/* <Hero button={<Link to="/">{hero.button}</Link>} className={{ aside: "flex" }} image={imageFrom(hero.image)} title={hero.title}>
        {hero.content}
      </Hero>
      <Section className={{ base: "lg:-mt-20" }} intent="secondary">
        <SectionMain>
          <SectionTitle intent="secondary" title={works.title} />
          <WorksGrid works={works.items} />
        </SectionMain>
      </Section>
      <section className={QUOTE.base()}>
        <GridBackground />
        <div className={QUOTE.content()}>
          <h3 className={QUOTE.sentence()}>{quote.sentence}</h3>
          <h4 className={QUOTE.author()}>{quote.author}</h4>
        </div>
      </section>
      <Section id="contact" intent="primary">
        <SectionImage image={imageFrom(contact.image)} reverse />
        <SectionMain>
          <SectionTitle title={contact.title} />
          <SectionContent>{contact.content}</SectionContent>
          <AppIndexForm />
        </SectionMain>
      </Section> */}
    </>
  );
}

// ROOT ------------------------------------------------------------------------------------------------------------------------------------
// export function AppIndexForm() {
//   // const [state, action] = useActionState(sendAction, undefined);

//   const form = useForm({
//     mode: "onTouched",
//     // resolver: zodResolver(zContactValues),
//     // errors: state?.errors,
//     // defaultValues: state?.values ?? contactDefaultValues,
//   });

//   const { control, formState, handleSubmit } = form;

//   return (
//     <Form {...form}>
//       <form className="flex-1 space-y-8" onSubmit={formState.isValid ? undefined : handleSubmit(() => true)}>
//         <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
//           <FormField
//             control={control}
//             name="firstname"
//             render={({ field }) => (
//               <FormItem className="flex-1">
//                 <FormLabel>Prénom</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Ton prénom" {...field} className="bg-white" />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={control}
//             name="surname"
//             render={({ field }) => (
//               <FormItem className="flex-1">
//                 <FormLabel>Nom</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Ton nom" {...field} className="bg-white" />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <FormField
//           control={control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Courriel</FormLabel>
//               <FormControl>
//                 <Input placeholder="Ton courriel" {...field} className="bg-white" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={control}
//           name="message"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Message</FormLabel>
//               <FormControl>
//                 <Textarea placeholder="Ton message" rows={8} {...field} className="bg-white" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <SubscribeButton className="justify-self-end">
//           <span className="group inline-flex items-center">
//             Envoyer
//             <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
//           </span>
//           <span className="group inline-flex items-center">
//             <CheckIcon className="mr-2 size-4" />
//             Subscribed
//           </span>
//         </SubscribeButton>
//       </form>
//     </Form>
//   );
// }
