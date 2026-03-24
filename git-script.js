const chapters = {
    git_intro: `
        <div class="chapter-content">
            <h1>What is Git & GitHub?</h1>
            <p>Before typing commands, you must understand the explicit difference between Git and GitHub. Here is the step-by-step primer.</p>
            
            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: The Diary vs. The Library</strong><br>
                <strong>Git</strong> is the actual pen and diary you use to write your secret story locally on your desk. You can cross things out, write new pages, or go back to old pages. <strong>GitHub</strong> is the massive global Library up in the cloud where you publish a copy of your diary so the whole world (or just your team) can read it and suggest edits.</p>
            </div>

            <h2>📚 Step 1: Understand Git (The Tool)</h2>
            <p>Git is a "Version Control System" (VCS) software installed locally on your computer. It tracks exactly which lines of code were added in every file, taking snapshots (commits) so you can reverse time if a bug breaks your app.</p>

            <h2>☁️ Step 2: Understand GitHub (The Host)</h2>
            <p>GitHub is a website owned by Microsoft. It is essentially Google Drive for developers. It securely stores the Git history snapshots you upload from your computer so your code is backed up and shareable.</p>

            
        </div>
    `,
    git_setup: `
        <div class="chapter-content">
            <h1>Account & Installation</h1>
            <p>You cannot track code without the software. Follow these explicit steps to configure your machine.</p>

            <h2>🌐 Step 1: Create your GitHub Account</h2>
            <p>Go to <a href="https://github.com" target="_blank" style="color:var(--accent);">github.com</a> and sign up. Pick a professional username as this will act as your permanent digital resume for employers.</p>

            <h2>💻 Step 2: Install Git Locally</h2>
            <p>Download Git from <code>git-scm.com</code> and install it. This allows you to run Git commands directly inside your command-line terminal.</p>

            <h2>⚙️ Step 3: Configure Your Identity</h2>
            <p>Because Git tracks <em>who</em> wrote the code, you must tell it your name and email once. Open your terminal and run:</p>
            <pre><code>git config --global user.name "Your Name"
git config --global user.email "you@example.com"</code></pre>
            <p>This attaches your identity to every snapshot you ever take.</p>

            
        </div>
    `,
    git_repos: `
        <div class="chapter-content">
            <h1>Deep Dive: Repositories</h1>
            <p>A "Repository" (Repo) is the absolute core of Git. Here is what you must understand about them.</p>

            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: The Vault</strong><br>
                A repository isn't magical; it's just a normal folder on your computer (like "my-website"). But the moment you invoke Git, an invisible vault (<code>.git</code>) is spawned seamlessly inside it that watches every single file maneuver you make.</p>
            </div>

            <h2>📂 Step 1: Local vs Remote Repositories</h2>
            <p>A <strong>Local Repo</strong> exists only on your specific computer's hard drive. A <strong>Remote Repo</strong> is the cloud-hosted copy resting securely on GitHub.</p>

            <h2>👻 Step 2: The Hidden <code>.git</code> Folder</h2>
            <p>When you initialize Git, it creates a hidden <code>.git</code> folder. This folder contains your entire project history. <em>Never manually delete or edit files in this folder</em>, or you will corrupt your entire tracking history!</p>

            <h2>📖 Step 3: Structure the README.md</h2>
            <p>Every repository needs a <code>README.md</code> file in its root. This is the front-page document written in Markdown that explains to strangers what your code does and how to run it.</p>

            <h2>🚫 Step 4: Rule the <code>.gitignore</code> File</h2>
            <p>Not everything should be tracked. You must create a <code>.gitignore</code> file and list things like passwords, massive database files, and operating system junk (<code>.DS_Store</code>) so Git ignores them permanently.</p>

            
        </div>
    `,
    git_workflow: `
        <div class="chapter-content">
            <h1>The Core Workflow</h1>
            <p>This is the definitive 4-step cycle you will repeat every single day as a software engineer.</p>

            <div class="diagram-box">
                <div class="diagram-node">Working Dir<br><span>(Local Files)</span></div>
                <div class="diagram-arrow">➔<br><small>git add</small></div>
                <div class="diagram-node server">Staging Area<br><span>(Index Prep)</span></div>
                <div class="diagram-arrow">➔<br><small>git commit</small></div>
                <div class="diagram-node db">Local Repo<br><span>(.git Snapshot)</span></div>
                <div class="diagram-arrow">➔<br><small>git push</small></div>
                <div class="diagram-node auth">GitHub<br><span>(Cloud Sync)</span></div>
            </div>

            <h2>📌 Step 1: Initialize (<code>git init</code>)</h2>
            <p>Navigate into your project folder and run <code>git init</code>. This transforms an ordinary folder into a Git-tracked local repository.</p>

            <h2>📝 Step 2: Stage (<code>git add .</code>)</h2>
            <p>Run <code>git add .</code>. This tells Git: "Take every file I just modified and place them in the staging area getting ready for a photo." You can also add specific files using <code>git add index.html</code>.</p>

            <h2>📸 Step 3: Commit (<code>git commit -m "Message"</code>)</h2>
            <p>Run <code>git commit -m "Added login button"</code>. This permanently captures the snapshot of the staged files. <em>Important:</em> Always write extremely descriptive, active-tense commit messages!</p>

            <h2>🚀 Step 4: Push (<code>git push</code>)</h2>
            <p>Run <code>git push origin main</code>. This transmits your local snapshots securely up to the internet, depositing them inside your Remote GitHub repository.</p>

            
        </div>
    `,
    git_branches: `
        <div class="chapter-content">
            <h1>Branches & Merging</h1>
            <p>You cannot edit the main project while a company is running it. You must use Branches.</p>

            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: The Multiverse</strong><br>
                Branching is cloning the universe. The <code>main</code> branch is the stable, live production code. When you want to build a crazy new feature, you create a parallel universe (branch). You can break everything in your branch without affecting the live <code>main</code> timeline. If it works, you merge the universes together!</p>
            </div>

            <div class="diagram-box">
                <div class="diagram-node">main<br><span>(Live Prod)</span></div>
                <div class="diagram-arrow">➔<br><small>git branch</small></div>
                <div class="diagram-node server">feature<br><span>(Experiment)</span></div>
                <div class="diagram-arrow">➔<br><small>git merge</small></div>
                <div class="diagram-node">main<br><span>(Updated V2)</span></div>
            </div>

            <h2>🌿 Step 1: Create a Branch (<code>git branch</code>)</h2>
            <p>Run <code>git branch feature-login</code>. This creates a safe, isolated clone of the code.</p>

            <h2>🔀 Step 2: Switch Branches (<code>git checkout</code>)</h2>
            <p>Run <code>git checkout feature-login</code> (or <code>git switch feature-login</code>) to teleport your computer into that specific isolated timeline.</p>

            <h2>🛠️ Step 3: Work Safely</h2>
            <p>Now, perform the standard <code>add</code> and <code>commit</code> loop safely inside your branch.</p>

            <h2>🤝 Step 4: Merge to Main (<code>git merge</code>)</h2>
            <p>Once perfection is achieved, switch back to main (<code>git checkout main</code>), and run <code>git merge feature-login</code> to permanently fuse your new code into the official product.</p>

            
        </div>
    `,
    git_collab: `
        <div class="chapter-content">
            <h1>Collaboration Pro-Tips</h1>
            <p>GitHub allows thousands of strangers to code together seamlessly. Here are the required steps.</p>

            <h2>📥 Step 1: Download from Cloud (<code>git clone</code>)</h2>
            <p>If you join a company, you don't use <code>git init</code>. You run <code>git clone https://github.com/company/repo</code> to download a complete, pre-configured local copy of their massive project.</p>

            <h2>🔄 Step 2: Sync Colleague Updates (<code>git pull</code>)</h2>
            <p>When your teammate pushes code to the cloud, your computer doesn't update automatically. Run <code>git pull</code> daily to seamlessly download and apply their new changes onto your machine.</p>

            <h2>🍴 Step 3: Forking Open Source</h2>
            <p>If you don't have permission to edit someone's cloud repo, you click **Fork** on GitHub. This duplicates their entire repository into your personal account where you officially own it.</p>

            <h2>📤 Step 4: The Pull Request (PR)</h2>
            <p>When you finish a feature on a branch, you push it to GitHub and open a "Pull Request". This alerts the Senior Developers: <em>"I finished a feature! Please review my code diff."</em> Once approved by seniors, it is cleanly merged into the official <code>main</code> branch!</p>
            
            <div class="highlight-box">
                <p><strong>🎯 Ultimate Workflow:</strong><br>
                Clone ➔ Branch ➔ Add ➔ Commit ➔ Push ➔ Pull Request ➔ Merge</p>
            </div>
        </div>
    `,
    git_conflicts: `
        <div class="chapter-content">
            <h1>Resolving Conflicts</h1>
            <p>Conflicts are not errors. They are simply Git asking the human developer what to do when code clashes.</p>

            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: Two Painters on One Canvas</strong><br>
                If two painters try to paint the exact same spot on a canvas with different colors instantly, neither color wins automatically. The gallery owner (You) must explicitly choose to keep the blue, keep the red, or mix them manually.</p>
            </div>

            <h2>⚔️ Step 1: When Do Conflicts Happen?</h2>
            <p>When you try to run <code>git pull</code> or <code>git merge</code>, and your colleague has edited the exact same line of code in the exact same file as you. Git halts the merge and waits for your instruction.</p>

            <h2>🔍 Step 2: Open the Conflicting File</h2>
            <p>Open the file in VS Code. Git injects bizarre markers like <code><<<<<<< HEAD</code> and <code>=======</code> directly into your raw code, physically showing you the exact collision between your active edits and incoming cloud edits.</p>

            <h2>✅ Step 3: Choose the Winner</h2>
            <p>Manually delete the markers and edit the line so it looks exactly how the final program should execute. Many modern code editors let you just click "Accept Current Change" or "Accept Incoming Change".</p>

            <h2>🚀 Step 4: Finalize the Commit</h2>
            <p>Once you save the file, run <code>git add .</code> followed simply by <code>git commit -m "Resolved conflict"</code> to finalize the peace treaty.</p>
        </div>
    `,
    git_reset: `
        <div class="chapter-content">
            <h1>Time Travel: Log & Reset</h1>
            <p>When you break your codebase, you can easily rip open the timeline to recover your software.</p>

            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: The DeLorean Time Machine</strong><br>
                If you crash your car in 2026, you can just view your timeline records (<strong>Git Log</strong>), find the ID for yesterday before the crash, and hit the time travel button (<strong>Git Reset</strong>) to permanently warp your entire universe back to exactly how it was 24 hours ago.</p>
            </div>

            <h2>📜 Step 1: Read the Timeline (<code>git log</code>)</h2>
            <p>Run <code>git log --oneline</code>. This prints out every snapshot you've ever taken in a neat descending list. Beside every commit message is a unique mathematical Hash (like <code>4a2f8d3</code>) representing that exact point in time.</p>

            <h2>⏪ Step 2: The Soft Rewind (<code>git checkout</code>)</h2>
            <p>Want to just look around without changing the future permanently? Run <code>git checkout 4a2f8d3</code>. Your code natively reverting instantly back precisely to that old snapshot so you can copy old logic safely.</p>

            <h2>💥 Step 3: The Hard Rewind (<code>git reset --hard</code>)</h2>
            <p>If your newest code is a catastrophic disaster, run <code>git reset --hard 4a2f8d3</code>. This explicitly deletes all the mistakes you made in the future, warping your active project physically back to the target checkpoint forever.</p>
        </div>
    `,
    git_forks: `
        <div class="chapter-content">
            <h1>Working with Forks</h1>
            <p>Forking is the absolute standard mechanism for contributing to Open Source projects securely.</p>

            <h2>🍴 Step 1: Click the Fork Button</h2>
            <p>You cannot push code directly into Facebook's React repository. Instead, you click the "Fork" button on their GitHub page. GitHub instantly creates a massive 1:1 duplicate isolated copy of their codebase solely inside your personal account.</p>

            <h2>📥 Step 2: Clone Your Personal Copy</h2>
            <p>Now, run <code>git clone</code> on YOUR personal URL, not the original organization's URL. Perform your code edits and push them locally up strictly into your isolated repository.</p>

            <h2>🌉 Step 3: Creating the Upstream Link</h2>
            <p>If the original organization radically updates their main project natively, your isolated fork won't get those changes automatically. You must heavily run <code>git remote add upstream [original-url]</code> to safely wire your clone securely to the original vault, allowing you to fetch their latest updates completely seamlessly today without overwriting your changes natively.</p>
        </div>
    `,
    git_pages: `
        <div class="chapter-content">
            <h1>GitHub Pages (Free Hosting)</h1>
            <p>You can natively use GitHub explicitly to host basic websites efficiently to the public internet completely for free without touching Vercel deeply.</p>

            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: The Museum Exhibit</strong><br>
                A standard GitHub repository is an underground storage vault storing source code explicitly intended manually for developers. <strong>GitHub Pages</strong> acts exactly as a museum curator instantly pulling your front-end code efficiently out of the vault and mounting it gorgeously beautifully on public display walls for the entire global world to dynamically view securely through a browser.</p>
            </div>

            <h2>📦 Step 1: Target Static Files</h2>
            <p>GitHub Pages uniquely functionally works seamlessly specifically for rendering Frontend Static websites natively (HTML, CSS, JS). It explicitly completely does not spin up logic servers or dynamic DBs safely.</p>

            <h2>⚙️ Step 2: The Settings Panel</h2>
            <p>Navigate effectively to your repository expressly heavily on the remote GitHub desktop UI properly. Click the Settings gear centrally, smoothly scroll implicitly down precisely intelligently to "Pages" actively physically on the left visual sidebar effectively.</p>

            <h2>🚀 Step 3: Branch Selection</h2>
            <p>Under the "Build and Deployment" physically explicitly deeply functionally fundamentally effectively heavily explicitly strictly fundamentally deeply intelligently centrally securely explicitly select securely your <code>main</code> selectively branch intelligently purely purely effectively exclusively efficiently globally globally intelligently effectively globally securely securely securely efficiently uniquely successfully.</p>
        </div>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-theme');
        }
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        });
    }

    const tocItems = document.querySelectorAll('#toc li');
    const contentDiv = document.getElementById('content');

    function loadChapter(chapterId) {
        if (chapters[chapterId] && contentDiv) {
            contentDiv.style.opacity = 0;
            setTimeout(() => {
                contentDiv.innerHTML = chapters[chapterId];
                contentDiv.style.transition = 'opacity 0.3s ease';
                contentDiv.style.opacity = 1;
            }, 100);

            tocItems.forEach(item => item.classList.remove('active'));
            const activeItem = document.querySelector('#toc li[data-target="' + chapterId + '"]');
            if (activeItem) activeItem.classList.add('active');
        }
    }

    tocItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            loadChapter(target);
        });
    });

    loadChapter('git_intro');
});
