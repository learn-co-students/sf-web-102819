# Hashketball 🏀

## Administrative 🧐

- **Recommendation:** *Don't* code along with lecture unless asked
  - Lectures are time to learn and review
  - Learn.co is time to introduce and reinforce
  - Laptops "half-mast"
- Lecture pacing
  - Lectures in Mod 1 generally happen before labs
  - By Mod 2, expectation is to learn material beforehand
- Claps and snaps
  - At the end of lecture
  - After someone answers a question (let's fight imposter syndrome together)

## Ruby 🧰

### The Command-Line Interface (CLI) 🎛

- Text-based user interface (instead of Graphical User Interface, or GUI)
  - More direct, can be scripted
  - [List of Command Line Commands](https://www.codecademy.com/articles/command-line-commands)
  - Side Note: [24 keyboard shortcuts Mac users need to know](https://www.computerworld.com/article/3023544/24-keyboard-shortcuts-mac-users-need-to-know.html)
- Navigating file structure
  - Folder ≈ Directory
  - Working Directory = where you are right now (in the terminal)
  - `cd`: **c**hange **d**irectory
  - `ls`: **l**i**s**t (files and folders)
  - `pwd`: **p**rint **w**orking **d**irectory
- Changing file structure
  - `touch`: create new, empty file
  - `mkdir`: **m**a**k**e **dir**ectory
  - `rm`: **r**e**m**ove
    - 🚨 *Dangerous: Cannot be undone*
    - Ex: `rm -rf ./FOLDERNAME` recursively deletes folder and contents without warnings
- Running
  - `git`: **git**
    - Uses version-control system *git*
    - Ex: `git branch BRANCHNAME` changes working branch to BRANCHNAME
  - `irb`: **i**nteractive **R**u**b**y environment
    - Launches a REPL (Read-Evaluate-Print Loop)
    - Interactive language shell (a sandbox)
  - `ruby`: **Ruby**
    - Uses Ruby interpreter to run code
    - Ex: `ruby run.rb` interprets, executes contents of `run.rb` with Ruby
  - `code`: Visual Studio **Code**
    - Ex: `code .` opens the working directory in VSCode
- *What do we mean by "set up our environment"?*

### Working in Ruby 💎

- Data types in Ruby
  - Numbers
    - Integers
    - Floating-point Decimals ("Floats")
  - Strings
  - Arrays
  - Hashes
  - Booleans (`true` or `false`)
  - Symbols
  - `nil` (the absence of a value)
- Test-Driven Development (TDD)
  - Write test code before working code
  - Use test code to drive lab progress
- Testing our code with `learn` or `rspec`
  - RSPEC syntax: reading errors
  - `rspec --fail-fast` handles one error at a time
  - Red, Green, Refactor
  - Make it work (shameless green), Make it right, Make it fast
  - Debugging tools: binding.pry & puts
- Best Practices in coding
  - Single Responsibility Principle
  - Keep code DRY (DON'T REPEAT YOURSELF) principle: refactor code if redundant
- Array and hash methods!
  - Iterator methods: `#each`, `#map`, `#find` & `#select`
  - Single-line blocks versus do & end multi-line blocks
- Questions!?

## More Administrative 🤓

- What's your optimal learning process / workflow?
  - Personal Empowerment Protocol
    - 10 minutes: on your own
      - ***READ THE ERROR***
      - Think about what each line and character is doing
      - Test every small change and note the difference
    - 10 minutes: with the Internet
      - [***DOC-FIRST***](https://ruby-doc.org/)
      - [Refine web searches](https://support.google.com/websearch/answer/2466433?hl=en)
    - 10 minutes: with a neighbor
      - Communicate what you're trying to do
      - Communicate how you're trying to do it
      - Communicate the error
      - Communicate what you've done so far to fix it
    - 10 minutes: with an instructor (one more time with feeling)
- Imposter Syndrome (fear of being a fraud)
  - If you're not making mistakes, you're not trying hard enough.
  - If you develop, you’re a developer. If you program, you’re a programmer. If you engineer, you’re an engineer.
  - Take refuge in: 
    - The fact that we are more than the sum of our thoughts
    - We abide in community with others
    - When we make a mistake, we gain an opportunity to grow
- Claps and snaps
  - At the end of lecture
  - After someone answers a question (fight imposter syndrome)
- Daily schedule
  - Discussion/Interview Question
  - Lecture in morning or afternoon
  - Lab time in morning or afternoon
  - New labs at 4-5pm
  - Occassional pairing labs
- Today's labs: mostly prework!
- Check Slack for info and updates