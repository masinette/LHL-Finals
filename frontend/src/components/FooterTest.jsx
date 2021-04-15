import React from "react";
import './Footer.scss';

function FooterTest() {
  return (
    <div className="footer">
      <footer className="py-4 bg-dark fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; LivTogether 2021
          </p>
        </div>
      </footer>
    </div>
  );
}

export default FooterTest;