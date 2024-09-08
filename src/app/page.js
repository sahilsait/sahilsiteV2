import { getAllNotes } from "./notes";

export default async function Home() {
  const allNotes = await getAllNotes();

  return (
    <main>
      <section>
        {allNotes.map(({ id, date, title, contentHtml }) => (
          <article key={id} className="mb-12">
            <h3 className="text-2xl font-bold text-fuchsia-400 mb-2">
              {title}
            </h3>
            <p className="text-gray-400 mb-4">{date}</p>
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </article>
        ))}
      </section>
    </main>
  );
}
