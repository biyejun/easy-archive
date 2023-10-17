// 大类
interface LargeClassItem {
  id: string;
  name: string;
  subjects?: SubjectConf; // 专题
}

// ① 大类的配置
export type LargeClassConf = LargeClassItem[];

// 专题
interface subjectItem {
  id: string;
  name: string;
  cover: string; // 封面
  parts?: PartConf; // 部分
}

// ② 专题的配置
export type SubjectConf = subjectItem[];

// 部分
interface partItem {
  id: string;
  name: string;
  desc: string; // 描述
  chapters?: ChapterConf; // 章节
}

// ③ 部分的配置
export type PartConf = partItem[];

// 章节
interface chapterItem {
  id: string;
  name: string;
  articles?: ArticleConf; // 文章
}

// ④ 章节的配置
export type ChapterConf = chapterItem[];

// 文章
interface articleItem {
  id: string;
  name: string;
}

// ⑤ 文章的配置
export type ArticleConf = articleItem[];
