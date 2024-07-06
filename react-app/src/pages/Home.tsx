import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import ArticleList from '../components/ArticleList';
import PopularTags from '../components/PopularTags';
import Pagination from '../components/Pagination';
import api from '../services/api';

interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

export default function Home(): JSX.Element {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles();
  }, [currentPage, selectedTag]);

  const fetchArticles = async () => {
    try {
      const limit = 10;
      const offset = (currentPage - 1) * limit;
      let url = `/articles?limit=${limit}&offset=${offset}`;
      if (selectedTag) {
        url += `&tag=${selectedTag}`;
      }
      const response = await api.get<{ articles: Article[], articlesCount: number }>(url);
      setArticles(response.data.articles);
      setTotalPages(Math.ceil(response.data.articlesCount / limit));
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  return (
    <div>
      <Banner />

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className='nav nav-pills outline-active'>
                <li className="nav-item">
                  <a href="#" className={`nav-link ${!selectedTag ? 'active' : ''}`} onClick={() => setSelectedTag(null)}>
                    Global Feed
                  </a>
                </li>
                {selectedTag && (
                  <li className="nav-item">
                    <a href="#" className="nav-link active">
                      <i className="ion-pound"></i> {selectedTag}
                    </a>
                  </li>
                )}
              </ul>
            </div>
            <ArticleList articles={articles} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
          <div className="col-md-3">
            <div className="sidebar">
              <PopularTags onTagSelect={handleTagSelect} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}