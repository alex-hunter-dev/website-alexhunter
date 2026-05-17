export default function Home() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-name">Alex Hunter</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <div className="eyebrow">// hello world</div>
          <h1>Alex Hunter</h1>
          <div className="role">Robotics &amp; Embedded Systems Engineer</div>
          <p className="lede">
            Recent UNSW Mechatronic Engineering (Hons) + Computer Science
            graduate. I build things that sense, decide, and move — from BLE
            wearables to autonomous robots. Based in Sydney, Australia.
          </p>
          <div className="cta-row">
            <a href="#projects" className="btn primary">
              See projects →
            </a>
            <a href="/Alex_Hunter_Resume.pdf" className="btn">
              Download CV
            </a>
            <a href="https://github.com/Ald0g" className="btn">
              GitHub
            </a>
            <a href="https://linkedin.com/in/alexhunter4/" className="btn">
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="container">
          <h2>About</h2>
          <div className="section-sub">// who and what</div>
          <div className="about-grid">
            <div>
              <p>
                I'm a recently-graduated engineer who lives in the overlap
                between mechatronics and software. My favourite problems are
                ones where firmware, sensors, control, and clean code all need
                to work together.
              </p>
              <p>
                At Cochlear I spent 18 months as a verification engineer on
                cochlear implant systems, while quietly shipping internal
                tooling that cut release-cycle effort by half. At UNSW I taught
                control systems and digital circuit design for four years
                alongside my degree. My thesis was a wearable phonocardiogram —
                embedded firmware, custom BLE service, Android app, and a
                Butterworth+DSP pipeline to render heart sounds in real time.
              </p>
              <p>
                I'm currently looking for robotics, embedded, or controls roles
                in Sydney (or remote-friendly), and I'm willing to obtain a
                Baseline / NV1 security clearance.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <div className="val">87.89</div>
                <div className="lbl">WAM @ UNSW</div>
              </div>
              <div className="stat">
                <div className="val">5×</div>
                <div className="lbl">Dean's List</div>
              </div>
              <div className="stat">
                <div className="val">1.5y</div>
                <div className="lbl">@ Cochlear V&amp;V</div>
              </div>
              <div className="stat">
                <div className="val">4y</div>
                <div className="lbl">teaching @ UNSW</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <h2>Selected Projects</h2>
          <div className="section-sub">// things i've built</div>
          <div className="projects">
            <div className="project-card">
              <h3>Wireless Wearable Phonocardiogram</h3>
              <div className="meta">UNSW Honours Thesis · 2024</div>
              <div className="desc">
                A wearable heart-sound monitor: Nordic nRF52832 firmware
                streams ADC samples over a custom BLE notify service to a Kotlin
                Android app, which applies a Butterworth bandpass and a custom
                DSP heart-rate algorithm to render S1/S2 sounds and BPM in real
                time.
              </div>
              <div className="tags">
                <span className="tag">C</span>
                <span className="tag">Kotlin</span>
                <span className="tag">nRF52</span>
                <span className="tag">BLE</span>
                <span className="tag">DSP</span>
              </div>
              <div className="result">
                ★ Self-taught BLE + DSP + Kotlin to ship · Mark: 83%
              </div>
            </div>
            <div className="project-card">
              <h3>Autonomous Mobile Robot (Micro-Mouse)</h3>
              <div className="meta">MTRN3100 · 2023</div>
              <div className="desc">
                Robot that maps then solves a 5×9 maze. IMU + LiDAR + encoder
                fusion for pose correction (100% wall avoidance),
                cubic-trajectory motion profile to eliminate wheel slip, and BFS
                exploration/planning for guaranteed shortest paths.
              </div>
              <div className="tags">
                <span className="tag">C++</span>
                <span className="tag">Arduino</span>
                <span className="tag">SLAM</span>
                <span className="tag">BFS</span>
              </div>
              <div className="result">
                ★ Full marks · 100% map accuracy · Top-3 traversal speed
              </div>
            </div>
            <div className="project-card">
              <h3>Extended Kalman Filter Localiser</h3>
              <div className="meta">MTRN4010 · 2023</div>
              <div className="desc">
                EKF localiser fusing kinematic-model odometry with LiDAR
                landmark observations, holding pose error under 0.1 m / 2°.
                Companion observer-based estimator using <code>fminsearch</code>
                for landmark-association optimisation.
              </div>
              <div className="tags">
                <span className="tag">MATLAB</span>
                <span className="tag">EKF</span>
                <span className="tag">LiDAR</span>
                <span className="tag">Sensor Fusion</span>
              </div>
              <div className="result">
                ★ Full marks · 98% final course mark
              </div>
            </div>
            <div className="project-card">
              <h3>Computer Vision Pick-and-Place</h3>
              <div className="meta">MTRN4230 · 2023</div>
              <div className="desc">
                Detected game pieces with a webcam, transformed positions into
                a UR5e's coordinate frame, and executed pick-and-place with a
                suction gripper. Custom Bug 2 path planner with fallback
                piece-shuffling when no direct path existed.
              </div>
              <div className="tags">
                <span className="tag">MATLAB</span>
                <span className="tag">OpenCV</span>
                <span className="tag">UR5e</span>
                <span className="tag">Bug 2</span>
              </div>
              <div className="result">★ Full marks · 100% reliability</div>
            </div>
            {/* <div className="project-card">
              <h3>Steering Wheel Controller PCB</h3>
              <div className="meta">Sunswift Racing · 2023–2024</div>
              <div className="desc">
                Two 2-layer PCBs (paddles + push buttons) for the solar car's
                CAN bus. Verified mechanical fit by importing the assembly into
                SolidWorks against the steering wheel model — caught
                interference before fabrication.
              </div>
              <div className="tags">
                <span className="tag">Altium</span>
                <span className="tag">SolidWorks</span>
                <span className="tag">CAN</span>
              </div>
              <div className="result">★ Zero physical prototypes needed</div>
            </div>
            <div className="project-card">
              <h3>50W CO₂ Laser Cutter</h3>
              <div className="meta">Personal · 2020–2021</div>
              <div className="desc">
                Designed and built a working 50 W CO₂ laser cutter from 60+
                unique components for $1,500. Hands-on with G-code, homing,
                soft/hard limits, tensioning, and HV safety.
              </div>
              <div className="tags">
                <span className="tag">Fusion 360</span>
                <span className="tag">GRBL</span>
                <span className="tag">Arduino</span>
                <span className="tag">HV</span>
              </div>
              <div className="result">★ Fully functional</div>
            </div> */}
            <div className="project-card">
              <h3>Git Reimplemented in Python</h3>
              <div className="meta">COMP2041 · 2024</div>
              <div className="desc">
                Reimplemented core Git plumbing/porcelain (<code>init</code>,
                <code>add</code>, <code>commit</code>, <code>log</code>,
                <code>show</code>, <code>rm</code>, <code>status</code>,
                <code>branch</code>, <code>checkout</code>, <code>merge</code>)
                with a content-addressed object store and a POSIX-compatible
                shell test suite.
              </div>
              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">Bash</span>
                <span className="tag">Internals</span>
              </div>
              <div className="result">★ 99.5% project mark</div>
            </div>
            <div className="project-card">
              <h3>Cross-Platform Education App</h3>
              <div className="meta">COMP3900 capstone · 2024</div>
              <div className="desc">
                Led a 6-person scrum team to ship a multi-page education app
                with full user management on a 10-week deadline, including
                React Native (Expo, TypeScript) frontend and Django backend.
              </div>
              <div className="tags">
                <span className="tag">React Native</span>
                <span className="tag">Django</span>
                <span className="tag">Docker</span>
                <span className="tag">Scrum lead</span>
              </div>
              <div className="result">★ 86% · Positive client feedback</div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <h2>Experience</h2>
          <div className="section-sub">// where i've worked</div>
          <div className="exp-item">
            <h3>System Verification &amp; Validation Engineer</h3>
            <div className="org">Cochlear Limited · Macquarie Park</div>
            <div className="when">Jan 2024 – May 2025 · ~1.5 years (part-time, student engineer)</div>
            <ul>
              <li>
                Built a Python + React/Flask timeline estimation tool automating
                Jama and Jira scraping — cut manual estimation effort 10× and
                total release verification duration by >50%.
              </li>
              <li>
                Designed and shipped a custom inventory management system
                (React/Vite + Flask + SQLAlchemy); first stocktake recovered
                80+ lost items; traceability reporting >300% faster.
              </li>
              <li>
                Ranked 3rd on the team for Jira issues raised through rigorous
                test execution on cochlear implant systems.
              </li>
              <li>
                Ran an internal Python workshop and paired-programming sessions;
                teammates now extend the automation toolchain themselves.
              </li>
            </ul>
          </div>
          <div className="exp-item">
            <h3>Laboratory Demonstrator</h3>
            <div className="org">UNSW · Kensington, Sydney</div>
            <div className="when">Feb 2021 – Nov 2024 · ~4 years</div>
            <ul>
              <li>Taught 9 terms across Control Systems and Digital Circuit Design.</li>
              <li>90.9% of surveyed students agreed teaching deepened their understanding.</li>
              <li>Co-authored annual revisions to lab manuals; assessment and feedback scores rose each year.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <h2>Technical Skills</h2>
          <div className="section-sub">// tools of the trade</div>
          <div className="skills-grid">
            <div className="skill-group">
              <h3>Embedded &amp; Hardware</h3>
              <div className="items">
                C/C++ · nRF Connect SDK v2 · BLE · ADC/DSP · Arduino · Verilog ·
                Xilinx FPGAs · LTspice · Altium · SolidWorks · Fusion 360
              </div>
            </div>
            <div className="skill-group">
              <h3>Robotics &amp; Control</h3>
              <div className="items">
                Control systems · MATLAB · OpenCV · IMU/LiDAR/encoder fusion · EKF ·
                Motion planning (BFS, Bug 2) · UR5e
              </div>
            </div>
            <div className="skill-group">
              <h3>Software</h3>
              <div className="items">
                Python · Java · TypeScript/JavaScript · React · React Native · Kotlin ·
                Swift · SQL/PostgreSQL · REST APIs · Flask · Django
              </div>
            </div>
            <div className="skill-group">
              <h3>Practice</h3>
              <div className="items">
                Git/GitHub · CI/CD · Agile/Scrum · Unit testing · Technical drawing ·
                Documentation
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="contact-card">
            <h2>Let's talk.</h2>
            <p>
              Open to robotics, embedded, and controls roles in Sydney (or
              remote-friendly). Australian citizen, willing to obtain Baseline /
              NV1 security clearance.
            </p>
            <div className="cta-row" style={{ justifyContent: "center" }}>
              <a href="mailto:alex.hunter4004@gmail.com" className="btn primary">
                alex.hunter4004@gmail.com
              </a>
              <a href="https://linkedin.com/in/alexhunter4/" className="btn">
                LinkedIn
              </a>
              <a href="https://github.com/Ald0g" className="btn">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          © Alex Hunter · Built with HTML, CSS, and a stubborn refusal to use a framework.
        </div>
      </footer>
    </>
  );
}
