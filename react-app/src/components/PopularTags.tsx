export default function PopularTags(): JSX.Element {
  const tags = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'CSS', 'HTML']; // 

  return (
    <div className="popular-tags">
      <h2>Popular Tags</h2>
      <div className="tag-list">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};