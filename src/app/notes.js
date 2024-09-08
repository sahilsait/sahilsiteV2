import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const notesDirectory = path.join(process.cwd(), "/src/app/notes");

export async function getAllNotes() {
  // Get file names under /notes
  const fileNames = await fs.readdir(notesDirectory);
  const allNotesData = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(notesDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Use remark to convert markdown into HTML string
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();

      // Combine the data with the id and contentHtml
      return {
        id,
        contentHtml,
        ...matterResult.data,
      };
    })
  );
  // Sort notes by date
  return allNotesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
