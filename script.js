const chapters = {
    guide: `
        <div class="chapter-content">
            <h1>Build a Website with Antigravity</h1>
            <p>Here's a clear step-by-step guide to build a website using Google Antigravity (from beginner to running your site):</p>
            
            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: The IKEA Bookshelf</strong><br>
                Coding manually is like going to the forest, chopping wood, and measuring everything yourself. Using Antigravity is like buying an IKEA flat-pack with a robotic assistant—you provide the "vibe" and instructions of what you want, and the AI handles the heavy lifting step-by-step until the shelf is fully built.</p>
            </div>

            <h2>🚀 Step 1: Install & Open Antigravity</h2>
            <ul>
                <li>Go to the official site: <a href="https://antigravity.google/" target="_blank" style="color:var(--accent);">https://antigravity.google/</a></li>
                <li>Download and install it.</li>
                <li>Open Antigravity → you’ll see an AI-powered coding workspace.</li>
            </ul>

            <h2>📁 Step 2: Create a New Project</h2>
            <ul>
                <li>Click <strong>“New Project”</strong></li>
                <li>Choose Template: <strong>Web App</strong> (or blank if you want full control)</li>
                <li>Give your project a name (e.g., <code>my-website</code>)</li>
            </ul>

            <h2>⚙️ Step 3: Setup Basic Structure</h2>
            <p>Inside your project, create files: <code>index.html</code>, <code>style.css</code>, <code>script.js</code>.</p>

            <h2>🧠 Step 4: Use AI to Generate UI</h2>
            <p>Antigravity is AI-first, so instead of coding everything manually, try prompts like: <em>“Create a modern landing page for a cafe website”</em>. It generates code instantly.</p>

            <h2>🎨 Step 5: Customize Frontend</h2>
            <p>You’ll mainly edit <strong>HTML</strong> for structure, <strong>CSS</strong> for design, and <strong>JS</strong> for interactions.</p>

            <h2>▶️ Step 6: Run the Website</h2>
            <ul>
                <li>Click Run / Preview</li>
                <li>Antigravity will start a local server</li>
                <li>Open browser preview → see your website live</li>
            </ul>

            <h2>📦 Step 7: (Optional) Add Backend with Node.js</h2>
            <p>If you want dynamic features (Login systems, Forms, Database connection):</p>
            <pre><code>npm init -y
npm install express</code></pre>

            <h2>🗄️ Step 8: (Optional) Connect Database</h2>
            <p>Use Supabase (easy for beginners) or MongoDB for Login systems, Storing user data, and Forms.</p>

            <h2>🌍 Step 9: Deploy Your Website</h2>
            <p>Deploy using Netlify or Vercel by uploading your project to get a live URL.</p>

            
        </div>
    `,
    frontend: `
        <div class="chapter-content">
            <h1>What is Frontend?</h1>
            <p>Frontend is the part of a website that users see and interact with in their browser. Let's break down how to approach it step-by-step.</p>

            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: Building a House</strong><br>
                When you build a physical house, you first lay the raw wooden frame and bricks (<strong>HTML</strong>). Then, you paint that wood, pick out nice tiles, and choose the exterior aesthetic (<strong>CSS</strong>). Finally, you rig the electricity and plumbing so the lights turn on when you flick a switch (<strong>JavaScript</strong>).</p>
            </div>

            <div class="diagram-box">
                <div class="diagram-node" style="border-color:#e34c26">HTML<br><span>Structure</span></div>
                <div class="diagram-arrow" style="font-size: 2rem;">+</div>
                <div class="diagram-node" style="border-color:#264de4">CSS<br><span>Design</span></div>
                <div class="diagram-arrow" style="font-size: 2rem;">+</div>
                <div class="diagram-node" style="border-color:#f0db4f; color:#000;">JS<br><span>Interactivity</span></div>
            </div>

            <h2>🖼️ Step 1: Understand the User Interface (UI)</h2>
            <p>First, realize that everything visible on your screen—buttons, forms, menus, images, and animations—is strictly part of the Frontend. When designing, your first step is visual planning.</p>

            <h2>🏗️ Step 2: Build the Skeleton (HTML)</h2>
            <p>You start your web development process by writing HTML. This builds the absolute structure of the website. At this step, the website is unstyled—it's just headings, paragraphs, and raw image files.</p>
            
            <h2>👗 Step 3: Apply the Styling (CSS)</h2>
            <p>Once the skeleton is complete, you use CSS to make it beautiful. This step involves adding colors, customizing spacing, applying custom fonts, and making sure the website collapses properly on mobile phones (responsiveness).</p>

            <h2>⚡ Step 4: Inject Interactivity (JavaScript)</h2>
            <p>Finally, your static painting becomes a working machine. You use JavaScript to add behavior: tracking button clicks, validating form inputs, and firing off animations.</p>

            
        </div>
    `,
    languages: `
        <div class="chapter-content">
            <h1>Role of Each Language</h1>
            <p>Let's take a Step-by-Step look at exactly how each core language applies when bringing a modern webpage to life.</p>
            
            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: A High-End Restaurant</strong><br>
                The dining room layout is <strong>HTML</strong>. The beautiful decor and lighting is <strong>CSS</strong>. The menus that flip open and respond to your touch act as <strong>JavaScript</strong>. Meanwhile in the back, the head Chef reading your order is <strong>Node.js/Python</strong>, and the giant pantry where all the ingredients are permanently stored is the <strong>SQL Database</strong>.</p>
            </div>

            <h2>🧱 Step 1: Write the HTML (The Bones)</h2>
            <p><strong>Role:</strong> You start by defining where things go on the page.</p>

            <h2>🎨 Step 2: Write the CSS (The Clothes)</h2>
            <p><strong>Role:</strong> Next, you step in to control the appearance.</p>

            <h2>⚡ Step 3: Write the JavaScript (The Muscle)</h2>
            <p><strong>Role:</strong> Finally, you deploy code that makes the site function.</p>

            
        </div>
    `,
    js_frontend: `
        <div class="chapter-content">
            <h1>JavaScript in Frontend</h1>
            <p>Here is a step-by-step explanation of how JavaScript is practically used to make a static website smart.</p>

            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: A Car's Dashboard</strong><br>
                Imagine driving a car without JavaScript: every time you press the accelerator, you'd have to turn the car entirely off and back on just to see the new speed on your dashboard. With JavaScript, your dashboard receives data instantly—the needles spin and light up dynamically while the car keeps running smoothly.</p>
            </div>

            <h2>🖱️ Step 1: Listen for User Actions (Events)</h2>
            <p>The first step in JS is setting up "Event Listeners" constantly waiting for the user to do something.</p>

            <h2>📋 Step 2: Validate Data locally</h2>
            <p>Check if user input is correct (e.g., checking if a password is too short) before it leaves the browser.</p>

            <h2>🔄 Step 3: Update HTML silently</h2>
            <p>Using the DOM, JS can instantly inject new text or images onto the screen securely.</p>

            <h2>🌐 Step 4: Fetch API Data</h2>
            <p>JS uses <code>fetch()</code> to silently ask a backend server for data in the background.</p>

            
        </div>
    `,
    js_login: `
        <div class="chapter-content">
            <h1>JS in Login Systems</h1>
            <p>How do login systems actually work? Here is the step-by-step process of JavaScript securing a user session.</p>

            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: The VIP Nightclub</strong><br>
                Think of JavaScript as the bouncer at the club door. It first checks your ID to see if it's completely fake (Client Validation). Next, it radios the club boss inside with your name (API Request). The boss verifies you are on the list (Database Check). Once verified, the bouncer slaps a VIP wristband on you (Saving the JWT Token), allowing you to walk freely into the VIP section without being stopped again.</p>
            </div>

            <h2>📋 Step 1: Process the Input Form</h2>
            <p>JS checks local requirements: are fields empty? If so, show an error immediately.</p>

            <h2>🔄 Step 2: Send Data securely to API</h2>
            <p>JS packages the email and password into JSON and sends it over HTTPS via POST request.</p>

            <h2>🔐 Step 3: Parse the Server Response</h2>
            <p>If the response fails, JS creates an "Invalid Credentials" error.</p>

            <h2>🍪 Step 4: Store Authentic Tokens</h2>
            <p>JS saves the secure Token returned by the server inside Local Storage.</p>

            
        </div>
    `,
    js_advanced: `
        <div class="chapter-content">
            <h1>Advanced JS Features</h1>
            <p>Moving beyond basics, here is an explicit step-by-step breakdown of implementing advanced JavaScript functionality on modern websites.</p>

            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: A Smart Home System</strong><br>
                Basic JS is clicking a light switch. Advanced JS is smart home engineering: programming sensors to turn off all TVs automatically when you leave the house (Local Storage state), setting up alarms that track time to bake a pizza (Timers), and commanding robotic window blinds to open dynamically as the sun rises (Scroll Animations).</p>
            </div>

            <h2>🛠️ Step 1: Master DOM Manipulation</h2>
            <p>Advanced JS requires controlling the page dynamically. Learn to instantly create, delete, and alter any HTML nodes based on programmatic conditionals.</p>
            
            <h2>⏱️ Step 2: Set Timers & Automations</h2>
            <p>Next, deploy features that run automatically without user interaction. This includes countdown timers, auto-advancing carousels, or delayed popups using <code>setTimeout</code>.</p>

            <h2>🗂️ Step 3: Implement Local Storage Caching</h2>
            <p>To improve user experience, persist options. Step 3 involves writing JS that saves "Dark Mode" config to local memory, so when the user returns tomorrow, the site remembers without hitting a database.</p>

            
        </div>
    `,
    backend: `
        <div class="chapter-content">
            <h1>What is Backend?</h1>
            <p>The Frontend is just the surface. Building the invisible engine requires following this step-by-step structural workflow.</p>
            
            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: An Amazon Warehouse</strong><br>
                The frontend is the beautiful Amazon website you scroll. But the Backend is the massive robotic warehouse hidden from the public. When you click "Buy Now" on the frontend, it sends a signal to the backend computers which automatically charge your card (Application Logic), subtract the item from inventory (Database action), and trigger a robotic arm to package your box (API execution).</p>
            </div>

            <div class="diagram-box">
                <div class="diagram-node">Frontend<br><span>(Browser)</span></div>
                <div class="diagram-arrow">➔<br><small>API Request</small></div>
                <div class="diagram-node server">Backend<br><span>(Node Server)</span></div>
                <div class="diagram-arrow">➔<br><small>SQL Query</small></div>
                <div class="diagram-node db">Database<br><span>(Memory Vault)</span></div>
            </div>

            <h2>🖥️ Step 1: Boot up a Server Environment</h2>
            <p>The first step is setting up a computer process (like a Node.js Server) that runs 24/7. It binds to a specific 'Port' and listens for HTTP requests from across the world.</p>

            <h2>⚙️ Step 2: Program Application Logic</h2>
            <p>When the server receives a request, it needs to know what to do. You write precise logic (e.g. Node.js code) that processes the request: "If user sends login info, verify the password string."</p>

            <h2>🗄️ Step 3: Initialize Database Connections</h2>
            <p>Because code memory evaporates upon crash, your server securely connects to a permanent Database vault to query, register, and securely protect your user tables.</p>

            <h2>🌉 Step 4: Expose APIs to Frontend</h2>
            <p>Finally, your server creates standard API URL paths (like <code>/api/login</code>). The Frontend JavaScript calls these specific routes precisely to invoke the server logic.</p>
            
            
        </div>
    `,
    databases: `
        <div class="chapter-content">
            <h1>Intro to Databases</h1>
            <p>Websites need permanent memory. Here is how you evaluate and implement databases step-by-step.</p>
            
            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: Office Filing Cabinet vs. A Shoebox</strong><br>
                A <strong>SQL Database</strong> is like a massive corporate filing cabinet. Every drawer is meticulously labeled, strict rules dictate what paper goes in what slot, and you can cross-reference names instantly via an index. A <strong>NoSQL Database</strong> is like an enormous expanding shoebox. You can just toss receipts, photos, and sticky notes of completely different shapes into the box at breakneck speeds without formatting them.</p>
            </div>

            <h2>🗂️ Step 1: Pick SQL vs NoSQL Paradigm</h2>
            <ul>
                <li><strong>Step A (SQL):</strong> Choose this for structured data (like bank accounts) where everything fits into rigid rows and columns (e.g., PostgreSQL).</li>
                <li><strong>Step B (NoSQL):</strong> Choose this for flexible, highly scalable data that resembles JSON object documents (e.g., MongoDB).</li>
            </ul>

            <h2>🔌 Step 3: Link over ORM</h2>
            <p>Instead of typing raw query commands, you install an ORM (Object-Relational Mapper) inside your server application. This instantly maps your database tables to coding functions.</p>

            
        </div>
    `,
    git: `
        <div class="chapter-content">
            <h1>Version Control (Git)</h1>
            <p>Never lose your source code again. Here is the strict step-by-step workflow for tracking your project history safely.</p>
            
            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: Video Game Checkpoints</strong><br>
                Imagine playing a brutally difficult video game with zero save system. If you die on world 8, you have to start the entire game from level 1 again. <strong>Git</strong> acts as your manual Save Checkpoint. Every time you finish a new game level (or a cool coding feature), you "commit" your code. If you accidentally destroy your code on the next level, you simple load up your last Git save state!</p>
            </div>

            <h2>📌 Step 1: Initialize Git Tracker (<code>git init</code>)</h2>
            <p>Open your local terminal strictly at your project's root folder and type <code>git init</code>. This spawns a hidden directory instructing Git to watch your files.</p>

            <h2>📝 Step 2: Stage Current Changes (<code>git add .</code>)</h2>
            <p>Once you finish building a new feature, type <code>git add .</code> into terminal. This prepares ("stages") every file you just edited to be bundled securely into one logical update.</p>

            <h2>📸 Step 3: Execute Commit (<code>git commit -m "Update"</code>)</h2>
            <p>Take the snapshot! Firing off <code>git commit</code> officially generates an unbreakable standard history checkpoint that you can rewind to if any future bugs emerge.</p>
            
            
        </div>
    `,
    hosting: `
        <div class="chapter-content">
            <h1>Web Hosting Basics</h1>
            <p>You built your site. Now follow these explicit steps to release it accurately to the global public.</p>

            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: Opening a Retail Store</strong><br>
                Coding a website dynamically locally is like building beautiful display racks inside your own private garage. No customer can see it. Web Hosting (like Vercel or Netlify) is when you rent real commercial real estate out on the main street so strangers can walk in. Attaching a Domain Name (like <code>my-store.com</code>) is hanging the giant glowing neon sign above the front door.</p>
            </div>

            <h2>🚀 Step 3: Target Host Deployment</h2>
            <p>Register for a deployment provider like Vercel or Netlify. Click "New Project" and integrate your GitHub repository. The host downloads your code automatically, compiles the framework, and launches a live public server.</p>
            
            <h2>🌍 Step 4: Integrate Custom DNS Domains</h2>
            <p>The host yields a standard URL (e.g. <code>my-site.vercel.app</code>). Purchase a primary brand domain from Namecheap, and explicitly input the target nameservers into your host's Dashboard.</p>

            
        </div>
    `,
    langs_deep_dive: `
        <div class="chapter-content">
            <h1>Programming Languages Deep Dive</h1>
            <p>How do languages combine inside complex apps? Here is the step-by-step chain of execution where specific languages take complete over.</p>
            
            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: A Massive Cargo Ship</strong><br>
                <strong>JavaScript</strong> acts as the digital steering wheel perfectly reacting to the captain's touch. <strong>Python</strong> is the complex navigation radar predicting weather streams effortlessly. <strong>C++</strong> is the raw, vibrating diesel engine room deep underwater driving pure speed. <strong>SQL</strong> is the clipboard manifest tracking exactly which shipping containers are strapped to the deck.</p>
            </div>

            <h2>🕸️ Step 1: DOM interactivity (JavaScript)</h2>
            <p>Whenever you execute logic exclusively in the user browser (clicking a modal, swiping menus), <strong>JavaScript</strong> commands are universally invoked. It's the inescapable entry point.</p>

            <h2>⚙️ Step 3: Heavy Duty Operations (C++ / Rust)</h2>
            <p>If the backend needs to run tasks demanding zero latency latency (like 3D game engines, heavy compression algorithms), it hands off the process down to low-level languages like <strong>C++</strong> or memory-safe <strong>Rust</strong>.</p>

            
        </div>
    `,
    apis_and_http: `
        <div class="chapter-content">
            <h1>APIs & How the Web Works</h1>
            <p>Here is the exact step-by-step Request-Response cycle that occurs in mere milliseconds every single time you navigate anywhere.</p>
            
            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: Ordering Delivery Pizza</strong><br>
                You browsing the menu on your phone is the Frontend. When you tap "Order Pizza", your phone creates an <strong>HTTP Request</strong>. The <strong>API</strong> behaves exactly like the phone operator picking up the line: they check your credit card and relay your pizza request to the kitchen (The Server & Database). Once the pizza is cooked, the operator sends it to your house inside a box (The JSON <strong>Response</strong>), and you eat it (Browser Rendering).</p>
            </div>

            <div class="diagram-box">
                <div class="diagram-node">Client<br><span>(Browser App)</span></div>
                <div class="diagram-arrow">➔<br><small>HTTP GET Request</small></div>
                <div class="diagram-node server">API Router<br><span>(Data Validation)</span></div>
                <div class="diagram-arrow">➔<br><small>JSON Response</small></div>
                <div class="diagram-node">Client<br><span>(Renders HTML)</span></div>
            </div>

            <h2>🌐 Step 1: The Initial DNS Query</h2>
            <p>When you type a URL (like <code>google.com</code>), the browser queries a "DNS" book to translate that URL into the server's real numerical IP address target.</p>

            <h2>📞 Step 2: Formatting the HTTP Request</h2>
            <p>The browser constructs an HTTP protocol packet addressed to the target IP. It sets a specific Action Verb: <code>GET</code> (Send me a page) or <code>POST</code> (Process this form).</p>

            <h2>🔌 Step 3: What Exactly is an API?</h2>
            <p>An API (Application Programming Interface) is a structured set of rules that allows different software applications to communicate with one another. Instead of building complex algorithms from scratch, developers use APIs to "plug into" existing services, like generating a map or fetching live weather data.</p>

            <h2>🔑 Step 4: Securing Access with API Keys</h2>
            <p>To prevent abuse, many APIs require an <strong>API Key</strong>. This is a unique, secret string of characters passed in your HTTP Request (often in the headers). It acts like a digital ID card so the server knows exactly who is calling the API, ensuring you are authorized and enabling the provider to track your usage reliably.</p>

            <h2>⏳ Step 5: API Key Expiry Criteria</h2>
            <p>For security and billing purposes, API keys are rarely permanent. They generally expire based on several criteria:</p>
            <ul>
                <li><strong>Time-based Rotation:</strong> Keys often automatically expire every 30, 60, or 90 days to drastically limit the impact if a key is compromised.</li>
                <li><strong>Usage Limits (Rate Limiting):</strong> A key might forcibly expire or become temporarily blocked if an account exceeds a strict query limit (e.g., 10,000 requests per month or 50 requests per second).</li>
                <li><strong>Manual Revocation:</strong> If an API key is accidentally exposed publicly (like being pushed to a public GitHub repository), developers or automated security scanners will revoke and invalidate it immediately.</li>
            </ul>
            
        </div>
    `,
    web_security: `
        <div class="chapter-content">
            <h1>Web Security Fundamentals</h1>
            <p>Security is not automatic. It requires layered step-by-step implementation. Enforce these steps fully to secure any application layer.</p>

            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: A High-Security Vault</strong><br>
                <strong>HTTPS Encrypting</strong> is the armored truck transporting cash—no one can see inside it on the highway. <strong>Authentication (AuthN)</strong> is the fingerprint scanner proving you are a legitimate employee. <strong>Authorization (AuthZ)</strong> is determining that even though you are an employee, your badge doesn't grant you permission to open the master vault. <strong>Sanitizing</strong> acts as the metal detector stopping hackers from smuggling dangerous SQL tools inside the building.</p>
            </div>

            <h2>🔒 Step 1: Enforce HTTPS Connection Layer</h2>
            <p>Your foundational first step is routing all traffic exclusively behind TLS/SSL certificates over <code>https://</code>. This definitively encrypts all passing payloads so intercepting hackers read only gibberish.</p>

            <h2>🔑 Step 3: Define Authentication Core (AuthN)</h2>
            <p>Implement severe identity verification protocols. Generate hashed passwords (using <code>bcrypt</code> libraries) inside the database. Issue encrypted JWTs back to users verifying identity integrity.</p>

            
        </div>
    `,
    modern_frameworks: `
        <div class="chapter-content">
            <h1>Modern Frameworks & Tools</h1>
            <p>Global software teams scale modern web architecture systematically following this explicit multi-step development timeline.</p>
            
            <div class="highlight-box" style="border-left-color: #bc8cff; background-color: rgba(188, 140, 255, 0.08);">
                <p><strong>🌍 Real-Life Example: Running a Drone Factory</strong><br>
                Building massive websites purely by hand with vanilla JavaScript is akin to whittling wood. Moving to a Framework like <strong>React</strong> is upgrading to an automated assembly line dropping prefabricated metal doors onto the models dynamically. <strong>Cypress Testing</strong> acts as the robotic safety arm that aggressively shakes every drone off the conveyor belt to ensure wings don't snap. The <strong>CI/CD Pipeline</strong> represents the final factory manager who, upon seeing a green light, autonomously packs and ships millions of models worldwide.</p>
            </div>

            <h2>⚛️ Step 1: Structure with JavaScript UI Frameworks</h2>
            <p>Instead of typing messy native DOM bindings, developers deploy <strong>React</strong>, <strong>Angular</strong>, or <strong>Vue</strong>. This enforces dividing applications into logically separated JSX Components ensuring high-speed rendering standards.</p>

            <h2>🧪 Step 3: Lock-In Component Test Coverage</h2>
            <p>Teams mandate testing modules. Developers write test blocks specifically using <strong>Jest</strong> to ensure their utilities always spit out perfect math results, alongside <strong>Cypress</strong> logic to algorithmically click through menus mimicking human behaviors without fail.</p>

            
        </div>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle Logic
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

    loadChapter('guide');

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => scrollObserver.observe(el));
});
