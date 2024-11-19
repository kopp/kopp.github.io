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
        <h2>Useful (Arch Linux Users)</h2>
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
        </ul>
      </div>

      <div className="card">
        <h2>Teaching and learning</h2>
        <ul>
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
        </ul>
      </div>
    </>
  );
}

export default App;
