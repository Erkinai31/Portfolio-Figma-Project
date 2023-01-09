import "./SkillItem.css";

function SkillItem(props) {
  const { title, url, count_stars } = props;

  function generateStars(num) {
    let array = [];
    for (let i = 0; i < 4; i++) {
      if (num > i) {
        array.push("fa fa-star active");
      } else {
        array.push("fa fa-star noactive");
      }
    }
    return array;
  }

  let stars_data = generateStars(count_stars);

  return (
    <div className="skill_elem">
      <img src={url}/>
      <p className="title">{title}</p>
      <div>
        <span className="fa fa-star active"/>
        {stars_data.map((elem) => (
          <span className={elem}></span>
        ))}
      </div>
    </div>
  );
}

export default SkillItem;
