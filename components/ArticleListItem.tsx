import Link from 'next/link';
import type { ArticleItem } from '@/types';

interface Props {
  category: string;
  articles: ArticleItem[];
}

const ArticleListItem = ({ category, articles }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold">{category}</h2>
      <div className="flex flex-col gap-2.5 font-poppins text-lg">
        {articles.map((article, id) => (
          <Link
            href={`/${article.id}`}
            key={id}
            className="text-neutral-900 hover:text-amber-700 transition duration-150"
          ></Link>
        ))}
      </div>
    </div>
  );
};
export default ArticleListItem;
