let skip = false;

const terminal = document.getElementById("terminal");

const lines = [
  {
    type: "command",
    text: "$whoami",
  },
  {
    type: "output",
    text: "Pentester & Security Researcher ",
  },
  {
    type: "command",
    text: "$ls -l",
  },
  {
    type: "output",
    text: `<span style="color:#8b949e">click to view</span><br>`,
  },
  {
    type: "output",
    text: `
<span style="color:#00ff9c">📁 </span>
<a class="link" href="/pentest">Pentest/</a>
<span style="color:#8b949e">← Resume</span><br>

<span style="color:#00ff9c">📁 </span>
<a class="link" href="/blog">blog/</a><br>

📄 <a class="link" href="/contact" title="صفحه تماس">contact.txt</a>
`,
  },
];

let lineIndex = 0;

function typeLine() {
  if (lineIndex >= lines.length) {
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.textContent = "█";
    terminal.appendChild(cursor);
    return;
  }

  const line = lines[lineIndex];
  const div = document.createElement("div");
  div.className = line.type;
  terminal.appendChild(div);

  const text = line.text;
  let i = 0;

  if (skip) {
    div.innerHTML = text;
    lineIndex++;
    setTimeout(typeLine, 50);
    return;
  }

  const interval = setInterval(() => {
    div.innerHTML = text.substring(0, i);
    i++;
    if (i > text.length) {
      clearInterval(interval);
      lineIndex++;
      setTimeout(typeLine, 120);
    }
  }, 10);
}

typeLine();

//  Skip animation on click

document.addEventListener("click", () => {
  skip = true;
});
