import { Preset } from 'apply';

Preset.setName('vscode-preset');
Preset.extract('.vscode/launch.json').withDots().whenConflict('ask');
Preset.extract('.gitignore').withDots().whenConflict('skip');

Preset.edit('.gitignore').update((content, preset) => {
    let result = content;

    if (!result.includes('.vscode')) {
        result += `\n.vscode`;
    }

    return result;
});

