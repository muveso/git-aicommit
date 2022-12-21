module.exports = {
    openAiKey: process.env.OPENAI_API_KEY,
    addAllChangesBeforeCommit: true,
    autocommit: true,
    openCommitTextEditor: false,
    promptBeforeDiff: 'Read the following git diff for multiple files in a mobile Unity Game Engine project:',
    promptAfterDiff: 'Generate single conventional commit format to explain all this diff to a human without mentioning changes themselves; the commit message must be less than 73 characters:',
    excludeFromDiff: [
        '*.lock'
    ],
    diffFilter: 'ACMRTUXB',
    completionPromptParams: {
        model: "text-davinci-003",
        max_tokens: 750,
        temperature: 0.5,
        top_p: 1,
        presence_penalty: 0,
        frequency_penalty: 0,
        best_of: 10,
        n: 1,
        stream: false,
        stop: ["\n\n\n"],
    }
}
