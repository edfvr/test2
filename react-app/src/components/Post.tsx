import { useState } from 'react';
import '../App.css'

interface PostProps {
    name: string;
    profilePic: string;
    date: string;
    content: string;
    likes: number;
}
  
export default function Post({ name, profilePic, date, content, likes }: PostProps){
    const truncatedContent = content.length > 150 ? `${content.substring(0, 150)}...` : content;

    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
      setLiked(!liked);
    };
  
    const likeClass = liked ? 'like-box liked' : 'like-box';

    return (
      <div className="post">
        <div className="post-header">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="profile-info">
            <a href="" className="profile-name">{name}</a>
            <p className="post-date">{date}</p>
          </div>
        </div>
        <div className="post-content">
        <p>{truncatedContent}</p>
        {content.length > 150 && (
          <a href="#" className="read-more">
            Read more
          </a>
        )}
      </div>
        <div className="post-actions">
            <div className={likeClass} onClick={toggleLike}>
                <i className="ion-heart"></i> {likes}
            </div>
        </div>
      </div>
    );
};