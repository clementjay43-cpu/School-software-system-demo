==========================================================
 SCHOLARA - EDUCATION MANAGEMENT PLATFORM (SALES DEMO)
==========================================================

HOW TO START
 1. Extract (unzip) this folder anywhere on your computer.
 2. Windows: double-click  start.bat
    Mac:     double-click  start.command
 3. A terminal window opens and the demo appears in your browser.
    Keep the terminal open while you use the demo. Close it to stop.

If the page does not open by itself, go to  http://localhost:3000

NO NODE.JS?
 If Node.js is not installed, start.bat opens the demo straight in your browser.
 Everything still works. (Node.js is free from nodejs.org if you want the server.)

DEMO DATA
 All names and records are fictional. Changes are saved in this browser only.
 Use "Reset demo data" in the top bar to restore the original sample records.
 Use the "Viewing as" menu to show how the screens change for each role.

WHAT IS INSIDE THE DEMO
 Dashboard, Students (photos, grades, report cards), School management, College admissions,
 Consulting, Tutoring center, Programs and milestones, Calendar, and Reports (print or CSV).
 Six roles change what each person can see and do.

DEPLOY ON VERCEL (gives your client a link)
 Option A - website:
  1. Put this folder in a GitHub repository (github.com > New repository > upload files).
  2. On vercel.com choose Add New > Project, pick the repository, and press Deploy.
     No settings need changing (vercel.json is already included).
 Option B - command line (needs Node.js):
  1. Open a terminal in this folder.
  2. Run:  npx vercel --prod   and follow the prompts.
 Your client opens the link in any browser. Their changes stay in their own browser,
 so each visitor starts with the same sample data.
