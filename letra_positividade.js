async function EnviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

Enviarscript(`
Tá torcendo contra o meu progresso
Tá preocupado com meu sucesso
Eu sei quem trama e quem tá comigo
Cansei de dar moral pra falso amigo!

A ingratidão é virtude dos fracos
Eu não sou daqueles que cospe no prato
Vou na fé, tô firmão, tranquilão, tô na paz
Dá licença aqui que eu tô correndo atrás!

Tu lembra dos menor ralé que você tirou de mané
Hoje a firma tá de pé
Tá em construção o castelo da fé
Tô vendo os invejoso voltando de ré!

É assim que é, é assim que é
Malandro é malandro e mané é mané
Coração de vagabundo bate na sola do pé
Toda positividade remando contra a maré!

É assim que é
Malandro é malandro e mané é mané
Coração de vagabundo bate na sola do pé
Toda positividade remando contra a maré!

(DJ W tá? Pega!)
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
