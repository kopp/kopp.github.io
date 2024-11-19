import avatar from "/avatar.png";
import "./App.css";

function GithubProject(props: {
  project: string;
  name: string;
  description: string;
  isWebApp: boolean | undefined;
}) {
  const url = props.isWebApp
    ? `https://kopp.github.io/${props.project}`
    : `https://github.com/kopp/${props.project}`;
  return (
    <li>
      <a href={url} target="_blank">
        {props.name}
      </a>{" "}
      {props.description}
    </li>
  );
}

function App() {
  return (
    <>
      <div>
        <a href="https://github.com/kopp" target="_blank">
          <img src={avatar} className="logo" alt="avatar" />
        </a>
      </div>
      <h1>
        <code>kopp</code>'s Github Pages page
      </h1>
      <p>Here is a categorized list of the public repositories.</p>
      <p>It was last updated TODAY.</p>

      <div className="card">
        <h2>Simple Games</h2>
        <ul>
          <GithubProject
            project="satzwerkstatt"
            name="Satzwerkstatt"
            description="Build funny random sentences (in German)."
            isWebApp={true}
          />
          <GithubProject
            project="NumbersInLove"
            name="7❤️3 Numbers in Love"
            description="Simple game to learn which numbers add up to 10."
            isWebApp={true}
          />
          <GithubProject
            project="learn_positional_notation"
            name="Learn Positional Notation (of numbers)"
            description="Simple game to learn what e.g. 36 vs 63 means."
            isWebApp={true}
          />
          <GithubProject
            project="gethigh"
            name="Get High"
            description="Simple but addictive game to get the highest number, similar to 2048"
            isWebApp
          />
          <GithubProject
            project="remember-the-number"
            name="Remember the Number"
            description="Remember and type a number."
            isWebApp={true}
          />
          <GithubProject
            project="repeat_words"
            name="Repeat Words"
            description="Ask someone to repeat words that you read back to you and rate whether they succeeded, then get some statistics from that."
            isWebApp
          />
        </ul>
      </div>

      <div className="card">
        <h2>Useful ((Arch) Linux Users)</h2>
        <ul>
          <GithubProject
            project="build-aur-packages"
            name="Build AUR Packages"
            description="Github Action that allows to build AUR (Archlinux User Repository) packages. Used by aurci2."
            isWebApp={false}
          />
          <GithubProject
            project="aurci2"
            name="AUR CI 2"
            description="Build some AUR packages in a weekly cron job and publish the build results so that pacman can use them."
            isWebApp={false}
          />
          <GithubProject
            project="awesome_textual_battery_widget"
            name="awesome_textual_battery_widget"
            description="Text only battery widget for Awesome Window Manager"
            isWebApp={false}
          />
          <GithubProject
            project="ros-dockers"
            name="ros-dockers"
            description="Dockerfiles to work with ros"
            isWebApp={false}
          />
        </ul>
      </div>

      <div className="card">
        <h2>Useful (micro controllers)</h2>
        <ul>
          <GithubProject
            project="calliope-mini-stubs"
            name="Calliope-Mini Python Stubs"
            description="Python Stub files to write Python Code for the Calliope Mini on modern IDEs such as Visual Studio Code."
            isWebApp={false}
          />
          <GithubProject
            project="ArduinoTTP229MinimalLibrary"
            name="Minimal Arduino library TTP229 touchpad"
            description="Minimal class to read out what buttons are pressed on a TTP229 touchpad that is not i2c capable."
            isWebApp={false}
          />
        </ul>
      </div>

      <div className="card">
        <h2>Useful (Understand tools)</h2>
        <ul>
          <GithubProject
            project="minimal-gn-project"
            name="minimal gn project"
            description="Very minimal project that can be built with Google's Meta Build System gn (https://gn.googlesource.com/gn/)"
            isWebApp={false}
          />
          <GithubProject
            project="hello-cmake-world"
            name="hello cmake world"
            description="Very simple applicaton built with CMake."
            isWebApp={false}
          />
        </ul>
      </div>

      <div className="card">
        <h2>Useful (multimedia)</h2>
        <ul>
          <GithubProject
            project="photobuchauswahltool"
            name="Photobuch-Auswahl-Tool"
            description="Graphical tool to help sorting images from a source into multiple target directories (UI currently German only)."
            isWebApp={false}
          />
          <GithubProject
            project="rename-images-to-datetime"
            name="rename-images-to-datetime"
            description="Rename a bunch of image files in the current directory so that the filename is the date/time when it was taken."
            isWebApp={false}
          />
          <GithubProject
            project="ebookvoice"
            name="Ebook Voice"
            description="Tooling to extract text that can be fed to a Text To Speech engine from various inputs."
            isWebApp={false}
          />
          <GithubProject
            project="ShareToHttp"
            name="ShareToHttp"
            description="Android App to transfer texts and images quickly from your Android Device to a web browser, e.g. on a PC."
            isWebApp={false}
          />
          <GithubProject
            project="nested_asciidoc"
            name="nested asciidoc"
            description="Demo: How to handle nested asciidoc document structure"
            isWebApp={false}
          />
        </ul>
      </div>

      <div className="card">
        <h2>Teaching: material and tools (geared towards teachers)</h2>
        <ul>
          <GithubProject
            project="NWT-Protokoll-Facharbeit-Anleitung"
            name="NWT-Protokoll Facharbeit Anleitung"
            description="Step by step instructions for how to write a report on a NWT Facharbeit (German only)"
            isWebApp={false}
          />
          <GithubProject
            project="IMP-Materialien"
            name="IMP-Materialien"
            description="Teaching material for the subject IMP (Informatik, Mathematik, Physik) in Baden-Württemberg (German only)"
            isWebApp={false}
          />
          <GithubProject
            project="FachschaftssitzungenPlanen"
            name="FachschaftssitzungenPlanen"
            description="Jupyter Lab Dokument um Fachschaftssitzungen elegang zu planen"
            isWebApp={false}
          />
          <GithubProject
            project="extycion-archive"
            name="extycion-archive"
            description="Provide files that used to be available on www.extycion.de."
            isWebApp={false}
          />
          <GithubProject
            project="physik_script_abi"
            name="Physik-Script Abi 2008"
            description="Content of the German Abitur 2008 in the subject Physics"
            isWebApp={false}
          />
        </ul>
      </div>

      <div className="card">
        <h2>Teaching: interactive learning material</h2>
        <ul>
          <GithubProject
            project="CppUndoRedoWithVector"
            name="C++ Undo-Redo with Vector"
            description="UndoRedo Framework with more efficient vector based stack implementation; inspired by https://github.com/GerdHirsch/Cpp-UndoRedoFramework"
            isWebApp={false}
          />
          <GithubProject
            project="pyventskalender"
            name="Pyventskalender"
            description="Advent Calendar with a simple python problem for every day -- for absolute beginners (German only)."
            isWebApp={false}
          />
          <GithubProject
            project="HttpSynchronizedArcadeGame"
            name="HttpSynchronized Arcade Game"
            description="Demonstrator for an arcade multiplayer game that is synchronized using a central http server."
            isWebApp={false}
          />
          <GithubProject
            project="ErstePythonSchritte"
            name="Erste Python Schritte"
            description="First steps to do in python with interactive JupyterLab (German only)"
            isWebApp={false}
          />
          <GithubProject
            project="RiddlesWithHtml5AndJavaScript"
            name="RiddlesWithHtml5AndJavaScript"
            description="A simple HTML5 website with JavaScript that allows you to ask riddles and check the answer."
            isWebApp={false}
          />
          <GithubProject
            project="Html5AndCssForTeaching"
            name="Html5AndCssForTeaching"
            description="A simple Html5 page with CSS that can be used for teaching HTML5 and CSS."
            isWebApp={false}
          />
        </ul>
      </div>

      <div className="card">
        <h2>Non-technical stuff (culture, teaching, ...)</h2>
        <ul>
          <GithubProject
            project="froebelstern-anleitung"
            name="Fröbelstern Anleitung"
            description="Instructions for how to build a Fröbelstern (German)"
            isWebApp={true}
          />
          <GithubProject
            project="vorsorge"
            name="vorsorge"
            description="Notizen und Resourcen die sich mit Vorsorgethemen (Testament, Vollmachten, ...) befassen."
            isWebApp={false}
          />
          <GithubProject
            project="Kinderlieder"
            name="Kinderlieder"
            description="Selbstgedichtete Strophen von Kinderliedern"
            isWebApp={false}
          />
          <GithubProject
            project="baby_lotto"
            name="Baby Lotto"
            description="Rules how to bet on size/weight/... of my firstborn."
            isWebApp={false}
          />
        </ul>
      </div>

      <div className="card">
        <h2>Tinkering Projects</h2>
        <ul>
          <GithubProject
            project="DigitalerTeePi"
            name="Digitale Tea-Penguin"
            description="Arduino Controlled Project to precisely control the Time allowed for Tea to infuse."
            isWebApp={false}
          />
          <GithubProject
            project="RGB-colormixing-by-RFID"
            name="RGB-colormixing-by-RFID"
            description="Build a toy that shows how red/green/blue is mixed to build up multiple colors, controlled by RFID tokens."
            isWebApp={false}
          />
          <GithubProject
            project="AmigomatedDriving"
            name="Amigomated Driving"
            description="Source code and other required files to provide a base automated driving software on an AmigoBot using ROS."
            isWebApp={false}
          />
        </ul>
      </div>
    </>
  );
}

// not mentioned because incomplete
// give-me-feedback

export default App;
