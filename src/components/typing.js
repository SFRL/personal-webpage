import React from "react";
import Typed from "typed.js";

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: this.props.words,
      typeSpeed: this.props.typeSpeed || 50,
      backSpeed: this.props.backSpeed || 50,
      loop: this.props.loop || false,
      cursorChar: this.props.cursorChar || "|",
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
    this.typed.strPos = this.props.completed
      ? this.props.words[0].length - 1
      : 0;
  }
  componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }

  render() {
    return (
      <>
        <span
          style={{ whiteSpace: "pre-line" }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}
export default Typing;
