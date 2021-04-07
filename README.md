**Usage:**

    npx apply leftium/vscode-preset

- This preset connects the VS Code debugger to `localhost:3000`.
- After starting the server on localhost, 'Run > Start Debugging' menu.
- You may change the server address/port
  - By editing the .vscode/launch.json file.
  - Via VS Code settings UI. ('Run > Open Configurations' menu)

**Actions taken by this preset:**
1. Adds file .vscode/launch.json.
2. Adds `.vscode` to `.gitignore`.

More information about [presets](https://usepreset.dev/).
