import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-card">
        <div className="testimonial-stars">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <span key={index}>★</span>
            ))}
        </div>

        <blockquote className="testimonial-quote">
          “Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia exercitation. Eu non aute velit id velit Lorem elit anim pariatur.”
        </blockquote>

        <div className="testimonial-user">
          <img
            src="/judith.jpg"
            alt="Judith Black"
            className="testimonial-avatar"
          />
          <div className="testimonial-info">
            <strong>Judith Black</strong>
            <span>CEO of Workcation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
