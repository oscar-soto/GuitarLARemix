const Course = ({ course }) => {
  const { content, imagen, title } = course.attributes;
  return (
    <section className="course">
      <style jsx="true">
        {`
          .course {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 7)
              ),
              url(${imagen.data.attributes.url});
          }
        `}
      </style>
      <div className="container course-grid">
        <div className="content">
          <h2 className="heading">{title}</h2>

          <div className="text">{content}</div>
        </div>
      </div>
    </section>
  );
};

export default Course;
