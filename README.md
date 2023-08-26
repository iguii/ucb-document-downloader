# UCB document downloader chrome extension

Ever since the last time my University [UCB](https://www.ucb.edu.bo/) updated the LMS that students and teachers
use everyday, it came with an obnoxious file previewer that doesn't have an option to download said files the easy way.
This extension aims to solve that issue!

## How it works?

It is a very simple JS script that detects when the currently active tab is in **neo.ucb.edu.bo/student_lesson/show/\***
in order to execute. After it detects that it is on the desired URL, it searches for one specific element in the DOM:
the "file previewer" and then it extracts the source URL from the file using some RegEx.

Finally, it creates two buttons at the top of the File previewer to open the desired file in a new tab or directly download it.

## Contributions

I'm planning to add new features on the future, but if you have a great idea that can make this extension better, feel free to open a
PR with your changes!
