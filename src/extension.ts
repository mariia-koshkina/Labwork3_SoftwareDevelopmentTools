import * as vscode from 'vscode';
import { STANDARD_LIBRARY_MAP } from './standardLibraryMap';

// Удаление однострочных и многострочных комментариев из текста
function RemoveComments(text: string): string {
    let result = '';
    let i = 0;
    const n = text.length;

    let in_single_quote = false;
    let in_double_quote = false;
    let in_line_comment = false;
    let in_block_comment = false;

    while (i < n) {
        const char = text[i];
        const next_char = i + 1 < n ? text[i + 1] : '';

        if (!in_line_comment && !in_block_comment) {
            if (char === '"' && !in_single_quote) {
                if (i === 0 || text[i - 1] !== '\\') {
                    in_double_quote = !in_double_quote;
                    result += char;
                } else {
                    result += char;
                }
            } else if (char === "'" && !in_double_quote) {
                if (i === 0 || text[i - 1] !== '\\') {
                    in_single_quote = !in_single_quote;
                    result += char;
                } else {
                    result += char;
                }
            } else if (char === '/' && next_char === '/' && !in_single_quote && !in_double_quote && !in_block_comment) {
                in_line_comment = true;
                i++;
            } else if (char === '/' && next_char === '*' && !in_single_quote && !in_double_quote && !in_line_comment) {
                in_block_comment = true;
                i++;
            } else {
                if (!in_single_quote && !in_double_quote) {
                    result += char;
                } else {
                    result += char;
                }
            }
        } else if (in_line_comment) {
            if (char === '\n' || char === '\r') {
                in_line_comment = false;
                if (char === '\n') {
                   result += char;
                } else if (char === '\r') {
                    if (next_char === '\n') {
                        result += '\n';
                        i++;
                    } else {
                        result += '\n';
                    }
                }
            }
        } else if (in_block_comment) {
            if (char === '*' && next_char === '/') {
                in_block_comment = false;
                i++; 
            }
        }

        i++;
    }

    return result;
}

export function activate(context: vscode.ExtensionContext) {
    // Основная логика программы
	console.log('Congratulations, your extension "cpp-include-cleaner" is now active!');

	const disposable = vscode.commands.registerCommand('cpp-include-cleaner.helloWorld', async () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('No active text editor found!');
			return;
		}
		const document = editor.document;
		const text_with_comments = document.getText();
		const text = RemoveComments(text_with_comments);

		// Парсинг
		const lines = text.split('\n');
		const includes = [];
		for (let i = 0; i < lines.length; i++) {
    		const line = lines[i].trimStart();
    		if (line.startsWith('#include')) {
				let header_name = '';
				let start_char = '';
				let end_char = '';
				if (line.includes('<')) {
					start_char = '<';
					end_char = '>';
				} else if (line.includes('"')) {
					start_char = '"';
					end_char = '"';
				}
				if (start_char && end_char) {
            		const start_pos = line.indexOf(start_char);
            		const end_pos = line.indexOf(end_char, start_pos + 1);

					if (start_pos !== -1 && end_pos !== -1 && end_pos > start_pos) {
						header_name = line.substring(start_pos + 1, end_pos);
						includes.push({ headerName: header_name, lineNumber: i });
            		}
				} else {
					vscode.window.showErrorMessage('Incorrect use of #include');
				}
			}
		}

		// Поиск неиспользуемых библиотек в "очищенном" файле
		const unused_includes = [];

        for (const include of includes) {
            const header_name = include.headerName;
            const symbols = STANDARD_LIBRARY_MAP[header_name];

            if (!symbols) {
                console.log(`Unknown library: ${header_name}, skipping...`);
                continue;
            }

            let is_used = false;
            for (const symbol of symbols) {
                if (text.includes(symbol)) {
                    is_used = true;
                    console.log(`Library ${header_name} is used via symbol: ${symbol}`);
                    break;
                }
            }
			if (!is_used) {
                unused_includes.push(include);
                console.log(`Library ${header_name} appears to be unused`);
            }
        }

        // Удаление неиспользуемых #include в исходном файле

        if (unused_includes.length > 0) {
            const original_lines = text_with_comments.split('\n');
            const includes_to_remove = unused_includes.map(unused => {
                const index = original_lines.findIndex(line => {
                    const trimmed_line = line.trimStart();
                    return trimmed_line.startsWith('#include') && trimmed_line.includes(unused.headerName);
                });
                if (index === -1) {
                    console.warn(`Could not find original line for unused include: ${unused.headerName}`);
                }
                return index;
            }).filter(index => index !== -1);

            if (includes_to_remove.length > 0) {
                includes_to_remove.sort((a, b) => b - a);
                await editor.edit(edit_builder => {
                    for (const lineIndex of includes_to_remove) {
                        const range = new vscode.Range(lineIndex, 0, lineIndex, original_lines[lineIndex].length);
                        edit_builder.delete(range);
                    }
                });

                vscode.window.showInformationMessage(`Removed ${includes_to_remove.length} unused #include(s).`);
            } else {
                 vscode.window.showInformationMessage(`Could not find any unused includes in the original file.`);
            }

        } else {
            vscode.window.showInformationMessage('All includes are being used!');
        }		

	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
