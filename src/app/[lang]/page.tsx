import HomeModule from "../modules/Home";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  if (!lang) {
    return <div>404</div>;
  }

  try {
    const dictionary = await import(`@/app/dictionary/${lang}.json`).then(
      (res) => res.default
    );
    return <HomeModule dictionary={dictionary} />;
  } catch (error) {
    console.error("Error al cargar el diccionario:", error);
    return <div>Error al cargar el diccionario</div>;
  }
}
