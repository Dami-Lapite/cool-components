import React from "react";
import "../Styles/codeBox.css";

export default function CodeBox() {
  return (
    <div className="center-container">
      <div className="overlay-code-box">
        <div className="overlay-card-1">
          <div className="overlay-card-2 color-moded">
            <div className="code-box">
              <div className="code-header">
                <div className="circle-container">
                  <div className="circle red"></div>
                  <div className="circle yellow"></div>
                  <div className="circle green"></div>
                </div>
              </div>
              <div className="code-container-big">
                <div className="code-container">
                  <div className="code-margin">
                    <div className="code-margin-numbers source-code-pro">
                      <p>
                        1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22
                        23
                      </p>
                    </div>
                  </div>
                  <div className="code-text-container">
                    <div className="code-text source-code-pro">
                      <p>
                        &lt;<span className="code-tag">div</span>
                        <span className="code-class">&nbsp;class</span>=
                        <span className="code-css">"important-text"</span>&gt;
                        <br />
                        &emsp;&lt;<span className="code-tag">p</span>
                        <span className="code-class">&nbsp;class</span>=
                        <span className="code-css">"notice-text"</span>&gt;
                        <br />
                        &emsp;&emsp; This page is inspired by the Tailwind.css
                        website <br />
                        &emsp;&lt;/<span className="code-tag">p</span>&gt;
                        <br />
                        &emsp;&lt;<span className="code-tag">p</span>
                        <span className="code-class">&nbsp;class</span>=
                        <span className="code-css">"lorem-ipsum"</span>&gt;{" "}
                        <br />
                        &emsp;&emsp; Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Fusce maximus justo turpis, eu
                        venenatis justo efficitur ac.
                        <br />
                        &emsp;&emsp; Nullam elementum ullamcorper euismod.
                        <br />
                        &emsp;&emsp; Curabitur condimentum odio sed leo
                        consequat viverra. Duis sed sem in eros tempus laoreet
                        sit amet at ipsum.
                        <br />
                        &emsp;&emsp; Phasellus ultrices id erat commodo
                        lobortis. Suspendisse dictum aliquam neque, at tristique
                        sapien auctor in.
                        <br />
                        &emsp;&emsp; Duis molestie felis metus, in porta odio
                        consequat at.
                        <br />
                        &emsp;&emsp; Nunc diam ligula, luctus ut nunc vehicula,
                        mattis ultrices erat.
                        <br />
                        &emsp;&emsp; Proin sagittis dolor orci, condimentum
                        scelerisque ipsum congue id. Ut condimentum felis
                        eleifend, porttitor ipsum ac, auctor metus. Maecenas at
                        tellus velit.
                        <br />
                        &emsp;&emsp; In mattis libero vel ligula venenatis, non
                        sollicitudin lectus fermentum. Integer et ornare orci.
                        <br />
                        &emsp;&emsp; Sed sit amet sem mauris.
                        <br />
                        &emsp;&emsp; Donec blandit porttitor orci.
                        <br />
                        &emsp;&emsp; Aliquam erat volutpat.
                        <br />
                        &emsp;&emsp; In imperdiet eget ipsum id tincidunt.
                        <br />
                        &emsp;&emsp; Phasellus et malesuada libero.
                        <br />
                        &emsp;&emsp; Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos.
                        <br />
                        &emsp;&emsp; Donec rutrum, dui in tempus iaculis, diam
                        sem placerat tortor, id laoreet leo ligula vitae arcu.
                        <br />
                        &emsp;&lt;/<span className="code-tag">p</span>&gt;
                        <br />
                        &lt;/<span className="code-tag">div</span>&gt;
                      </p>
                    </div>
                  </div>
                </div>
                <div className="component-card">
                  <div className="notice">
                    <div className="notice-icon-box">
                      <i className="fas fa-exclamation"></i>
                    </div>
                    <div className="notice-text ubuntu">
                      <p>This page is inspired by the Tailwind.css website</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
