import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "projects");

export const getSortedProjectsData = () => {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((file) => {
    const id = file.replace(/\.md$/, "");

    const fullPath = path.join(projectsDirectory, file);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContent);

    return {
      id,
      ...matterResult.data
    };
  });

  // sort projects
  return allProjectsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
    // return a.localeCompare(b); // <- alternative
  });
};

export const getAllProjectIds = () => {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map((file) => {
    return {
      params: {
        id: file.replace(/\.md$/, "")
      }
    };
  });
};

export const getProjectData = async (id) => {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data
  };
};
